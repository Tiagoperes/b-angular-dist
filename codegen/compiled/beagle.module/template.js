"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatting_1 = require("../../utils/formatting");
var metadata_1 = require("../../utils/metadata");
var template_builder_1 = require("../../utils/template-builder");
function createTemplateString(components) {
    var beagleTypes = Object.keys(components);
    var infos = beagleTypes.map(function (beagleType) { return ({
        beagleType: beagleType,
        selector: metadata_1.getComponentAnnotations(components[beagleType]).selector,
        inputs: metadata_1.getComponentInputs(components[beagleType]),
    }); });
    var _a = template_builder_1.createRemoteViewTemplate(infos), componentTemplates = _a.componentTemplates, containerTemplate = _a.containerTemplate;
    var ngTemplates = formatting_1.removeExtraIndentation(componentTemplates.join(''), 2);
    var ngContainer = formatting_1.removeExtraIndentation(containerTemplate, 2);
    return "const template = `\n" + ngTemplates + "\n" + ngContainer + "\n`";
}
exports.createTemplateString = createTemplateString;
