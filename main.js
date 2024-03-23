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

const isAscending = (numbers) =>  {

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i+1] < numbers[i]){
            return false;
        }
    }

    return true;
}


console.log(isAscending([1,2,3,4,5]));
console.log(isAscending([1,2,6,4,5]));
