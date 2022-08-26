// find max number
const max= Math.max(12,85,99,78);
// console.log(max);

 const numbers = [23,96,99,78];
 const largest = Math.max(...numbers);
//  console.log(...numbers);
//  console.log(largest);

const numbers2 = [...numbers];
numbers.push(26);
numbers2.push(777);
console.log(numbers);
console.log(numbers2);
 
const numbers4 = [444, 78, ...numbers,111,22]
/*
        SPEREAD OPERATION: The JavaScript spread operator(... ) allows us quickly copy all or part of an existing array or object into other array or object.
   

*/