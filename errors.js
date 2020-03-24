"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BeagleError = /** @class */ (function (_super) {
    tslib_1.__extends(BeagleError, _super);
    function BeagleError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = _this.constructor.name;
        return _this;
    }
    return BeagleError;
}(Error));
exports.default = BeagleError;
