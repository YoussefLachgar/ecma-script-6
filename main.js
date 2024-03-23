/*
let,const 

var
    -Function scope
    -Can be reDeclared
    -Can reAsigne
    -Undefined when accessing a variable before its deration
    -Creating a properties in th widow object


let 
    -Block scope
    -Cannot be reDeclared
    -Can reAsigne
    -RefrenceError when accessing a variable before its deration
    -Does not creating a properties in the widow object



const 
    -Block scope
    -Cannot be reDeclared
    -Can reAsigne
    -RefrenceError when accessing a variable before its deration
    -Does not creating a properties in the widow object


*/ 

const oddNumbers = (numbers) =>   numbers.filter( num => num % 2 !== 0).length;

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
