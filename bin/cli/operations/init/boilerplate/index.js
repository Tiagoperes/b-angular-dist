"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("fs");
var componentsModule_1 = tslib_1.__importDefault(require("./componentsModule"));
var beagleModule_1 = tslib_1.__importDefault(require("./beagleModule"));
var styledLogger_1 = require("../../../utils/styledLogger");
function createBoilerplate(_a) {
    var angularEngine = _a.angularEngine, beagleModulePath = _a.beagleModulePath, baseUrl = _a.baseUrl, componentsModuleName = _a.componentsModuleName, componentsModulePath = _a.componentsModulePath;
    var root = process.cwd();
    var componentsFullPath = root + "/" + componentsModulePath;
    if (!fs_1.existsSync(componentsFullPath)) {
        componentsModule_1.default(componentsModulePath, angularEngine, componentsModuleName);
        styledLogger_1.logInfo("Components module successfully created at \"" + componentsFullPath + "\"");
    }
    beagleModule_1.default({
        beagleModulePath: beagleModulePath,
        componentsModulePath: componentsModulePath,
        componentsModuleName: componentsModuleName,
        baseUrl: baseUrl,
    });
    styledLogger_1.logInfo("Beagle module successfully created at \"" + root + "/" + beagleModulePath + "\"");
}
exports.default = createBoilerplate;
