"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var terminalFgColors = {
    blue: [34, 89],
    yellow: [33, 89],
    red: [31, 89],
    cyan: [36, 89],
    green: [32, 89],
    magenta: [35, 89],
    white: [37, 89],
    gray: [30, 89],
    brightRed: [91, 39],
    brightGreen: [92, 39],
    brightYellow: [93, 39],
    brightBlue: [94, 39],
    brightMagenta: [95, 39],
    brightCyan: [96, 39],
    brightWhite: [97, 39],
};
var terminalBgColors = {
    black: [40, 49],
    red: [41, 49],
    green: [42, 49],
    yellow: [43, 49],
    blue: [44, 49],
    magenta: [45, 49],
    cyan: [46, 49],
    white: [47, 49],
    brightBlack: [100, 49],
    brightRed: [101, 49],
    brightGreen: [102, 49],
    brightYellow: [103, 49],
    brightBlue: [104, 49],
    brightMagenta: [105, 49],
    brightCyan: [106, 49],
    brightWhite: [107, 49],
};
var terminalFontStyles = {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
};
function log() {
    var toLog = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toLog[_i] = arguments[_i];
    }
    var logs = toLog.map(function (item) { return typeof item === 'string' ? { text: item } : item; });
    var styleString = logs.map(function (_a) {
        var color = _a.color, background = _a.background, style = _a.style;
        if (!color && !background && !style)
            return '%s';
        var styleArray = style instanceof Array ? style : [style];
        var codesForStyling = [];
        if (color)
            codesForStyling.push(terminalFgColors[color]);
        if (background) {
            // windows doesn't mix background colors with foreground colors very well
            if (process.platform === 'win32')
                codesForStyling.push(terminalFontStyles.reset);
            codesForStyling.push(terminalBgColors[background]);
        }
        if (style)
            codesForStyling.push.apply(codesForStyling, tslib_1.__spread(styleArray.map(function (st) { return terminalFontStyles[st]; })));
        var _b = codesForStyling.reduce(function (_a, codes) {
            var prefix = _a.prefix, suffix = _a.suffix;
            return ({
                prefix: prefix + "\u001B[" + codes[0] + "m",
                suffix: "\u001B[" + codes[1] + "m" + suffix,
            });
        }, { prefix: '', suffix: '' }), prefix = _b.prefix, suffix = _b.suffix;
        return prefix + "%s" + suffix + "\u001B[0m";
    });
    console.log.apply(console, tslib_1.__spread([styleString.join('')], logs.map(function (_a) {
        var text = _a.text;
        return text;
    })));
}
exports.log = log;
function logError(text) {
    log({ text: ' Error! ', color: 'white', background: 'brightRed', style: 'bold' }, " " + text);
}
exports.logError = logError;
function logSuccess(text) {
    log({ text: ' Done! ', color: 'gray', background: 'green', style: 'bold' }, " " + text);
}
exports.logSuccess = logSuccess;
function logWarning(text) {
    log({ text: ' Warning ', color: 'gray', background: 'yellow', style: 'bold' }, " " + text);
}
exports.logWarning = logWarning;
function logInfo(text) {
    log({ text: ' Info ', color: 'gray', background: 'cyan', style: 'bold' }, " " + text);
}
exports.logInfo = logInfo;
