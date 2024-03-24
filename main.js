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

const isAleapYear = (year) =>  year % 4 === 0;


console.log(isAleapYear(2014));
console.log(isAleapYear(2015));
console.log(isAleapYear(2016));
console.log(isAleapYear(2017));
console.log(isAleapYear(2018));
