"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatting_1 = require("../../utils/formatting");
exports.originalBeagleModuleName = 'OriginalBeagleModule';
function createImportsString(_a) {
    var componentsModuleName = _a.componentsModuleName, componentsModulePath = _a.componentsModulePath, beagleModuleName = _a.beagleModuleName, beagleModuleCopyPath = _a.beagleModuleCopyPath;
    var componentModuleImport = "import { " + componentsModuleName + " } from '" + componentsModulePath + "'";
    var originalBeagleModuleImport = "import { " + beagleModuleName + " as " + exports.originalBeagleModuleName + " } from '" + beagleModuleCopyPath + "'";
    var importString = "\n    import {\n      Component,\n      NgModule,\n      ViewChild,\n      NgZone,\n      ChangeDetectorRef,\n      Injectable,\n    } from '@angular/core'\n    import {\n      AbstractBeagleRemoteView,\n      AbstractBeagleProvider,\n      BeagleContextModule,\n      getBeagleConfigMetadata,\n    } from 'beagle-angular'\n    import { CommonModule } from '@angular/common'\n    " + componentModuleImport + "\n    " + originalBeagleModuleImport + "\n  ";
    return formatting_1.removeExtraIndentation(importString, 4);
}
exports.createImportsString = createImportsString;
