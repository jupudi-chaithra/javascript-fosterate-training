class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
}
let user = new User("John");
user.sayHi();

let User2 = class {
  sayHi() {
    console.log("Hello");
  }
};

let obj = new User2
obj.sayHi()


class User3 {

  constructor(name) {
    this.name = name;
}

  get name() {
    return this._name;
}

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
}
}

let user2 = new User3("John");
console.log(user.name);
user = new User3("");



