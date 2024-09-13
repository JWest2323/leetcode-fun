/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [], subDirs = path.split('/');

    for (let idx = 0; idx < subDirs.length; idx++) {
        let subDir = subDirs[idx];
        console.log(subDir)
        if (!subDir || subDir == '.') continue;
        if (subDir == '..') stack.pop();
        else  stack.push(subDir);
    }
    return '/' + stack.join('/');
};