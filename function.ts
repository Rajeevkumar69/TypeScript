function addTwo({ num }: { num: number }): number {
  return num + 2;
}

addTwo({ num: 5 });

function getUpper({ val }: { val: string }): string {
  return val.toUpperCase();
}

getUpper({ val: "hey dude!" });

function signupUser({
  name,
  email,
  password,
  isPaid,
}: {
  isPaid: boolean;
  name: string;
  email: string;
  password: string;
}): any {
  return (
    name.toString(), email.toLowerCase(), password.toString(), isPaid.valueOf()
  );
}

signupUser({
  name: "Rajeev Kumar",
  email: "rk@gmail.com",
  password: "123456Abc",
  isPaid: true,
});

let loginUser = (name: string, email: string, isPaid: boolean = true) => {
  return "You loggedIn";
};

loginUser("Rajeev", "rk488296@gmail.com", true);
export {};
