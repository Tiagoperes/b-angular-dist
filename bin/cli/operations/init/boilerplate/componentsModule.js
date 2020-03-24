"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var filesystem_1 = require("../../../utils/filesystem");
var formatting_1 = require("../../../../../src/ViewEngine/utils/formatting");
function createBoilerplate(angularEngine, moduleName) {
    var code = "\n    import { NgModule } from '@angular/core'\n    // import all the components you're going to use with beagle\n    \n    const components = [\n      // your components\n    ]\n    \n    @NgModule({\n      declarations: components,\n      " + (angularEngine === 'Ivy' ? '' : 'entryComponents: components,') + "\n      exports: components,\n      imports: [\n        // everything your components depend on\n      ],\n    })\n    export class " + moduleName + " {}\n  ";
    return formatting_1.removeExtraIndentation(code, 4) + "\n";
}
function createComponentsFile(pathRelativeToRoot, angularEngine, componentsModuleName) {
    var root = process.cwd();
    var fullPath = root + "/" + pathRelativeToRoot;
    var boilerplate = createBoilerplate(angularEngine, componentsModuleName);
    filesystem_1.ensureDirectoryExistence(fullPath);
    fs_1.writeFileSync(fullPath, boilerplate, { encoding: 'utf8' });
}
exports.default = createComponentsFile;
