//  it's just an array

const User: (string | number)[] = ["rc", 1];
let tUser: [string, number, boolean];

tUser = ["chmmoo", 121, true];

// tUser = [12,"chamcham",true];   -> can't do this

let rgb: [number, number, number] = [2.32, 52, 2012.2];

// const newUser:tUser

//  TypeScript array push method can't catch a tuple of the array
//  Tuple are type of array of known length and where the different elements may have different type.

console.log(User, tUser, rgb);

export {};
