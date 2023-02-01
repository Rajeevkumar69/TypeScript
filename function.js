"use strict";
exports.__esModule = true;
function addTwo(_a) {
    var num = _a.num;
    return num + 2;
}
addTwo({ num: 5 });
function getUpper(_a) {
    var val = _a.val;
    return val.toUpperCase();
}
getUpper({ val: "hey dude!" });
function signupUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password, isPaid = _a.isPaid;
    return (name.toString(), email.toLowerCase(), password.toString(), isPaid.valueOf());
}
signupUser({
    name: "Rajeev Kumar",
    email: "rk@gmail.com",
    password: "123456Abc",
    isPaid: true
});
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return "You loggedIn";
};
loginUser("Rajeev", "rk488296@gmail.com", true);
