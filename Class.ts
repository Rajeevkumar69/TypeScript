class User {
  private email: string;
  public name: string;
  public name1: string;
  readonly city: string = "Begusarai";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    this.city = "Delhi";
  }
}

const rajeev = new User("rk@gmail.com", "Rajeev Kumar");
// rajeev.city
// User.name =
export {};
