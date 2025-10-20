
function simple(name, age) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

function simple({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

simple({ name: "Shiljith", age: 25 });