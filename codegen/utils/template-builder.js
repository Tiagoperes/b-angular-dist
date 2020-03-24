"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("../../constants");
function kebabToCamelCase(str) {
    return str.replace(/-\w/g, function (_a) {
        var _b = tslib_1.__read(_a, 2), _ = _b[0], letter = _b[1];
        return letter.toUpperCase();
    });
}
function createTemplateForComponent(selector, inputs) {
    var templateName = kebabToCamelCase(selector);
    var templateInputs = inputs.map(function (input) { return "let-" + input.propName + "=\"" + input.propName + "\""; }).join(' ');
    var componentInputs = inputs.map(function (input) { return "[" + input.templateName + "]=\"" + input.propName + "\""; }).join(' ');
    var contextDirective = constants_1.contextSelector + " [_elementId]=\"id\" [_viewId]=\"viewId\"";
    return "\n    <ng-template #" + templateName + " " + templateInputs + " let-children=\"children\" let-id=\"id\">\n      <" + selector + " " + componentInputs + " " + contextDirective + ">\n        <ng-container *ngFor=\"let child of children; trackBy: elementIdentity\">\n          <ng-container *ngTemplateOutlet=\"getTemplate(child._beagleType_);context:child\"></ng-container>\n        </ng-container>\n      </" + selector + ">\n    </ng-template>\n  ";
}
function createRemoteViewTemplate(components) {
    var componentTemplates = components.map(function (_a) {
        var selector = _a.selector, inputs = _a.inputs;
        return (createTemplateForComponent(selector, inputs));
    });
    var containerTemplate = "\n    <ng-container #__view_container>\n      <ng-container *ngIf=\"!!tree\">\n        <ng-container *ngTemplateOutlet=\"getTemplate(tree._beagleType_);context:tree\">\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  ";
    var fullTemplate = "" + componentTemplates.join('') + containerTemplate;
    var ngTemplateIds = components.reduce(function (result, component) {
        var _a;
        return (tslib_1.__assign(tslib_1.__assign({}, result), (_a = {}, _a[component.beagleType] = kebabToCamelCase(component.selector), _a)));
    }, {});
    return { fullTemplate: fullTemplate, ngTemplateIds: ngTemplateIds, componentTemplates: componentTemplates, containerTemplate: containerTemplate };
}
exports.createRemoteViewTemplate = createRemoteViewTemplate;
