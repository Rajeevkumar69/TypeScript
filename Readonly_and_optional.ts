// readonly is a keyword in typescript

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "Rajeev",
  email: "rk@gmail.com",
  isActive: true,
};

type CardNumber = {
  cardNumber: string;
};
type cvvNumber = {
  cvvNumber: number;
};
type carsDate = {
  cardDate: string;
};

type cardDetails = CardNumber &
  carsDate & {
    cvvNumber: number;
  };

myUser.email = "rk488296@gmail.com";

// myUser._id = "12364"     -> can't change

export {};
