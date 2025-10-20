function sum(...numbers){
    return numbers.reduce((total,num) => total + num, 0);
}

console.log(sum(1,2));
console.log(sum(1,2,3,4,5,6));
console.log(sum(10,20,30,40,60,80));


