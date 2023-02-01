"use strict";
//  Union is a most important part of TypeScript , it might be number ,string (not sure)
//  Instead of writing any there are highly recommended to write union in typescript
//  Union is like a 2,3 or more types of data are combination with together
exports.__esModule = true;
var score = 33;
score = "fiftyFive";
score = true;
var rajeev = {
    name: "rajeev",
    id: 334
};
rajeev = { username: "chamcham", id: 365 };
function getDbId(id) {
    // Making some API call
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("three");
