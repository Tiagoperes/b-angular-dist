"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatting_1 = require("../utils/formatting");
function createImportsString(componentsModuleName, componentsModulePath) {
    var componentModuleImport = "import { " + componentsModuleName + " } from '" + componentsModulePath + "'";
    var importString = "\n    import {\n      Component,\n      NgModule,\n      ViewChild,\n      NgZone,\n      ChangeDetectorRef,\n      Injectable,\n    } from '@angular/core'\n    import {\n      AbstractBeagleRemoteView,\n      AbstractBeagleProvider,\n      BeagleContextModule,\n    } from 'beagle-angular'\n    import { CommonModule } from '@angular/common'\n    " + componentModuleImport + "\n  ";
    return formatting_1.removeExtraIndentation(importString, 4);
}
exports.createImportsString = createImportsString;
