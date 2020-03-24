"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("fs");
var errors_1 = tslib_1.__importDefault(require("../errors"));
function getGitIgnore() {
    var root = process.cwd();
    try {
        return fs_1.readFileSync(root + "/.gitignore", { encoding: 'utf8' });
    }
    catch (_a) {
        throw new errors_1.default('Could not find your .gitignore file!');
    }
}
function getGitIgnoreSection(gitignore, section) {
    var sectionRegex = new RegExp("^# " + section + "$(\\n^[\\/\\.\\w\\d_-]+$)*", 'gm');
    var match = gitignore.match(sectionRegex);
    return {
        content: match ? match[0] : '',
        replaceInGitIgnore: function (newContent) {
            if (match)
                return gitignore.replace(sectionRegex, newContent);
            var lineBreak = gitignore.endsWith('\n') ? '\n' : '\n\n';
            return "" + gitignore + lineBreak + "# " + section + newContent + "\n";
        }
    };
}
function addToGitIgnore(paths, section) {
    var root = process.cwd();
    var pathArray = paths instanceof Array ? paths : [paths];
    var gitignore = getGitIgnore();
    var gitSection = getGitIgnoreSection(gitignore, section);
    var hasChanged = false;
    var newContent = pathArray.reduce(function (str, path) {
        if (str.match(path))
            return str;
        hasChanged = true;
        return str + "\n" + path;
    }, gitSection.content);
    if (hasChanged)
        fs_1.writeFileSync(root + "/.gitignore", gitSection.replaceInGitIgnore(newContent));
    return hasChanged;
}
exports.addToGitIgnore = addToGitIgnore;
