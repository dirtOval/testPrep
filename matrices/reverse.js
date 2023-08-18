const { displayMatrix } = require('./helpers');

// Write a method that takes a 2D array and reverses all of the content in the 2D array.
// The last value should be the first, and the first value should be the last.

// For example, the call reverse({{1,2,3},{4,5,6},{7,8,9}}) would return:

// [9,8,7]
// [6,5,4]
// [3,2,1]

//I: a 2D array
//O: the same 2D array, with its contents reversed
//C: input is assumed to not be empty
//E: n/a

//so nested for loops running backwards. simple as can be

//declare var result
//for each row backwards
  //push a new array to result
  //for each column backwards
    //push value to new array
//return result

const reverse = arr => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let newArrIdx = result.push([]) - 1;
    for (let j = arr[i].length - 1; j >= 0; j--) {
      result[newArrIdx].push(arr[i][j]);
    }
  }
  return result;
}

const test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(`Test 1 Result:\n${displayMatrix(reverse(test1))}`);// [9,8,7]
                                                                // [6,5,4]
                                                                // [3,2,1]