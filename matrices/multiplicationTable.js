const { displayMatrix } = require('./helpers');

//Write a method that returns a 2D array that represents a multiplication table.
//The method should take an int as a parameter that determines the size of the multiplication table.

// For example, the call multiplicationTable(5) would return:

// [1,2,3,4,5]
// [2,4,6,8,10]
// [3,6,9,12,15]
// [4,8,12,16,20]
// [5,10,15,20,25]

const multiplicationTable = size => {
  let result = [];
  for (let i = 0; i < size; i++) {
    let mult = i + 1;
    result[i] = [];
    for (let j = 1; j <= size; j++) {
      result[i].push(mult * j);
    }
  }
  return result;
}

const test1 = 5;
console.log(`Test 1 Result:\n${displayMatrix(multiplicationTable(test1))}`);

//I: an integer representing the dimensions of the multiplication table
//O: a two dimensional array representing a multiplication table of the size inputed
//C: number must be >= 1
//E: if size is less than one throw an error

//so my first thought is we want to make an accumulator array, then populate it
//using doubly nested for loops
//first for loop adds the array to the accumulator
//second for loop adds multiples of i up to size
//return accumulator

//declare result accumulator
//for nums i up to size
  //push an array to result
  //for nums j up to size
    //push i*j to array
//return result