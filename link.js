const URI = require('urijs');
const path = require('path');
const got = require('got');
const fs = require('fs');
const cheerio = require('cheerio');
const mkdirs = require('mkdirp');
const defaultOptions = require('./options');

const cacheUri = {};
/**
 *
 * @param {string} url
 * @param {got.GotBodyOptions} opts
 * @return {got.GotPromise<any>}
 */
const get = (url, opts = {}) => got(url, opts);
/**
 * 缓存的URI
 * @param {string} url
 * @param {boolean} enabled
 * @return {URI}
 */
const uriOf = (url, enabled = false) => {
  if (enabled && url in cacheUri && cacheUri[url] instanceof URI) {
    return cacheUri[url];
  }
  const uri = new URI(url);
  if (enabled) {
    return cacheUri[url] = uri;
  }
  return uri;
};

const writeFile = (buffer, filePath) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    mkdirs.sync(dir);
  }
  return new Promise(resolve =>
    fs.writeFile(filePath, buffer, resolve));
};

const writeStr = (str, filePath, encoding = 'utf8') => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    mkdirs.sync(dir);
  }
  return new Promise(resolve =>
    fs.writeFile(filePath, str, {encoding}, resolve));
};

class Link {
  constructor(url, localRoot, refUrl, options = {}) {
    this.options = Object.assign(options, defaultOptions);
    this.encoding = this.options.encoding.buffer;
    if (typeof this.options.urlFilter === 'function') {
      url = this.options.urlFilter(url);
    }
    this.refUri = uriOf(refUrl, this.options.cacheUri);
    if (url.startsWith('//')) {
      url += this.refUri.protocol() + ':';
    }
    this.uri = uriOf(url, this.options.cacheUri);
    this.savePath = '';
    this.localRoot = localRoot;
    this._downloadLink = url;
    /**
     * 远程路径
     * @type string
     */
    this.url = url;
    this.body = null;
    this.encoding = null;
  }
  equals(link) {
    return link && link.url === this.url;
  }
  toString() {
    return this.url;
  }
  async fetch() {
    if (this.body) return this.body;
    if (typeof this.options.requestRedirectFunc === 'function') {
      this._downloadLink =
        this.options.requestRedirectFunc(this._downloadLink, this);
    }
    const res = await get(this._downloadLink,
      Object.assign(this.options.req, {encoding: this.encoding}));
    if (res && res.body) {
      return this.body = res.body;
    } else {
      throw new Error(res.body);
    }
  }
  async save() {
    if (!this.savePath) {
      return false;
    }
    if (!this.body) {
      await this.fetch();
    }
    if (this.encoding) {
      return await writeStr(this.body, this.savePath, this.encoding);
    }
    return await writeFile(this.body, this.savePath);
  }
}

class Resource extends Link{
  constructor(url, localRoot, refUrl, options = {}) {
    super(url, localRoot, refUrl, options);
    if (this.refUri.is('relative')) {
      throw new TypeError('refUrl必须是绝对路径');
    }
  }
  set url(url) {
    this._url = url;
    if (this.uri.is('relative')) {
      this.replacePath = this.uri.clone();
      this.uri = this.uri.absoluteTo(this.refUri);
      this._url = this.uri.toString();
    } else {
      this.replacePath = this.uri.relativeTo(this.refUri);
    }
    this.host = this.uri.hostname();
    this.serverPath = this.uri.path();
    this.savePath = path.join(this.localRoot, this.host, this.serverPath);
    this._downloadLink = this.uri.clone().hash('').toString();
  }
  get url() {
    return this._url;
  }
  get replaceStr() {
    return this.replacePath.toString();
  }
}

class HtmlResource extends Resource {
  constructor(url, localRoot, refUrl, options = {}) {
    super(url, localRoot, refUrl, options);
    /**
     * @type {string|null}
     */
    this.encoding =this.options.encoding.html;
  }

  set url(url) {
    super.url = url;
    if (!this.savePath.endsWith('.html')) {
      if (this.savePath.endsWith('/')) {
        this._appendSuffix('index.html');
      } else if (this.savePath.endsWith('.htm')) {
        this._appendSuffix('l');
      } else {
        this._appendSuffix('.html');
      }
    }
  }

  get url() {
    return super.url;
  }

  /**
   *
   * @param {string} suffix
   * @private
   */
  _appendSuffix(suffix) {
    this.savePath += suffix;
    const path = this.replacePath.path();
    this.replacePath.path(path + suffix);
  }

  /**
   * 获取HTML字符串
   * @return {string}
   */
  get html() {
    if (this.doc) {
      return this.doc.html();
    }
    return '';
  }

  async fetch() {
    if (this.doc) {
      return this.doc;
    }
    /**
     * @type string
     */
    const body = await super.fetch();
    /**
     * @type CheerioStatic
     */
    return this.doc = cheerio.load(body);
  }

  async save() {
    if (!this.savePath) {
      return false;
    }
    if (!this.doc) {
      await this.fetch();
    }
    return await writeStr(this.html, this.savePath, this.encoding);
  }
}

module.exports.Resource = Resource;
module.exports.HtmlResource = HtmlResource;