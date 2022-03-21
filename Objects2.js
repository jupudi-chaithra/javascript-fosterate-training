function makeUser(name, age) {
    return {
      name: name,
      age: age
    };
}
  
let user = makeUser("John", 30);
console.log(user.name);

/*
let user = {
    name,
    age: 30

    //Same as above
};
*/

let user2 = {};

console.log( user2.noSuchProperty === undefined );


let user3 = { name: "John", age: 30 };

console.log( "age" in user2 );
console.log( "blabla" in user2 );



let user4 = {
    name: "John",
    age: 30,
    isAdmin: true
};
  
  for (let key in user4) {
    console.log( key );
    console.log( user4[key] )
}


