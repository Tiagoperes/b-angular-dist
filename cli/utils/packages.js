"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("fs");
var child_process_1 = require("child_process");
var errors_1 = tslib_1.__importDefault(require("../errors"));
function getPackageJson() {
    var root = process.cwd();
    try {
        return require(root + "/package.json");
    }
    catch (_a) {
        throw new errors_1.default('Could not find your package.json file!');
    }
}
exports.getPackageJson = getPackageJson;
function getDependency(packageName) {
    var _a = getPackageJson(), devDependencies = _a.devDependencies, peerDependencies = _a.peerDependencies, dependencies = _a.dependencies;
    var allDependencies = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, devDependencies), peerDependencies), dependencies);
    return allDependencies[packageName];
}
function getPackageVersion(packageName) {
    var dependency = getDependency(packageName);
    if (!dependency)
        throw new errors_1.default("Couldn't find version for " + packageName);
    var cleanVersion = dependency.replace(/[^\.\d]/g, '');
    var _a = tslib_1.__read(cleanVersion.split('.')), integer = _a[0], decimals = _a.slice(1);
    var numberStr = integer + "." + decimals.join('');
    return parseFloat(numberStr);
}
exports.getPackageVersion = getPackageVersion;
function createPackageScripts(scripts) {
    var root = process.cwd();
    var packageJson = getPackageJson();
    packageJson.scripts = packageJson.scripts || {};
    scripts.forEach(function (_a) {
        var name = _a.name, run = _a.run;
        return packageJson.scripts[name] = run;
    });
    fs_1.writeFileSync(root + "/package.json", JSON.stringify(packageJson, null, 2));
}
exports.createPackageScripts = createPackageScripts;
function addDependencies(dependencies, isDev) {
    var root = process.cwd();
    var packageJson = getPackageJson();
    var deps = isDev ? 'devDependencies' : 'dependencies';
    packageJson[deps] = tslib_1.__assign(tslib_1.__assign({}, packageJson[deps]), dependencies);
    fs_1.writeFileSync(root + "/package.json", JSON.stringify(packageJson, null, 2));
}
exports.addDependencies = addDependencies;
function removeDependencies(dependencyNames, isDev) {
    var root = process.cwd();
    var packageJson = getPackageJson();
    var dependencies = isDev ? packageJson.devDependencies : packageJson.dependencies;
    dependencyNames.forEach(function (depName) { return delete dependencies[depName]; });
    fs_1.writeFileSync(root + "/package.json", JSON.stringify(packageJson, null, 2));
}
exports.removeDependencies = removeDependencies;
function install(isNpm) {
    child_process_1.execSync(isNpm ? 'npm install' : 'yarn');
}
exports.install = install;
