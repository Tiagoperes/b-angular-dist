#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operations_1 = tslib_1.__importDefault(require("./operations"));
var errors_1 = require("./errors");
var styledLogger_1 = require("./utils/styledLogger");
function isOptionValid(operation, optionName) {
    var validOptions = operations_1.default[operation].options;
    return validOptions && validOptions.some(function (_a) {
        var name = _a.name;
        return name === optionName;
    });
}
function processOptions(operation, rawOptions) {
    return rawOptions.map(function (rawOption) {
        var _a = tslib_1.__read(rawOption.split('='), 2), name = _a[0], value = _a[1];
        if (!isOptionValid(operation, name))
            throw new errors_1.InvalidOptionError(rawOptions, operation, name);
        return { name: name.replace(/^--/, ''), value: value };
    });
}
function start() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var operation, rawOptions, isOperationValid, options;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    operation = process.argv[2];
                    rawOptions = process.argv.slice(3);
                    isOperationValid = Object.keys(operations_1.default).indexOf(operation) > -1;
                    if (!isOperationValid)
                        throw new errors_1.InvalidOperationError(rawOptions, operation);
                    options = processOptions(operation, rawOptions);
                    return [4 /*yield*/, operations_1.default[operation].run(options)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
(function () {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, start()];
                case 1:
                    _a.sent();
                    process.exit(0);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    if (!errors_1.isBeagleCliError(error_1))
                        throw error_1;
                    if (error_1.message)
                        styledLogger_1.logError(error_1.message);
                    process.exit(error_1.exitCode);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}());
