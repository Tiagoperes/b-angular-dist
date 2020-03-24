"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var fs_1 = require("fs");
function getDirPathPrefix(dir) {
    if (!dir)
        return '.';
    if (dir.startsWith('.'))
        return '';
    return './';
}
function getImportFilePath(from, to) {
    var fromDir = path_1.dirname(from);
    var toDir = path_1.dirname(to);
    var toFile = path_1.basename(to, '.ts');
    var relativeDir = path_1.relative(fromDir, toDir);
    var prefix = getDirPathPrefix(relativeDir);
    return "" + prefix + relativeDir + "/" + toFile;
}
exports.getImportFilePath = getImportFilePath;
function ensureDirectoryExistence(filePath) {
    var directory = path_1.dirname(filePath);
    if (fs_1.existsSync(directory))
        return true;
    ensureDirectoryExistence(directory);
    fs_1.mkdirSync(directory);
}
exports.ensureDirectoryExistence = ensureDirectoryExistence;
