(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["mini-axios"] = factory());
})(this, (function () { 'use strict';

  function xhr(config) {
      const { data = null, url, method = 'get' } = config;
      const request = new XMLHttpRequest();
      request.open(method.toUpperCase(), url, true);
      request.send(data);
  }

  function axios(config) {
      xhr(config);
  }

  return axios;

}));
//# sourceMappingURL=axios.umd.js.map
