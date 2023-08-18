// A magic square is square grid filled with distinct positive integers such that each cell contains a different integer
// and the sum of the integers in each row, column and diagonal is equal.

// Given a square 2D array, return true if it is a magic square.

// Example:

// magical([[7, 2, 3],
//          [0, 4, 8],
//          [5, 6, 1]]) --> true // Everything adds to 12

// magical([[1, 1],
//          [1, 1]])  --> false // duplicatre numbers used

//I: a 2D array of integers
//O: a boolean indicating whether the array is a magic square
//C: no empty values
//E: n/a

//so first we have to check for distinct values, make an array to collect each value
//if a duplicate shows up, return false

//next we have to check for equal sums, which we'll measure based on sum of first row

//check for rows by summing each row
//check for columns in doubly nested for loop
//check for diagonals by summing each time i and j are equal

//i'm hoping we can do this without a ton of for loops

//declare function sumRow to reduce the row and return the sum
//declare var uniques to an empty array
//declare var targetSum to first row reduced
//declare var colSums to empty array the length of square filled with zeroes
//declare var majorDiag to 0
//declare var minorDiag to 0
//for each row i
  //if sumRow doesn't equal target sum
    //return false
  //for each column j
    //if number not in uniques
      //push num to uniques
    //else
      //return false
    //add num to colSums[j]
    //if i === j
      //add num to majorDiag
    //if row.length - j === i
      //add num to minorDiag
//if not every value in colSums equals targetSum
  //return false
//if majorDiag and minorDiag don't equal targetSum
  //return false
//return true

// [1,2,3,4,5]
// [2,4,6,8,10]
// [3,6,9,12,15]
// [4,8,12,16,20]
// [5,10,15,20,25]

//0,4 1,3, 2,2 3,1 4,0
  
const magicSquare = arr => {
  //helper function ahoy!
  let sumRow = row => {
    return row.reduce( (acc, val) => {
      return acc + val;
    }, 0)
  }
  let uniques = [];
  let targetSum = sumRow(arr[0]);
  let colSums = new Array(arr.length).fill(0);
  let majorDiag = 0;
  let minorDiag = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sumRow(arr[i]) !== targetSum) {
      return false;
    }
    for (let j = 0; j < arr.length; j++) {
      let num = arr[i][j];
      if (!uniques.includes(num)) {
        uniques.push(num);
      } else {
        return false;
      }
      colSums[j] += num;
      if (i === j) {
        majorDiag += num;
      }
      if (arr.length - 1 - j === i) {
        minorDiag += num;
      }
    }
  }
  const equalToTarget = val => val === targetSum;
  if (!colSums.every(equalToTarget)) {
    return false;
  }
  if (majorDiag !== targetSum || minorDiag !== targetSum) {
    return false;
  }
  return true;
}

const test1 = [
  [7, 2, 3],
  [0, 4, 8],
  [5, 6, 1]
]
console.log(`Test 1 Result:\n\t${magicSquare(test1)}`); //true

const test2 = [
  [1, 1],
  [1, 1]
]
console.log(`Test 2 Result:\n\t${magicSquare(test2)}`); //false
