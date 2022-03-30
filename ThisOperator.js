const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};


console.log(person.fullName());

function sample(){
    return this;
}

console.log(sample());


let student = {
    id: 527,
    Name: "Jupudi Chaithra",
    Branch: "CSE",
    Section: "A",
    test : function() {
    return this;
  }
}

console.log(student.test());


const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

console.log(person1.fullName.call(person2));


const person3 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
console.log(fullName());