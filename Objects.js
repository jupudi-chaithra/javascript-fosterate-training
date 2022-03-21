let user = {     
    name: "John",
    age: 30
};

console.log(user);
console.log(user.age);
console.log(user.name);

user.id = 1

console.log(user);
console.log(user.age);
console.log(user.name);
console.log(user.id);

delete user.id
console.log(user);


let user2 = {
    name: "John",
    age: 30,
    "likes birds": true
};

console.log(user2["likes birds"]);

let key = "likes birds";

user2[key] = true;




let user3 = {
    name: "John",
    age: 30
};
  
let key2 = prompt("What do you want to know about the user?", "name");

alert( user3[key2] );


let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5,
};

alert(bag.apple); 