"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
function getUserInput(data) {
    var dataObject = typeof data === 'object' ? data : { question: data };
    var question = dataObject.question, _a = dataObject.defaultValue, defaultValue = _a === void 0 ? '' : _a, validation = dataObject.validation;
    var readline = readline_1.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(function (resolve) {
        function handleAnswer(answer) {
            var error = validation && validation(answer);
            if (error) {
                console.log(error);
                readline.question(question + " ", handleAnswer);
                return;
            }
            resolve(answer || defaultValue);
            readline.close();
        }
        readline.question(question + " ", handleAnswer);
    });
}
exports.getUserInput = getUserInput;
