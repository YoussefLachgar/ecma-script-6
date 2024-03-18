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

const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a+b) === 100;

console.log(isEqualTo100(0,100));
console.log(isEqualTo100(100,0));
console.log(isEqualTo100(80,20));
console.log(isEqualTo100(50,50));
