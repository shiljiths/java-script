const students = [
    {name: 'amay', age: 21, gender: 'a'},
    {name: 'shiljith',age: 24, gender:'a'}
]
// accessing datas
console.log(students[0].name);
console.log(students[1].age);

// looping through object array
students.forEach(stdnts => {
    console.log(`${stdnts.name} is ${stdnts.age} years old`);
    
})

