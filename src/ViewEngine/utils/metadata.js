"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var core_1 = require("@angular/core");
var errors_1 = require("../../errors");
function getComponentAnnotations(component) {
    var reflection = new core_1.ɵReflectionCapabilities();
    var annotations = reflection.annotations(component);
    if (!annotations || !annotations.length) {
        throw new errors_1.BeagleMetadataError("Couldn't find annotations for component \"" + (component.name || component) + "\"");
    }
    return annotations[0];
}
exports.getComponentAnnotations = getComponentAnnotations;
function getComponentInputs(component) {
    var reflection = new core_1.ɵReflectionCapabilities();
    var props = reflection.propMetadata(component);
    var propNames = Object.keys(props);
    return propNames.reduce(function (result, name) {
        var prop = props[name][0];
        var decoratorPrototype = Reflect.getPrototypeOf(prop);
        if (decoratorPrototype.ngMetadataName !== 'Input')
            return result;
        return tslib_1.__spread(result, [
            {
                propName: name,
                templateName: prop.bindingPropertyName ? prop.bindingPropertyName : name,
            }
        ]);
    }, []);
}
exports.getComponentInputs = getComponentInputs;
