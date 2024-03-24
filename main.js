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

const obgA = { a: 1, b: 2, c: 3}
const obgB = { a: 1, b: 2, c: 3}
const obgC = { a: 1,  d: 4}

const objectEquals = (a, b) =>  Object.keys(a).every(key => b[key]);


console.log(objectEquals(obgA, obgB));
console.log(objectEquals(obgC, obgB));
console.log(objectEquals(obgA, obgC));
