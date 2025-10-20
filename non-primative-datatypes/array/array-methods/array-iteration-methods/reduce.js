// compains array value into a single result 
// return a single value 

const sum = [1,2,3,4].reduceRight((acc,num) => acc + num,0)
console.log(sum);