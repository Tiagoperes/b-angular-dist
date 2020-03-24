"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var viewEngine_1 = require("./viewEngine");
var styledLogger_1 = require("../../utils/styledLogger");
function handleIvy(isNpm) {
    var runCmd = isNpm ? 'npx' : 'yarn';
    viewEngine_1.undoViewEngineConfiguration(isNpm);
    styledLogger_1.logSuccess("Beagle has detected you're using Ivy. No Further configuration is required! If you change to ViewEngine, be sure to re-run \"" + runCmd + " beagle init\".");
}
exports.default = handleIvy;
