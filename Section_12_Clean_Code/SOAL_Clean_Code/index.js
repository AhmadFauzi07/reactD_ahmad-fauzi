class User {
  constructor(name) {
    this.name = name;
  }

  displayName() {
    return `Nama saya adalah ${this.name}`;
  }
}

const user = new User("Ahmad Fauzi");
console.log(user.displayName());
