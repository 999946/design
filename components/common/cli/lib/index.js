#!/usr/bin/env node

"use strict";

var fs = require("fs");
var child_process_1 = require("child_process");
var commander = require("commander");
var getFilesBySuffix = function getFilesBySuffix(suffix, modulePath) {
    var files = child_process_1.execSync("find " + modulePath + " -name \"*." + suffix + "\"").toString().split('\n');
    files = files.filter(function (item) {
        return item !== '';
    });
    return files;
};
var repairImportPath = function repairImportPath(filePath) {
    var source = fs.readFileSync(filePath).toString();
    var regex = /import\s+[a-zA-Z{},\s\*_\$]*(from)?\s?\'([^']+)\'/g;
    var relativeLayer = filePath.split('/').length - process.cwd().split('/').length;
    var match = void 0;
    while ((match = regex.exec(source)) != null) {
        var importPath = match[2];
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
            var importPathSplit = importPath.split('/');
            if (importPathSplit.length < relativeLayer + 1) {
                continue;
            }
            var relativeLayerCopy = relativeLayer;
            while (relativeLayerCopy > 0) {
                importPathSplit.shift();
                relativeLayerCopy--;
            }
            if (importPathSplit[0] === '..') {
                console.log('引用组件', importPathSplit[1], importPathSplit[2]);
            }
        } else {
            console.log('引了 npm 包，不做处理', importPath);
        }
    }
};
commander.version('1.0.0').option('-i, --init', '把项目初始化到能用的程度').parse(process.argv);
if (commander['init']) {
    var tsFilePaths = getFilesBySuffix('ts', process.cwd());
    var tsxFilePaths = getFilesBySuffix('tsx', process.cwd());
    tsFilePaths.concat(tsxFilePaths).forEach(function (tsOrTsxFilePath) {
        repairImportPath(tsOrTsxFilePath);
    });
}