let i = 3
while(i < 10){
    console.log(i);
    i += 1
}
console.log("--------------------------");


i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
console.log("--------------------------");

for (i = 0; i < 3; i++) {
  console.log(i);
}


let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );



outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    if (!input) break outer; // (*)

  }
}
alert('Done!');