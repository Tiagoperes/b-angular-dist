"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var filesystem_1 = require("../../../utils/filesystem");
var formatting_1 = require("../../../../../src/ViewEngine/utils/formatting");
function createBoilerplate(_a) {
    var beagleModulePath = _a.beagleModulePath, componentsModulePath = _a.componentsModulePath, componentsModuleName = _a.componentsModuleName, _b = _a.baseUrl, baseUrl = _b === void 0 ? '' : _b;
    var importPath = filesystem_1.getImportFilePath(beagleModulePath, componentsModulePath);
    var code = "\n    import { BeagleModule } from 'beagle-angular'\n    // import all the components you wish to use with Beagle. See the examples below:\n    // import { LoadingComponent } from './components/loading/loading.component'\n    // import { ErrorComponent } from './components/error/error.component'\n    \n    @BeagleModule({\n      baseUrl: '" + baseUrl + "',\n      module: {\n        path: '" + importPath + "',\n        name: '" + componentsModuleName + "',\n      },\n      components: {\n        // Associate every beagle component to your angular component. See the examples below:\n        loading: class Loading {}, // todo: replace by actual component class\n        error: class Error {}, // todo: replace by actual component class\n      },\n    })\n    export class Beagle {}\n  ";
    return formatting_1.removeExtraIndentation(code, 4) + "\n";
}
function createBeagleFile(params) {
    var root = process.cwd();
    var fullPath = root + "/" + params.beagleModulePath;
    var boilerplate = createBoilerplate(params);
    filesystem_1.ensureDirectoryExistence(fullPath);
    fs_1.writeFileSync(fullPath, boilerplate, { encoding: 'utf8' });
}
exports.default = createBeagleFile;
