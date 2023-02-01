const score: Array<number> = [];
const names: Array<string> = [""];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(true);

function identityFour<T>(val: T): T {
  return val;
}
identityFour("80");

interface bootle {
  brand: string;
  type: number;
}

// identityFour<bootle>({});

// ************************************************
//   ************Generics in Array****************
// ************************************************

function getSearchProducts<T>(products: T[]): T {
  // do some dataBase operation
  const myIndex: number = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(val: T[]): T => {
  // do some dataBase operation
  const data: number = 4;
  return val[data];
};

//      ********************************
// *********** Generics Class **************
//   ***  Using Type parameter's in generics  ***
//      ********************************

interface dataBase {
  connection: string;
  userName: string;
  password: string;
}

function anotherFunction<T, U extends dataBase>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, {
  connection: "User",
  userName: "Rajeev",
  password: "0232235qw",
});

interface Quiz {
  name: string;
  type: string;
}

interface course {
  name: string;
  author: string;
  subject: string;
}

class sellable<T> {
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
}
