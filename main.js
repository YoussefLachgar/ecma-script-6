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

const switchToCoins = (amount, coins = [10, 5, 2, 1]) => {
   
    const totalCoins = [];
    for(let i = 0; i < coins.length; i++)
    {
        const thisCoinNum = Math.floor(amount/ coins[i]);
        for(let j = 0; j < thisCoinNum; j++){
            totalCoins.push(coins[i]);
        }

        amount -= coins[i] * thisCoinNum;
    }
    return totalCoins;
}

const removeCharacter = (str, char) => str.split(char).join('');

const getUniqueChares = (str) =>
    [... new Set(str.split(''))];

const getCharASCII = (c) => String.fromCharCode(c).toString();

const getASCIIChar = (c) => c.charCodeAt(0);

console.log(getASCIIChar('H'));
