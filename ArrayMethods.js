let arr = ["I", "study", "JavaScript"];
console.log(arr);
arr.splice(1, 1)
console.log(arr);


arr = ["I", "study", "JavaScript", "right", "now"];
console.log(arr);
arr.splice(0, 3, "Let's", "dance");
console.log(arr);

removed = arr.splice(0, 2)
console.log(removed);


arr = ["I", "study", "JavaScript"];
console.log(arr);
arr.splice(2, 0, "complex", "language");
console.log(arr);


arr = ["t", "e", "s", "t"];
console.log(arr.slice(1, 3));

arr = [1, 2];
console.log(arr.concat([3, 4]))


arr = [1, 0, false];
console.log(arr.indexOf(1));
console.log(arr.indexOf(false));
console.log(arr.indexOf(2));


let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);
console.log(user);

let someUsers = users.filter(item => item.id < 3);
console.log(someUsers);


let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);



arr = [ 1, 2, 15 ];
arr.sort();
console.log(arr);

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

arr.sort(compareNumeric)
console.log(arr);

arr = [ 1, 2, 15 ];
arr.sort( (a, b) => a - b );
console.log(arr);


arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);




let names = 'Bilbo, Gandalf, Nazgul';

arr = names.split(', ');

for (let name of arr) {
  console.log( `A message to ${name}.` );
}

