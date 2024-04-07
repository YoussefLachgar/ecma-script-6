// exercice 1:
//   You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:

// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.

// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
// the number of red marbles pulled out so far (always lower than the starting number of red marbles)
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
  const numOfBlue = blueStart - bluePulled;
  const numOfRed = redStart - redPulled;
  
  return numOfBlue / (numOfBlue + numOfRed);
  
}

// exercice 2:
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.
const firstNonConsecutive = (arr) => {
  // for(let i = 1; i < arr.length; i++){
  //   if(arr[i-1] + 1 !== arr[i]){
  //     return arr[i];
  //   }
  // }
  // return null;
  const nonConsecutive = arr.find((item, index) => index !== 0 && arr[index - 1] + 1 !== arr[index]);
  return nonConsecutive !== undefined ? nonConsecutive : null;
}

