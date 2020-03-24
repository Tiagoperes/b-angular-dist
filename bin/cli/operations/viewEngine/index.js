"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var child_process_1 = require("child_process");
var config_1 = require("./config");
var errors_1 = require("../../errors");
function runViewEngine(options) {
    var pathToCli = path_1.dirname(require.main.filename);
    var pathToTsConfig = pathToCli + "/operations/viewEngine/tsconfig.beagle.json";
    var pathToIndex = pathToCli + "/operations/viewEngine/tsNodeProcess.js";
    var isNpm = options.some(function (_a) {
        var name = _a.name;
        return name === 'npm';
    });
    var runCli = isNpm ? 'npx' : 'yarn';
    var runInstall = isNpm ? 'npm install' : 'yarn add';
    var envString = options.reduce(function (result, _a) {
        var name = _a.name, value = _a.value;
        return (config_1.envVariables[name] ? "" + result + config_1.envVariables[name] + "=" + value + " " : result);
    }, '');
    var cmd = "" + envString + runCli + " ts-node -P " + pathToTsConfig + " " + pathToIndex;
    try {
        require('ts-node');
        require('amd-loader');
    }
    catch (_a) {
        throw new errors_1.BeagleCliError("Error! Please run \"" + runInstall + " -D ts-node amd-loader\" before running \"" + runCli + " beagle view-engine\".");
    }
    try {
        var result = child_process_1.execSync(cmd, { encoding: 'utf8' });
        console.log(result);
    }
    catch (error) {
        if (error.status !== errors_1.BEAGLE_EXIT_CODE)
            throw error;
        console.log(error.stdout);
        throw new errors_1.BeagleCliError();
    }
}
exports.default = runViewEngine;
