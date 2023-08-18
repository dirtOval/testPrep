const { displayMatrix } = require('./helpers');

//okay so you get fed a matrix of integers between 1 and 500
//and a string with up to 3 directions on it, either R or L.
//if L, rotate 90 degrees counterclockwise. if R, 90 degrees clockwise.

//I: a 2D array of integers, a string with up to three instructions
//O: that same 2D array, rotated according to the instructions
//C: maximum of 3 instructions, numbers will be between 1 and 500
//E: n/a

//okay so it's probably gonna help to draw some diagrams to figure this out

//[1, 2, 3]
//[4, 5, 6]
//[7, 8, 9]

//rotated to the right once

//[7, 4, 1]
//[8, 5, 2]
//[9, 6, 3]

//whereas if it was rotated to the left

//[3, 6, 9]
//[2, 5, 8]
//[1, 4, 7]

//bigger example

//[1, 2, 3, 4]
//[5, 6, 7, 8]
//[9, 10, 11, 12]
//[13, 14, 15, 16]

//rotated clockwise

//[13, 9, 5, 1]
//[14, 10, 6, 2]
//[15, 11, 7, 3]
//[16, 12, 8, 4]

//so we need to iterate through each instruction and and if it's right,
//make each row a column starting from the end
//whereas if it's left make each row a column starting from the beginning

//so there's a few cases to handle
  //if it's the first item in the row (j = 0) it goes to the end of the row
  //the middle elements depend on whether the length is even or odd
  //if it's odd it has a middle element that doesn't move
  //if odd it has inner elements that shift around

//so the row goes to the opposite column, index wise, e.g. row 0 becomes column 3
//row 1 becomes column 2, so on
//could we make it so that the number gets dropped into the row based on its column
//and its column based on its row?

//declare var result equal to array the length of the square, filled with arrays filled with 0s equal to length
//for each instruction
  //if it's R
    //for each row i
      //for each column j
        //result[j][result.length - 1 - i] = arr[i][j];
  //else if its L
    //for each row i
      //for each column j
        //result[result.length - 1 - j][i] = arr[i][j];
//return result

const rotateMatrix = (arr, instructions) => {
  let result = new Array(arr.length);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(arr.length).fill(0);
  }
  for (let instruction of instructions) {
    if (instruction === 'R') {
      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
          result[j][result.length - 1 - i] = arr[i][j];
        }
      }
    } else if (instruction === 'L') {
      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
          result[result.length - 1 - j][i] = arr[i][j];
        }
      }
    }
  }
  return result;
}


const test1 = [
  [1, 2],
  [3, 4]
];
console.log(`Test result:\n${displayMatrix(rotateMatrix(test1, 'RLR'))}`); //[3, 1]
                                                                             //[4, 2]

const test2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(`Test 2 Result:\n${displayMatrix(rotateMatrix(test2, 'RLR'))}`); //[7, 4, 1]
                                                                               //[8, 5, 2]
                                                                               //[9, 6, 3]

const test3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
console.log(`Test 3 Result:\n${displayMatrix(rotateMatrix(test3, 'RLR'))}`); //[13, 9, 5, 1]
                                                                              //[14, 10, 6, 2]
                                                                              //[15, 11, 7, 3]
                                                                              //[16, 12, 8, 4]