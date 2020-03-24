"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatting_1 = require("../../utils/formatting");
var metadata_1 = require("../../utils/metadata");
var constants_1 = require("../../../constants");
function createViewChildString(name, templateName, angularVersion) {
    if (angularVersion >= 8) {
        return "'" + name + "': new ViewChild('" + templateName + "', { static: true })";
    }
    else {
        return "'" + name + "': new ViewChild('" + templateName + "')";
    }
}
function createQueries(components, angularVersion) {
    var componentNames = Object.keys(components);
    return componentNames.map(function (name) {
        var selector = metadata_1.getComponentAnnotations(components[name]).selector;
        var templateName = formatting_1.kebabToCamelCase(selector);
        return createViewChildString(name, templateName, angularVersion);
    });
}
function createComponentString(components, angularVersion) {
    var queries = createQueries(components, angularVersion);
    var componentString = "\n    @Component({\n      selector: '" + constants_1.remoteViewSelector + "',\n      template,\n      inputs: ['loadParams'],\n      queries: {\n        " + queries.join(',\n        ') + ",\n      },\n    })\n    export class BeagleRemoteView extends AbstractBeagleRemoteView {\n      constructor(\n        beagleProvider: BeagleProvider,\n        ngZone: NgZone,\n        changeDetector: ChangeDetectorRef,\n      ) {\n        // @ts-ignore\n        super(beagleProvider, ngZone, changeDetector)\n      }\n    }\n  ";
    return formatting_1.removeExtraIndentation(componentString, 4);
}
exports.createComponentString = createComponentString;
