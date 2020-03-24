"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styledLogger_1 = require("../utils/styledLogger");
var OPERATION_COLOR = 'gray';
var OPERATION_BACKGROUND = 'cyan';
var OPERATION_FONT_STYLE = 'bold';
var TITLES_COLOR = 'cyan';
function logOperationName(name) {
    styledLogger_1.log({
        text: " " + name + " ",
        color: OPERATION_COLOR,
        background: OPERATION_BACKGROUND,
        style: OPERATION_FONT_STYLE,
    });
}
function logDescription(description) {
    styledLogger_1.log({ text: 'Description: ', color: TITLES_COLOR }, description);
}
function logTable(headers, rows) {
    function getColumnMaxLength(columnIndex) {
        var max = headers[columnIndex].length;
        rows.forEach(function (row) {
            if (row[columnIndex].length > max)
                max = row[columnIndex].length;
        });
        return max;
    }
    function fillWith(stringToFill, charToFillWith, desiredLength) {
        var newStr = stringToFill;
        while (newStr.length < desiredLength)
            newStr = "" + newStr + charToFillWith;
        return newStr;
    }
    function logRow(columns, columnLengths, spaceChar) {
        if (spaceChar === void 0) { spaceChar = ' '; }
        var columnsWithSpaces = columns.map(function (value, index) { return fillWith(value, spaceChar, columnLengths[index]); });
        console.log("| " + columnsWithSpaces.join(' | ') + " |");
    }
    var columnMaxLengths = headers.map(function (_, index) { return getColumnMaxLength(index); });
    logRow(headers, columnMaxLengths);
    logRow(headers.map(function () { return ''; }), columnMaxLengths, '-');
    rows.forEach(function (row) { return logRow(row, columnMaxLengths); });
}
function logOptions(options) {
    if (!options)
        return;
    styledLogger_1.log({ text: 'Options:', color: TITLES_COLOR });
    var headers = ['Name', 'Description', 'Example'];
    var rows = options.map(function (_a) {
        var name = _a.name, description = _a.description, example = _a.example;
        return [name, description, example || ''];
    });
    logTable(headers, rows);
}
function logOperationHelp(name, data) {
    logOperationName(name);
    logDescription(data.description);
    logOptions(data.options);
    console.log('\n');
}
function runHelp(cliOperations) {
    var operationNames = Object.keys(cliOperations);
    operationNames.forEach(function (name) { return logOperationHelp(name, cliOperations[name]); });
}
exports.default = runHelp;
