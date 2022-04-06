/*
class Animal{
    constructor(name){
        this.name = name
    }

    run(speed){
        this.speed = speed
        console.log(this.name, "runs with ", this.speed);
    }

    stop(){
        this.speed = 0
        console.log(this.name, "stand still")
    }
}

class Rabbit extends Animal{
    hide(){
        console.log(this.name, "hides")
    }
}

let rabbit = new Rabbit("Alex")
rabbit.run(10)
rabbit.stop()
rabbit.hide()



class Cat extends Animal{
    stop()
    {
        this.speed = 0
        console.log(this.name, "stand still", "New function");
    }
}

let cat = new Cat("Pingu")
cat.run(20)
cat.stop()
*/


class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  }
  
  class Rabbit extends Animal {
  
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }
  

  }

  let rabbit = new Rabbit("White Rabbit", 10);
  alert(rabbit.name);
  alert(rabbit.earLength);