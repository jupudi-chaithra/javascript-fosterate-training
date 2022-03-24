let numbers = [1, 2, 3, 4]

let fruits = ["apple", "banana", "guava"]

console.log(numbers);
console.log(fruits);

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length);
console.log(numbers.length);


let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
console.log(arr);
console.log(arr[1].name);
console.log(arr[3]);


fruits.pop()
console.log(fruits);

fruits.push('Pear')
console.log(fruits);

fruits.unshift("Watermelon")
console.log(fruits);
fruits.unshift("Strawberry", "Orange")
console.log(fruits);


let copy = fruits
copy.push("Chikoo")
console.log(fruits);

fruits.shift()
console.log(fruits);


for(let i of fruits){
    console.log(i);
}

for(i in fruits){
    console.log(i);
}



let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
console.log(matrix[1][1]);