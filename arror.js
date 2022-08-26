// function declaration
function add(first, second)
// {
//     const total = first+second;
//     return total;
// }

// function expression
const add1 = function add1(first,second)
{
    const total = first+second;
    return total;
}
 const result = add1(10,20);
 console.log(result);

 // function expression with anonymous function
 const add2 = function(first,second){
    const total = first+second;
    return total;
 }
 
  const result2 = add(41,58);
  console.log(result2);



function add4(first, second){
    return first+second;
}

const add5 = function(first,second){
    return first+second;
 }
 
 const add6 = (first,second) => first+second;
 const result3 = add(10,20);
 console.log(result3);