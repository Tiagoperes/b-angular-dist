"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatting_1 = require("../utils/formatting");
function createBoilerplate(componentsModuleImportPath, componentsModuleName, baseUrl) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var code = "\n    import { BeagleModule } from 'beagle-angular'\n    // import all the components you wish to use with Beagle. See the examples below:\n    // import { LoadingComponent } from './components/loading/loading.component'\n    // import { ErrorComponent } from './components/error/error.component'\n    \n    @BeagleModule({\n      baseUrl: '" + baseUrl + "',\n      module: {\n        path: '" + componentsModuleImportPath + "',\n        name: '" + componentsModuleName + "',\n      },\n      components: {\n        // Associate every beagle component to your angular component. See the examples below:\n        loading: class Loading {}, // todo: replace by actual component class\n        error: class Error {}, // todo: replace by actual component class\n      },\n    })\n    export class Beagle {}\n  ";
    return formatting_1.removeExtraIndentation(code, 4) + "\n";
}
exports.default = createBoilerplate;
