const person = {name:"liya",age: 9, country: "india"};
// basic destructuring
const {name,age} = person;

console.log(name);
console.log(age);

// rename variables
const {country:nation } = person;
console.log(nation);

// default value
const {gender ="female"} = person;
console.log(gender);


