(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["mini-axios"] = factory());
})(this, (function () { 'use strict';

    function xhr(config) {
        var _a = config.data, data = _a === void 0 ? null : _a, url = config.url, _b = config.method, method = _b === void 0 ? 'get' : _b;
        var request = new XMLHttpRequest();
        request.open(method.toUpperCase(), url, true);
        request.send(data);
    }

    function axios(config) {
        xhr(config);
    }

    return axios;

}));
//# sourceMappingURL=axios.umd.js.map
