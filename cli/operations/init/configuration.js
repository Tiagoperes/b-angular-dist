"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var filesystem_1 = require("../../utils/filesystem");
exports.DEFAULT_CONFIG_PATH = 'beagle.config.json';
function createConfigurationFile(config) {
    var root = process.cwd();
    var fullPath = root + "/" + exports.DEFAULT_CONFIG_PATH;
    var json = JSON.stringify(config, null, 2);
    filesystem_1.ensureDirectoryExistence(fullPath);
    fs_1.writeFileSync(fullPath, json + "\n", { encoding: 'utf8' });
    return fullPath;
}
exports.createConfigurationFile = createConfigurationFile;
function removeConfigurationFile() {
    var root = process.cwd();
    var path = root + "/" + exports.DEFAULT_CONFIG_PATH;
    try {
        fs_1.unlinkSync(path);
        return path;
    }
    catch (_a) { }
}
exports.removeConfigurationFile = removeConfigurationFile;
