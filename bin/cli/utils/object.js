"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ensurePathArrayExistence(object, pathArray, defaultValue) {
    var current = pathArray.shift();
    if (pathArray.length) {
        object[current] = object[current] || {};
        return ensurePathArrayExistence(object[current], pathArray, defaultValue);
    }
    object[current] = object[current] || defaultValue;
}
function ensurePathExistence(object, path, defaultValue) {
    ensurePathArrayExistence(object, path.split('.'), defaultValue);
}
exports.ensurePathExistence = ensurePathExistence;
