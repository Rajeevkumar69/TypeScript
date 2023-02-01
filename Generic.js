var score = [];
var names = [""];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour("80");
// identityFour<bootle>({});
// ************************************************
//   ************Generics in Array****************
// ************************************************
function getSearchProducts(products) {
    // do some dataBase operation
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProducts = function (val) {
    // do some dataBase operation
    var data = 4;
    return val[data];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
anotherFunction(3, {
    connection: "User",
    userName: "Rajeev",
    password: "0232235qw"
});
var sellable = /** @class */ (function () {
    function sellable() {
        this.cart = [];
    }
    sellable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return sellable;
}());
