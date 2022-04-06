try {

    console.log('Start of try runs');

    console.log('End of try runs');
  
}
catch (err) {
  
    console.log('Catch is ignored, because there are no errors');
}



try {

    console.log('Start of try runs');

    xyxyxyxyxyx

    console.log('End of try runs');
  
}
catch (err) {
  
    console.log('Error has occured');
}


/*try {
    setTimeout(function() {
      noSuchVariable;
    }, 1000);
}
catch (err) {
    console.log("won't work");
}

setTimeout(function(){
    try{
        noSuchVariable;
    }
    catch{
        console.log("Error caught!");
    }
}, 1000);*/


try{
    lalalalaal;
}
catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    console.log(err);
}


let json = '{"name":"John", "age": 30}';
let user = JSON.parse(json);

console.log(user.name);
console.log(user.age);


json = "{ bad json }";

try{
    let user = JSON.parse(json);
    console.log(user.name);
}
catch(err){
    console.log("The data has errors");
    console.log(err.name);
    console.log(err.message);
}


json = '{"age": 30}'

try{
    let user = JSON.parse(json)
    console.log(user.name);
}
catch(err){
    console.log("This does not execute");
}

let error = new Error("Things happen o_O");
console.log(error.name);
console.log(error.message);




try {
    JSON.parse("{ bad json o_O }");
}
catch (err){
    console.log(err.name);
    console.log(err.message);
  }


try {
  console.log('try');
  if (confirm('Make an error?')) 
    BAD_CODE();
}

catch (err) {
  console.log('catch');
}

finally {
  console.log('finally');
}

