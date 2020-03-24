"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatting_1 = require("../../utils/formatting");
function createModuleString(_a) {
    var baseUrl = _a.baseUrl, componentsModuleName = _a.componentsModuleName, beagleModuleName = _a.beagleModuleName;
    var moduleString = "\n    @NgModule({\n      declarations: [BeagleRemoteView],\n      exports: [BeagleRemoteView],\n      imports: [CommonModule, BeagleContextModule, " + componentsModuleName + "],\n      providers: [BeagleProvider],\n    })\n    export class " + beagleModuleName + " {\n      constructor(provider: BeagleProvider) {\n        provider.start('" + baseUrl + "')\n      }\n    }\n  ";
    return formatting_1.removeExtraIndentation(moduleString, 4);
}
exports.createModuleString = createModuleString;
