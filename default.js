// function add(first, second)
// {
//     const total = first+second;
//     return total;
// }
// const result = add();
// console.log(result);

function add(first = 0, second =0)
{
    const total = first+second;
    return total;
}
 const result = add(10,10);
 console.log(result);

 // DEFAULT PARAMETERS
 // Default function parameters allow namned parameters to be initialized with default values if no value or undefined is passed