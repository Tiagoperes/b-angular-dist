"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function kebabToCamelCase(str) {
    return str.replace(/-\w/g, function (_a) {
        var _b = tslib_1.__read(_a, 2), _ = _b[0], letter = _b[1];
        return letter.toUpperCase();
    });
}
exports.kebabToCamelCase = kebabToCamelCase;
function removeExtraIndentation(code, numberOfExtraSpaces) {
    return code
        .replace(new RegExp("\\n\\s{" + numberOfExtraSpaces + "}", 'g'), '\n')
        .replace(/^\n/, '')
        .replace(/\s*$/, '');
}
exports.removeExtraIndentation = removeExtraIndentation;
