"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var angular_1 = require("./angular");
var questions_1 = tslib_1.__importDefault(require("./questions"));
var boilerplate_1 = tslib_1.__importDefault(require("./boilerplate"));
var ivy_1 = tslib_1.__importDefault(require("./ivy"));
var view_engine_1 = tslib_1.__importDefault(require("./view-engine"));
function runInit() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var angularEngine, userInputData, applicationData;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    angular_1.validateAngularVersion();
                    angularEngine = angular_1.getAngularEngine();
                    return [4 /*yield*/, questions_1.default()];
                case 1:
                    userInputData = _a.sent();
                    applicationData = tslib_1.__assign(tslib_1.__assign({}, userInputData), { angularEngine: angularEngine });
                    if (!applicationData.isBeagleModuleCreated) {
                        boilerplate_1.default(applicationData);
                    }
                    if (angularEngine === 'Ivy')
                        ivy_1.default(applicationData.isNpm);
                    else
                        view_engine_1.default(applicationData);
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = runInit;
