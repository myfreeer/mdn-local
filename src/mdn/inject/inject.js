'use strict';
/* global document window */
!function () {
  /// region old compatibility table
  // old compatibility table script, missing from official site
  // implemented with pure js
  // noinspection ES6ConvertVarToLetConst
  var htabs = document.getElementsByClassName('htab'),
    desktops = document.querySelectorAll('div[id=compat-desktop]'),
    mobiles = document.querySelectorAll('div[id=compat-mobile]'),
    len = htabs.length,
    i, j, htab, links, a;

  function changeTabListener(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    // noinspection ES6ConvertVarToLetConst
    var li, ul, i, index, selfIndex, elems, tab;
    if (!(li = this.parentNode)) return false;
    if ((ul = li.parentNode)) {
      index = 0;
      elems = ul.childNodes;
      for (i = 0; i < elems.length; i++) {
        if (elems[i].tagName !== 'LI') {
          continue;
        }
        if (elems[i] === li) {
          selfIndex = index;
          elems[i].classList.add('selected');
        } else {
          elems[i].classList.remove('selected');
        }
        ++index;
      }
    }
    if ((tab = ul.parentNode)) {
      index = 0;
      elems = tab.childNodes;
      for (i = 0; i < elems.length; i++) {
        if (elems[i].tagName !== 'DIV') {
          continue;
        }
        if (index++ === selfIndex) {
          elems[i].style.display = '';
        } else {
          elems[i].style.display = 'none';
        }
      }
    }
  }

  for (i = 0; i < len; i++) {
    htab = htabs[i];
    links = htab.querySelectorAll('ul>li>a');
    if (desktops[i]) {
      // noinspection JSCheckFunctionSignatures
      htab.appendChild(desktops[i]);
    }
    if (mobiles[i]) {
      // noinspection JSCheckFunctionSignatures
      htab.appendChild(mobiles[i]);
    }
    for (j = 0; j < links.length; j++) {
      a = links[j];
      a.addEventListener('click', changeTabListener);
      if (j === 0) {
        changeTabListener.call(a);
      }
    }
  }
  /// endregion old compatibility table

  // mock fetch to avoid script errors
  window.fetch = function () {
    return Promise.resolve({
      json: function () {
        return Promise.resolve({
          is_superuser: true,
          waffle: {flags: {}, samples: {}, switches: {registration_disabled: true}}
        });
      }
    });
  };

  /// region URL constructor workaround for firefox with file protocol
  // TypeError: URL constructor: null is not a valid URL.
  // In firefox, location.origin for file:// urls could be 'null'
  // noinspection ES6ConvertVarToLetConst
  var URL = window.URL;
  if (URL && (
    window.location.origin === 'null' ||
    window.location.origin === null)) {
    window.URL = function (url, base) {
      if (base === null || base === 'null') {
        return new URL(url, window.location.href);
      }
      return new URL(url, base);
    };
    if (URL.createObjectURL) {
      window.URL.createObjectURL = URL.createObjectURL;
    }
    if (URL.revokeObjectURL) {
      window.URL.revokeObjectURL = URL.revokeObjectURL;
    }
    if (URL.prototype) {
      window.URL.prototype = URL.prototype;
    }
  }
  /// endregion URL constructor workaround for firefox with file protocol
}();
