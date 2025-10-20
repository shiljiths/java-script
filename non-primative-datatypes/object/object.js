
const person = {
name:'amay',
age:'21',
isstudent: true
}
console.log(person.name);
console.log(person.age);
// adding datas
person.city ="calicut";

// modify data
person.age ="30"

console.log(person);

// remove a property from an object
delete person.city
console.log("final person details is: ",person );
