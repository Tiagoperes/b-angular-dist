"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("fs");
var path_1 = require("path");
var config_1 = require("../view-engine/config");
var userInput_1 = require("../../utils/userInput");
var DEFAULT_COMPONENTS_MODULE_PATH = 'src/app/beagle-components.module.ts';
var DEFAULT_COMPONENTS_MODULE_NAME = 'BeagleComponentsModule';
function askAboutDependencyManager() {
    function validation(answer) {
        if (answer === 'npm' || answer === 'yarn')
            return null;
        return 'Invalid input. Please choose between yarn and npm.';
    }
    return userInput_1.getUserInput({
        question: 'Would you like to use yarn or npm?',
        validation: validation,
    });
}
function askAboutBeagleModule() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var beagleModulePath, outputFilename;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userInput_1.getUserInput({
                        question: 'Path to the beagle module (press enter to use default):',
                        defaultValue: config_1.defaultViewEngineConfig.beagleModulePath,
                    })];
                case 1:
                    beagleModulePath = _a.sent();
                    outputFilename = "." + path_1.basename(beagleModulePath).replace(/\.ts$/, '.generated.ts');
                    return [2 /*return*/, {
                            beagleModulePath: beagleModulePath,
                            outputPath: path_1.dirname(beagleModulePath) + "/" + outputFilename,
                            isBeagleModuleCreated: fs_1.existsSync(process.cwd() + "/" + beagleModulePath),
                        }];
            }
        });
    });
}
function askAboutComponentsModule() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var componentsModulePath, componentsModuleName;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userInput_1.getUserInput({
                        question: 'Path to the module with the components to use with beagle (press enter to use default):',
                        defaultValue: DEFAULT_COMPONENTS_MODULE_PATH,
                    })];
                case 1:
                    componentsModulePath = _a.sent();
                    componentsModuleName = DEFAULT_COMPONENTS_MODULE_NAME;
                    if (!(componentsModulePath !== DEFAULT_COMPONENTS_MODULE_PATH)) return [3 /*break*/, 3];
                    return [4 /*yield*/, userInput_1.getUserInput({
                            question: 'Name of the module with the components to use with beagle (press enter to use default):',
                            defaultValue: DEFAULT_COMPONENTS_MODULE_NAME,
                        })];
                case 2:
                    componentsModuleName = _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, { componentsModulePath: componentsModulePath, componentsModuleName: componentsModuleName }];
            }
        });
    });
}
function askAboutBackendUrl() {
    return userInput_1.getUserInput('What\'s the base url of the backend providing your beagle JSONs? (press enter to use default):');
}
function askUserForApplicationData() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var isNpm, _a, beagleModulePath, outputPath, isBeagleModuleCreated, _b, componentsModulePath, componentsModuleName, baseUrl;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, askAboutDependencyManager()];
                case 1:
                    isNpm = (_c.sent()) === 'npm';
                    return [4 /*yield*/, askAboutBeagleModule()];
                case 2:
                    _a = _c.sent(), beagleModulePath = _a.beagleModulePath, outputPath = _a.outputPath, isBeagleModuleCreated = _a.isBeagleModuleCreated;
                    if (isBeagleModuleCreated)
                        return [2 /*return*/, { beagleModulePath: beagleModulePath, outputPath: outputPath, isNpm: isNpm, isBeagleModuleCreated: isBeagleModuleCreated }];
                    return [4 /*yield*/, askAboutComponentsModule()];
                case 3:
                    _b = _c.sent(), componentsModulePath = _b.componentsModulePath, componentsModuleName = _b.componentsModuleName;
                    return [4 /*yield*/, askAboutBackendUrl()];
                case 4:
                    baseUrl = _c.sent();
                    console.log('');
                    return [2 /*return*/, {
                            beagleModulePath: beagleModulePath,
                            outputPath: outputPath,
                            componentsModulePath: componentsModulePath,
                            componentsModuleName: componentsModuleName,
                            baseUrl: baseUrl,
                            isNpm: isNpm,
                            isBeagleModuleCreated: isBeagleModuleCreated,
                        }];
            }
        });
    });
}
exports.default = askUserForApplicationData;
