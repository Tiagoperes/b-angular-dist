"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("fs");
var styledLogger_1 = require("../../utils/styledLogger");
var filesystem_1 = require("../../utils/filesystem");
var beagle_module_1 = tslib_1.__importDefault(require("../../../codegen/boilerplate/beagle.module"));
var beagle_components_module_1 = tslib_1.__importDefault(require("../../../codegen/boilerplate/beagle-components.module"));
function createBeagleFile(params) {
    var root = process.cwd();
    var fullPath = root + "/" + params.beagleModulePath;
    var importPath = filesystem_1.getImportFilePath(params.beagleModulePath, params.componentsModulePath);
    var boilerplate = beagle_module_1.default(importPath, params.componentsModuleName, params.baseUrl);
    filesystem_1.ensureDirectoryExistence(fullPath);
    fs_1.writeFileSync(fullPath, boilerplate, { encoding: 'utf8' });
}
function createComponentsFile(pathRelativeToRoot, angularEngine, componentsModuleName) {
    var root = process.cwd();
    var fullPath = root + "/" + pathRelativeToRoot;
    var boilerplate = beagle_components_module_1.default(angularEngine === 'Ivy', componentsModuleName);
    filesystem_1.ensureDirectoryExistence(fullPath);
    fs_1.writeFileSync(fullPath, boilerplate, { encoding: 'utf8' });
}
function createBoilerplate(_a) {
    var angularEngine = _a.angularEngine, beagleModulePath = _a.beagleModulePath, baseUrl = _a.baseUrl, componentsModuleName = _a.componentsModuleName, componentsModulePath = _a.componentsModulePath;
    var root = process.cwd();
    var componentsFullPath = root + "/" + componentsModulePath;
    if (!fs_1.existsSync(componentsFullPath)) {
        createComponentsFile(componentsModulePath, angularEngine, componentsModuleName);
        styledLogger_1.logInfo("Components module successfully created at \"" + componentsFullPath + "\"");
    }
    createBeagleFile({
        beagleModulePath: beagleModulePath,
        componentsModulePath: componentsModulePath,
        componentsModuleName: componentsModuleName,
        baseUrl: baseUrl,
    });
    styledLogger_1.logInfo("Beagle module successfully created at \"" + root + "/" + beagleModulePath + "\"");
}
exports.default = createBoilerplate;
