const add = (first, second) => first+second;
const getFullName = (first, last)=> first + ' ' + last;
const multiply = (a,b) => a*b;

const result = multiply(7,8);
// console.log(result);

const addAll = (a,b,c,d,e,f)=> a+b+c+d+e+f;

// No parameter arrow function
const getPie = () => 3.14

// one parameter
const doubleIt = (num) => num*2;

// one paramenter simple version
const fiveTimes = num => num *5;


// multi line arrow function
// if you want to return somethingm use the return
const doMath = (x,y,z) => {
    const firstSun = x+y;
    const secondSum = y+z;
    const multiplyResult = firstSun * secondSum;
    const result = multiplyResult/2;
    return result;
}

/*
 Arrow Function: Arrow function is one of the feature introduced in the ES6 version of JavaScript. It allows you to create function in a cleaner way compared to regular functions.


 Normal Function Declar:
   function add(a,b){
    return a+b;
   }

   Arrow Function Declare:
    const add =(a,b)=> a+b;

  


*/