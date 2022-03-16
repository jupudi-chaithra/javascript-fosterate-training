/*function test()
{
    console.log("hello world");
}

test()*/


/*let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log( userName ); // John before the function call

showMessage();

console.log( userName );*/

/*function showMessage(from, text = "no text given") {
    console.log( from + ": " + text );
  }
  
showMessage("Abhigna")
showMessage("Abhigna", "Hi")*/

/*function showMessage(from, text) {
    text = text || "no text given"
    console.log( from + ": " + text );
  }
  
showMessage("Abhigna")
showMessage("Abhigna", "Hi")*/


/*function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }*/


  function printEvenUpto(n){
    for(let i = 0; i <= n; i = i + 2)
      console.log(i)
  }

  printEvenUpto(11)