"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatting_1 = require("../utils/formatting");
function createBoilerplate(isIvy, moduleName) {
    var code = "\n    import { NgModule } from '@angular/core'\n    // import all the components you're going to use with beagle\n    \n    const components = [\n      // your components\n    ]\n    \n    @NgModule({\n      declarations: components,\n      " + (isIvy ? '' : 'entryComponents: components,') + "\n      exports: components,\n      imports: [\n        // everything your components depend on\n      ],\n    })\n    export class " + moduleName + " {}\n  ";
    return formatting_1.removeExtraIndentation(code, 4) + "\n";
}
exports.default = createBoilerplate;
