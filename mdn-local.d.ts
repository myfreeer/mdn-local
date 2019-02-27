import URI from 'urijs'
import * as got from "got";
import {CheerioStatic, Cheerio} from "cheerio";


interface Options {
    beginUrl: string;
    localRoot: string;
    depth?: number;
    concurrency?: number;
    req?: got.GotBodyOptions;
    encoding?: Encoding;
    urlFilter?: UrlFilterFunc;
    cacheUri?: boolean;
    preProcessHtml?: HtmlProcessFunc;
    postProcessHtml?: HtmlProcessFunc;
    linkRedirectFunc?: LinkRedirectFunc;
    requestRedirectFunc?: RequestRedirectFunc;
    dropResourceFunc?: DropResourceFunc;
    onSuccess?: Function;
    onError?: Function;
}

interface Encoding {
    buffer: null;
    html: string;
}
interface UrlFilterFunc {
    (url: string):string;
}

interface HtmlProcessFunc {
    ($: CheerioStatic, res: HtmlResource): CheerioStatic;
}

interface RequestRedirectFunc {
    (url: string, res: Link): string;
}

interface LinkRedirectFunc {
    (url: string, element: Cheerio, parent: HtmlResource): string;
}

interface DropResourceFunc {
    (res: Resource): boolean;
}

interface Body {}

declare class Link {
    constructor(url: string, localRoot: string, refUrl:string, options: Options);
    options: Options;
    encoding: string | null;
    refUri: URI;
    uri: URI;
    savePath: string;
    localRoot: string;
    private _downloadLink: string;
    depth: number;
    url: string;
    body: null | Body;
    equals(link: Link) : boolean;
    toString(): string;
    fetch(): Promise<Body>;
    save(): Promise<any>;
}

declare class Resource extends Link{
    constructor(url: string, localRoot: string, refUrl: string, options: Options);
    readonly replaceStr: string;
    private _url: string;
    public replacePath: URI;
    serverPath: string;
}

declare class HtmlResource extends Resource {
    constructor(url: string, localRoot: string, refUrl: string, options: Options);
    private __appendSuffix(suffix: string) : void;
    private doc?: CheerioStatic;
    readonly html?: string;
}