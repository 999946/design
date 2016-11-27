#!/usr/bin/env node

"use strict";

var child_process_1 = require("child_process");
var commander = require("commander");
var getFilesBySuffix = function getFilesBySuffix(suffix, modulePath) {
    var files = child_process_1.execSync("find " + modulePath + " -name \"*." + suffix + "\"").toString().split('\n');
    files = files.filter(function (item) {
        return item !== '';
    });
    return files;
};
commander.version('1.0.0').option('-i, --init', '把项目初始化到能用的程度').parse(process.argv);
if (commander['init']) {
    var tsFilePaths = getFilesBySuffix('ts', process.cwd());
    var tsxFilePaths = getFilesBySuffix('tsx', process.cwd());
    var allTsFilePaths = tsFilePaths.concat(tsxFilePaths);
    allTsFilePaths.forEach(function (tsFilePath) {
        console.log(tsFilePath);
    });
}