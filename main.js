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

const parseCSV = (csvString) =>  csvString.split('\n').map(row => row.split(','))

const str = `abc,def,ghi
jkl,mro,pqr
stu,vwx,vza`;


console.log(parseCSV(str));
