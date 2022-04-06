function countRabbits(){
    for(let i = 1; i <= 3; i++){
        console.log("Function called", i)
    }
}



button2.onclick = function(){
    console.log("Oh the second button is clicked")
}


function sample(){
    console.log("Practicing events")
}

button3.onclick = sample


function one(){
    console.log("Function one called")
}

function two(){
    console.log("Function two called")
}


button4.addEventListener("click", one)
button4.addEventListener("click", two)


/*let obj = {
    handleEvent(event) {
      alert(event.type + " at " + event.currentTarget);
    }
};

elem.addEventListener('click', obj);*/




class Menu {
    handleEvent(event) {
      switch(event.type) {
        case 'mousedown':
          elem.innerHTML = "Mouse button pressed";
          break;
        case 'mouseup':
          elem.innerHTML += "...and released.";
          break;
      }
    }
}

let menu = new Menu();
elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);

