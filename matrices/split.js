const { displayMatrix } = require('./helpers');

// Write a method that returns a portion of a 2D array based on a specified row and col.
// For example, the call split({{1,2,3},{4,5,6},{7,8,9}}, 1, 1) would return all elements up to that point in the 2D array:

// [1,2]
// [4,5]

//I: a 2D array of integers
//O: a slice of the 2D array based on specified row and col
//C: no empty arrays
//E: n/a

//it's zero indexed, feel like we can just do nested for loops with an accumulator.
//row and col can be the bounds for the loops

//declare var result to empty array
//for nums up to row i
  //push new array to result
  //for nums up to col j
    //push num at cell to new array
//return result

const split = (arr, row, col) => {
  let result = [];
  for (let i = 0; i <= row; i++) {
    result.push([]);
    for (let j = 0; j <= col; j++) {
      result[i].push(arr[i][j]);
    }
  }
  return result;
}

const test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(`Test Result:\n${displayMatrix(split(test1, 1, 1))}`); // [1,2]
                                                                   // [4,5]