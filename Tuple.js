"use strict";
//  it's just an array
exports.__esModule = true;
var User = ["rc", 1];
var tUser;
tUser = ["chmmoo", 121, true];
// tUser = [12,"chamcham",true];   -> can't do this
var rgb = [2.32, 52, 2012.2];
// const newUser:tUser
//  TypeScript array push method can't catch a tuple of the array
//  Tuple are type of array of known length and where the different elements may have different type.
console.log(User, tUser, rgb);
