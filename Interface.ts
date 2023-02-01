// interfaces are more like a kind of scenario .
//  It's more like a class but lose type of class.

interface User {
  readonly Id: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  coupons(coupeName: string, value: number): number;
}

const rajeev: User = {
  Id: 212,
  email: "rajeev@gmail.com",
  userId: 2212,
  startTrail: () => {
    return "Okay!";
  },
  coupons: (name: "rajeev", id: 121) => {
    return 10;
  },
  githubId: "1235AB",
};

rajeev.email = "rk4545@gmail.com";
// rajeev.Id = 222

//    * Difference b/w Interface and Type *

interface User {
  githubId: string;
}

//        * Inheritance *

interface Admin extends User {
  role: "admin" | "ta" | "learner";
  githubId: "12544BCAvd";
}

console.log();
export {};
