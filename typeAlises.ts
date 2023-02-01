type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// type myString = string;

function createUser(_user: User) {
  return {
    name: "",
    email: "",
    isActive: true,
  };
}

createUser({
  name: "",
  email: "",
  isActive: true,
});

export {};
