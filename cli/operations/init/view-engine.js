"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configuration_1 = require("./configuration");
var angular_1 = require("./angular");
var config_1 = require("../view-engine/config");
var git_1 = require("../../utils/git");
var packages_1 = require("../../utils/packages");
var styledLogger_1 = require("../../utils/styledLogger");
var dependencies = {
    'ts-node': 'latest',
    'amd-loader': 'latest',
};
var dependencyNames = Object.keys(dependencies);
function undoViewEngineConfiguration(isNpm) {
    var path = configuration_1.removeConfigurationFile();
    if (path)
        styledLogger_1.logInfo("Configuration file at \"" + path + "\" was successfully removed.");
    try {
        packages_1.removeDependencies(dependencyNames, true);
        styledLogger_1.logInfo("The following dependencies were successfully removed from your package.json: " + dependencyNames.join(', ') + ".");
    }
    catch (_a) {
        styledLogger_1.logWarning("Unable to remove the following dependencies from your package.json: " + dependencyNames.join(', ') + ".");
    }
}
exports.undoViewEngineConfiguration = undoViewEngineConfiguration;
function setupConfig(beagleModulePath, outputPath) {
    if (beagleModulePath === config_1.defaultViewEngineConfig.beagleModulePath)
        return;
    var path = configuration_1.createConfigurationFile({ beagleModulePath: beagleModulePath, outputPath: outputPath });
    styledLogger_1.logInfo("Configuration file created at \"" + path + "\"");
}
function setupDependencies(isNpm) {
    packages_1.addDependencies(dependencies, true);
    styledLogger_1.logInfo("The following dependencies were successfully added to your package.json: " + dependencyNames.join(', '));
    try {
        console.log('installing dependencies...');
        packages_1.install(isNpm);
    }
    catch (_a) {
        var cmd = isNpm ? 'npm install' : 'yarn';
        styledLogger_1.logWarning("Could not install the dependencies. Please, run \"" + cmd + "\" before running you project.");
    }
}
function setupGitIgnore(outputPath) {
    try {
        var hasFileChanged = git_1.addToGitIgnore(outputPath, 'Beagle');
        if (hasFileChanged)
            styledLogger_1.logInfo("\"" + outputPath + "\" was successfully added to your .gitignore.");
    }
    catch (_a) {
        styledLogger_1.logWarning("Could not add \"" + outputPath + "\" to your .gitignore. Do you have a .gitignore file?");
    }
}
function setupPackageScripts(isNpm) {
    var runCmd = isNpm ? 'npx' : 'yarn';
    var npm = isNpm ? ' --npm' : '';
    packages_1.createPackageScripts([
        {
            name: 'build',
            run: runCmd + " beagle view-engine" + npm + " && ng build --prod",
        },
        {
            name: 'serve',
            run: runCmd + " beagle view-engine" + npm + " && ng serve",
        },
    ]);
    styledLogger_1.logInfo('scripts "build" and "serve" were successfully created in your package.json.');
}
function setupAngularJson(beagleModulePath, outputPath) {
    var hasFileChanged = angular_1.createAngularJsonEntries(beagleModulePath, outputPath);
    if (hasFileChanged) {
        styledLogger_1.logInfo('Replace entry for beagle module was successfully created in the angular.json file.');
    }
}
function logViewEngineInfo(isNpm) {
    var runScript = isNpm ? 'npm run' : 'yarn';
    var runCli = isNpm ? 'npx' : 'yarn';
    console.log('\nBeagle detected you\'re using ViewEngine.');
    styledLogger_1.log('From now on, please never execute "ng build" or "ng serve" directly. For Beagle to work properly, you should always use ', { text: " " + runScript + " build ", background: 'yellow', color: 'gray' }, ' and ', { text: " " + runScript + " serve ", background: 'yellow', color: 'gray' }, ' instead.');
    styledLogger_1.logSuccess("If you upgrade Angular to use Ivy, don't forget to run \"" + runCli + " beagle init\" again.");
}
function handleViewEngine(_a) {
    var beagleModulePath = _a.beagleModulePath, outputPath = _a.outputPath, isNpm = _a.isNpm;
    setupConfig(beagleModulePath, outputPath);
    setupDependencies(isNpm);
    setupGitIgnore(outputPath);
    setupPackageScripts(isNpm);
    setupAngularJson(beagleModulePath, outputPath);
    logViewEngineInfo(isNpm);
}
exports.default = handleViewEngine;
