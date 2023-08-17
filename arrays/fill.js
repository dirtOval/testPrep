/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
  * @param {number} arraySize - size of array 
  * @param {?} value - value to fill 
  * @returns {Array} 
*/
const fill = (arraySize, value) => {
 if (arraySize < 0) {
  throw new Error('arraySize must be >= 0! Try again. :)');
 }
 let arr = [];
 for (let i = 0; i < arraySize; i++) {
  arr.push(value);
 }
 return arr;
}

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)) // ['a', 'a', 'a']

//edge case test
const negative = -69;
const unusedValue = 'aaabababa';
console.log(fill(negative, unusedValue)); //should throw an error

//I: an integer, and a value to fill the resultant array
//O: an array of the specified size filled with the provided value
//C: unclear
//E: negative integer supplied, throw an error indicating that a positive integer is required

//so we're going to create an array, then use a for loop to populate the array with
//the designated value, using push

//if arraySize is less than 0
  //throw an error saying it has to be >= 0
//create an empty array named arr
//for the length of arraySize
  //push value to arr
//return arr