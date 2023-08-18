// Given a 2D array of integer (length > 0), return true if any two consecutive values are the same.
// A consecutive value is either two values from the same row in neighboring columns,
// or the last column in one row compared to the first column in the next row.

// Example:

// consecutive([[1, 2, 3], [3, 4, 5], [6, 7, 8]]) --> true
// consecutive([[1, 1, 2], [3, 4, 5], [6, 7, 8]]) --> true
// consecutive([[0, 1, 2], [3, 4, 5], [6, 7, 8]]) --> false

//I: a 2D array of integers
//O: a boolean indicating whether the array contains any consecutive values
//C: no empty indexes
//E: n/a

//so we need to check for adjacency within rows and also last column to first column of next
//we can iterate with doubly nested for loops to check each index with its following,
//unless it's the last column, in which case check the first of next, unless it's the last last,
//in which case do nothing

//for each row i
  //for each col j
    //if j === length - 1 and i !== length - 1
      //if arr[i][j] === arr[i + 1][0]
        //return true
    //else
      //if arr[i][j] === arr[i][j + 1]
        //return true
//return false

const consecutive = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === arr[i].length - 1 && i !== arr.length - 1) {
        if (arr[i][j] === arr[i + 1][0]) {
          return true;
        }
      } else {
        if (arr[i][j] === arr[i][j + 1]) {
          return true;
        }
      }
    }
  }
  return false;
}

const test1 = [
  [1, 2, 3],
  [3, 4, 5],
  [6, 7, 8]
];
const test2 = [
  [1, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];
const test3 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
]
console.log(`Test 1 Result:\n\t${consecutive(test1)}`); //true
console.log(`Test 2 Result:\n\t${consecutive(test2)}`); //true
console.log(`Test 3 Result:\n\t${consecutive(test3)}`); //false
