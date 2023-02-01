"use strict";
exports.__esModule = true;
function detectType(_a) {
    var val = _a.val;
    if (typeof val === "string") {
        val.toLowerCase();
    }
    return val;
}
// **********************
function provideId(_a) {
    var id = _a.id;
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
// ****************************
function printAll(_a) {
    var strs = _a.strs;
    if (strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
