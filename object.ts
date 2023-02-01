const user = {
  name: "Rajeev",
  email: "rk@gmail.com",
  isActive: true,
};

function createUser({ name: string, isActive: boolean }) {}

let newUser = { name: "Rajeev", isActive: true };
createUser(newUser);

function createCourse(): { name: string; isActive: boolean } {
  return { name: "Rajeev", isActive: true };
}

export {};
