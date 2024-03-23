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

const oddNumbersUpToTheANumber = (num) => {
    return Math.floor((num - 1) / 2) + 1;
}

const countOddNumbers = (numbers) =>   numbers.filter( num => num % 2 !== 0).length;

const creatArrayOfNumbers = (num) => {
    const array = [] ;

    for(let i = 1 ; i <= num ; i++) {
        array.push(i);
    }
    return array;
}

console.log(countOddNumbers(creatArrayOfNumbers(130)));
console.log(oddNumbersUpToTheANumber(130));
