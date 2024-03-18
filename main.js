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

const replaceCharacterInString = (originalString, targetCharacter, replacementCharacter) => originalString
    .split('')
    .map(char => (char === targetCharacter) ? replacementCharacter : char)
    .join('');

console.log(replaceCharacterInString("index.get.js", "e", "v"));
