"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var init_1 = tslib_1.__importDefault(require("./init"));
var view_engine_1 = tslib_1.__importDefault(require("./view-engine"));
var help_1 = tslib_1.__importDefault(require("./help"));
var cliOperations = {
    init: {
        description: 'Runs a wizard to automatically set up Beagle for you.',
        run: init_1.default,
    },
    'view-engine': {
        description: 'Generates all the code you need when using Angular\'s View Engine. This is not necessary when using Ivy.',
        options: [
            {
                name: '--npm',
                description: 'optional. Forces use of npm instead of yarn.',
            },
            {
                name: '--config',
                description: 'optional. Path (relative to the project\'s root) to the view engine configuration file.',
                example: '--config=path/to/config'
            },
            {
                name: '--input',
                description: 'optional. Path (relative to the project\'s root) to the file with the beagle module.',
                example: '--input=path/to/beagle_module'
            },
            {
                name: '--output',
                description: 'optional. Path (relative to the project\'s root) to write the generated file.',
                example: '--output=path/to/output'
            },
        ],
        run: view_engine_1.default,
    },
    help: {
        description: 'shows every command you can run with the beagle-cli',
        run: function () { return help_1.default(cliOperations); },
    }
};
exports.default = cliOperations;
