//  Union is a most important part of TypeScript , it might be number ,string (not sure)
//  Instead of writing any there are highly recommended to write union in typescript
//  Union is like a 2,3 or more types of data are combination with together

let score: number | string | boolean = 33;

score = "fiftyFive";

score = true;

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let rajeev: User | Admin = {
  name: "rajeev",
  id: 334,
};

rajeev = { username: "chamcham", id: 365 };

function getDbId(id: number | string) {
  // Making some API call
  console.log(`DB id is: ${id}`);
}

getDbId(3);
getDbId("three");

export {};
