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

const countOccurenceChar = (str, char) =>   str.split('').filter( ch => ch === char).length;

const occurenceBetween2and4 = (str, char) => 
countOccurenceChar(str, char) >= 2 && countOccurenceChar(str, char) <= 4;

console.log(occurenceBetween2and4('oh!','o'));
console.log(occurenceBetween2and4('ooh!','o'));
console.log(occurenceBetween2and4('ooh!','o'));
console.log(occurenceBetween2and4('ooooh!','o'));
console.log(occurenceBetween2and4('oooooh!','o'));
