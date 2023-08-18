//Write a method that returns the sum of all the values in a 2D array.

const sumAll = (arr) => {
  let result = 0;
  for (let row of arr) {
    for (let int of row) {
      result += int;
    }
  }
  return result;
}


const test1 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]
console.log(`Test 1 Result:\n\t${sumAll(test1)}`); // 325

//I: a two dimensional array
//O: an integer representing the sum of all values in the array
//C: n/a
//E: n/a

//accumulator, nested for loops. simple.