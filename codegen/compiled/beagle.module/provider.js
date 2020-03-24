"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatting_1 = require("../../utils/formatting");
function createProviderString() {
    var providerString = "\n    @Injectable()\n    export class BeagleProvider extends AbstractBeagleProvider {}\n  ";
    return formatting_1.removeExtraIndentation(providerString, 4);
}
exports.createProviderString = createProviderString;
