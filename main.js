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

const isEveryElem = (arr, fn) =>  {
    for (let i = 0; i < arr.length; i++) {
        if(!fn(arr[i])){
            return false;
        }
    }
    return true;
}

const isGretearThan0 = (x) => x > 0;

const sortedStr = (str) => {
    chars = str.split('');
    chars.sort();
    return chars.join('');
}

const countVowels = (str) => {
    let count = 0;
    str.split('').forEach( (char) => {
        if(char === 'a' || char === 'i' || char === 'e' || char === 'u' || char === 'o') 
            return count++;
    })

    return count;
}


console.log(countVowels('halolyabrow'));
