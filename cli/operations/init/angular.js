"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("fs");
var errors_1 = tslib_1.__importDefault(require("../../errors"));
var object_1 = require("../../utils/object");
var packages_1 = require("../../utils/packages");
var SUPPORTED_ANGULAR_VERSIONS = { min: 6, max: Infinity };
function validateAngularVersion() {
    var version = packages_1.getPackageVersion('@angular/core');
    var min = SUPPORTED_ANGULAR_VERSIONS.min, max = SUPPORTED_ANGULAR_VERSIONS.max;
    if (version < min || version > max) {
        throw new errors_1.default("You're using Angular " + version + ". Beagle offers support only for versions " + min + " to " + max);
    }
}
exports.validateAngularVersion = validateAngularVersion;
function getAngularEngine() {
    // todo
    return 'ViewEngine';
}
exports.getAngularEngine = getAngularEngine;
function getAngularJson(path) {
    try {
        return require(path);
    }
    catch (_a) {
        throw new errors_1.default('Could not find your angular.json file!');
    }
}
function createReplaceEntry(angularJson, replace, replaceWith) {
    var projects = Object.values(angularJson.projects);
    var hasReplacedAny = false;
    projects.forEach(function (project) {
        object_1.ensurePathExistence(project, 'architect.build.options.fileReplacements', []);
        var replacements = project.architect.build.options.fileReplacements;
        var alreadyHasReplacement = replacements.some(function (replacement) { return replacement.replace === replace; });
        if (!alreadyHasReplacement) {
            replacements.push({ replace: replace, with: replaceWith });
            hasReplacedAny = true;
        }
    });
    return hasReplacedAny;
}
function createAngularJsonEntries(beagleModulePath, outputPath) {
    var root = process.cwd();
    var path = root + "/angular.json";
    var angularJson = getAngularJson(path);
    var hasChanged = createReplaceEntry(angularJson, beagleModulePath, outputPath);
    if (hasChanged)
        fs_1.writeFileSync(path, JSON.stringify(angularJson, null, 2));
    return hasChanged;
}
exports.createAngularJsonEntries = createAngularJsonEntries;
