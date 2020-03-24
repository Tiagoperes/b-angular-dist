"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var errors_1 = tslib_1.__importDefault(require("../errors"));
exports.BEAGLE_EXIT_CODE = 3;
var BeagleCliError = /** @class */ (function (_super) {
    tslib_1.__extends(BeagleCliError, _super);
    function BeagleCliError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.exitCode = exports.BEAGLE_EXIT_CODE;
        return _this;
    }
    return BeagleCliError;
}(errors_1.default));
exports.default = BeagleCliError;
var ErrorWithHelp = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorWithHelp, _super);
    function ErrorWithHelp(rawOptions, message) {
        var _this = this;
        var cmd = rawOptions.indexOf('--npm') === -1 ? 'yarn beagle help' : 'npx beagle help';
        _this = _super.call(this, message + ". Please run \"" + cmd + "\" for more information.") || this;
        return _this;
    }
    return ErrorWithHelp;
}(BeagleCliError));
var InvalidOperationError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidOperationError, _super);
    function InvalidOperationError(rawOptions, operation) {
        return _super.call(this, rawOptions, "Invalid operation \"" + operation + "\"") || this;
    }
    return InvalidOperationError;
}(ErrorWithHelp));
exports.InvalidOperationError = InvalidOperationError;
var InvalidOptionError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidOptionError, _super);
    function InvalidOptionError(rawOptions, operation, option) {
        return _super.call(this, rawOptions, "Invalid option \"" + option + "\" for \"" + operation + "\"") || this;
    }
    return InvalidOptionError;
}(ErrorWithHelp));
exports.InvalidOptionError = InvalidOptionError;
function isBeagleCliError(error) {
    return error.exitCode === exports.BEAGLE_EXIT_CODE;
}
exports.isBeagleCliError = isBeagleCliError;
