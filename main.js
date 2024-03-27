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

const getASCIIChar = (a) => a.charCodeAt(0);

const pointsOfTeam = (games) => {
    let total = 0;
    games.map(matchResult => {
        let mr = matchResult.split(":");
        if(mr[0] > mr[1]){
            total += 3;
        }
        if(mr[0] < mr[1]){
            total += 0;
        }
        if(mr[0] == mr[1]){
            total += 1;
        }

    } );
    return total;
}

const points = (games) => games.reduce((acc, game) => {
    const [ x, y ] = game.split(':');
    const points = x > y ? 3 : x === y ? 1 : 0;
    return acc += points;
},0);

console.log(points(['0:2','3:1','2:2','1:3','0:2','3:3','1:2','2:1','1:2','2:2']));
