const toString = Object.prototype.toString;
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
function isObject(val) {
    return val !== null && typeof val === 'object';
}

function encode(val) {
    return encodeURIComponent(val)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
}
function buildURL(url, params) {
    if (!params) {
        return url;
    }
    const hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
    }
    const parts = [];
    Object.keys(params).forEach((key) => {
        let val = params[key];
        if (val === null || typeof val === 'undefined') {
            return;
        }
        let values;
        if (Array.isArray(val)) {
            values = val;
            key += '[]';
        }
        else {
            values = [val];
        }
        values.forEach((val) => {
            if (isDate(val)) {
                val = val.toISOString();
            }
            else if (isObject(val)) {
                val = JSON.stringify(val);
            }
            parts.push(`${encode(key)}=${encode(val)}`);
        });
    });
    let serializedParams = parts.join('&');
    if (serializedParams) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}

function xhr(config) {
    const { data = null, url, method = 'get' } = config;
    const request = new XMLHttpRequest();
    request.open(method.toUpperCase(), url, true);
    request.send(data);
}

function axios(config) {
    processConfig(config);
    return xhr(config);
}
function processConfig(config) {
    config.url = transformUrl(config);
}
function transformUrl(config) {
    let { url, params } = config;
    return buildURL(url, params);
}

export { axios as default };
