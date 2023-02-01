const data: number[] = [1, 2, 3, 4];
const data1: string[] = ["1", "2", "3", "4"];
const data2: (number | string)[] = [1, "2", 3, "4"];

const data3: (number | string | boolean)[] = [1, "2", 3, "4", true];

let seatAllotment: "aisle" | "middle" | "windows";

seatAllotment = "aisle";

console.log(data);

export {};
