function xhr(config) {
    var _a = config.data, data = _a === void 0 ? null : _a, url = config.url, _b = config.method, method = _b === void 0 ? 'get' : _b;
    var request = new XMLHttpRequest();
    request.open(method.toUpperCase(), url, true);
    request.send(data);
}

function axios(config) {
    xhr(config);
}

export { axios as default };
//# sourceMappingURL=axios.es5.js.map
