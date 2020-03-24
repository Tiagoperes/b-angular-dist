"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.envVariables = {
    config: 'VIEW_ENGINE_CONFIG',
    input: 'BEAGLE_MODULE_PATH',
    output: 'OUTPUT_PATH',
};
function getEnv(name) {
    return process.env[exports.envVariables[name]];
}
exports.defaultViewEngineConfig = {
    beagleModulePath: 'src/app/beagle.module.ts',
    outputPath: 'src/app/.beagle.module.generated.ts',
};
var ViewEngineConfigPath = getEnv('config') || 'beagle.config.json';
function fixConfigurationPath(root, path) {
    return path && root + "/" + path.replace(/^\.\//, '');
}
function fixConfigurationPaths(config) {
    var root = process.cwd();
    return tslib_1.__assign(tslib_1.__assign({}, config), { beagleModulePath: fixConfigurationPath(root, config.beagleModulePath), outputPath: fixConfigurationPath(root, config.outputPath) });
}
function getConfigFromFile() {
    var root = process.cwd();
    try {
        return require(root + "/" + ViewEngineConfigPath);
    }
    catch (_a) {
        return {};
    }
}
function getConfigFromEnvVariables() {
    var envConfig = {};
    if (getEnv('input'))
        envConfig.beagleModulePath = getEnv('input');
    if (getEnv('output'))
        envConfig.outputPath = getEnv('output');
    return envConfig;
}
function getViewEngineConfig() {
    return fixConfigurationPaths(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, exports.defaultViewEngineConfig), getConfigFromFile()), getConfigFromEnvVariables()));
}
exports.getViewEngineConfig = getViewEngineConfig;
