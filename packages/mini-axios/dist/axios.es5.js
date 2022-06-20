function xhr(config) {
    const { data = null, url, method = 'get' } = config;
    const request = new XMLHttpRequest();
    request.open(method.toUpperCase(), url, true);
    request.send(data);
}

function axios(config) {
    xhr(config);
}

export { axios as default };
//# sourceMappingURL=axios.es5.js.map
