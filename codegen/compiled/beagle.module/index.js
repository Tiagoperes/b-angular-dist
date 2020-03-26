"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commentary_1 = require("./commentary");
var imports_1 = require("./imports");
var template_1 = require("./template");
var provider_1 = require("./provider");
var component_1 = require("./component");
var module_1 = require("./module");
function generateViewEngineCode(_a) {
    var config = _a.config, beagleModuleCopyPath = _a.beagleModuleCopyPath, beagleModuleName = _a.beagleModuleName, angularVersion = _a.angularVersion;
    var commentary = commentary_1.createCommentaryString();
    var importString = imports_1.createImportsString({
        componentsModuleName: config.module.name,
        componentsModulePath: config.module.path,
        beagleModuleName: beagleModuleName,
        beagleModuleCopyPath: beagleModuleCopyPath,
    });
    var templateString = template_1.createTemplateString(Object.values(config.components));
    var componentString = component_1.createComponentString(config.components, angularVersion);
    var providerString = provider_1.createProviderString();
    var moduleString = module_1.createModuleString({
        componentsModuleName: config.module.name,
        beagleModuleName: beagleModuleName,
    });
    return commentary + "\n\n" + importString + "\n\n" + templateString + "\n\n" + providerString + "\n\n" + componentString + "\n\n" + moduleString + "\n";
}
exports.generateViewEngineCode = generateViewEngineCode;
