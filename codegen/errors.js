"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var errors_1 = tslib_1.__importDefault(require("../errors"));
var BeagleCodeGenerationError = /** @class */ (function (_super) {
    tslib_1.__extends(BeagleCodeGenerationError, _super);
    function BeagleCodeGenerationError(message) {
        return _super.call(this, "Beagle code generation error: " + message) || this;
    }
    return BeagleCodeGenerationError;
}(errors_1.default));
exports.default = BeagleCodeGenerationError;
