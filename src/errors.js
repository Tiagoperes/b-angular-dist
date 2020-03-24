"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BeagleError = /** @class */ (function (_super) {
    tslib_1.__extends(BeagleError, _super);
    function BeagleError(message) {
        var _this = _super.call(this, "Beagle: " + message) || this;
        _this.name = 'BeagleError';
        return _this;
    }
    return BeagleError;
}(Error));
exports.BeagleError = BeagleError;
var BeagleMetadataError = /** @class */ (function (_super) {
    tslib_1.__extends(BeagleMetadataError, _super);
    function BeagleMetadataError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'BeagleMetadataError';
        return _this;
    }
    return BeagleMetadataError;
}(BeagleError));
exports.BeagleMetadataError = BeagleMetadataError;
