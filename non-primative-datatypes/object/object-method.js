// yrou can store function inside object data called method
const car = {
    brand:"Toyota",
    start: function(){
        console.log("car started");
        
    }
}

car.start()

// example -2
// .this  refrers the object it self (use to access propertys methodes)
const person = {
    name:"shiljith",
    age:24,
    greet:function(){
        console.log(`hello my name is ${this.name}`);

    }
}
person.greet();