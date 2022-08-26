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

    /*
       Difference between Arrow function and Regular function:

        Arrow function: If the arrow fucntion contains one expression, you can omit the curly braces, and then the expression will be implicity.
         // ES6
          let add = (x,y)=> x+y;

          Regular function: If regular function, you have to use return keyword to return any value. If you do not return anything then the function will return undefined.
          //ES5
           function add(x,y)
           {
            return x+y;
           }

      Arrow Function:
      Arrow function do not have their own this
       let me={
        name = "john",
        thisInArrow:() =>
        {
            console.log("My name is " + this.name);
        },
       };
        me.thisInArrow();
        //My name is undefined

        Regular Function:
         Regular functions have their own this

         let me = {
            name: "john",
            thisInRegular(){

                console.log("My name is " + this.name);
            },
         };
         // My name is John
    */

