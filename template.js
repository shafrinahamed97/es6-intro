// Template string, multiple line string, dynamic string

// Template Literals: Template literals are enclosed by backtrick(`)charcters instead of double or single quoted, allowing for the following: 1) multi-line string; 2) string interpolation.

const person = 'Shafrin';
const person2 = 'ahamed';
const person3 = `Shakib`;

// previous system 
const multiline = 'First Line text \n' + 'second line of code\n' + 'third line of text\n' + 'Fourth line of string';
// console.log(multiline);


// Present system using backtick(` `)
const newMultiline = `First line of text
Secont line of tecxt
third line of code
fourth line of code`;
// console.log(newMultiline);


// previous system
 const a=20;
 const  b=30;
 const nums = [78,98,45,12,6,444]
const summary = 'sum of:' + a + '  and  '+ b +' is:'+(a+b);
// console.log(summary);

// present system using template string
const newSummary = `sum of ${a} and ${b} is: ${a+b}`;
console.log(newSummary);