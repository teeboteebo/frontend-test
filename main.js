/*
 * Write a function that prints the temperature closest to 0 among input data.
 * If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5)
*/
const temps = [
  '1 -1 -3 3 2',
  '-4 -2 -111',
  '12 -1 3 6 2 9',
  '12 2 6 9 -2 7',
  '-5 -4 -2 7 -20 4 2 18 11 5',
  ''
];
// ---

// Receive string of temps one after each other
function outputTemp(tempRow) {
  // Set target to 0
  const target = 0;
  
  // If string is empty, return 0
  if (!tempRow) {
    return 0
  }
  // Convert string to array of integers
  const tempsArr = tempRow.split(' ').map(temp => parseInt(temp, 10))

  // If array contains the target, return it.
  if(tempsArr.includes(target)) return 0

  // Return temp closest to target
  return getClosest(tempsArr, target)
}


const getClosest = (arr, tar) => {
  // Reduce the array down to the one integer closest to target (0),
  // only change to a negative value if it is closer than a positive one.
  // Also change to the positive value if abs(positive) === abs(negative)

  return arr.reduce((acc, temp) =>
    temp > 0 && Math.abs(temp - tar) <= Math.abs(acc - tar) ? temp :
    temp < 0 && Math.abs(temp - tar) < Math.abs(acc - tar) ? temp : acc
  )
  // acc (accumulator) will recieve the first value of the array as an inital value

  // (Old syntax: 
  // if (temp > 0 && Math.abs(temp - tar) <= Math.abs(acc - tar)) return temp
  // else if(temp < 0 && Math.abs(temp - tar) < Math.abs(acc - tar)) return temp
  // else return acc)
}