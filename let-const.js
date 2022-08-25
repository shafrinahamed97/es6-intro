// breakup with var
// no more use of var
 // let: let it to reassign
 // const: do not allow it to reassign

 let money = 25;
 money = 35;
 console.log(money);
 
 const bird = 'jan pakhi';
 // bird = 'moyma pakhi';
 const message = bird +" potaspotas"
 
 console.log(message);

 const numbers = [12,89,46,65];

 /// reassign is not allowed
//  numbers = [77,88,66,78];
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'mofiz',
    address:'rongpur'
}
student.name = 'shakib';
student.address = 'noakhali';
console.log(student);
for( let i=0; i<numbers.length;i++)
{
    const number = numbers[i];
    console.log(number)
}

