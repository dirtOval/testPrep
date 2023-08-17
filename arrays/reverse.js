/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/
const reverse = (array) => {
  let arr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
 }
 const data = [1, 2, 3];
 console.log(reverse(data)); // [3, 2, 1]

 //I: an array
 //O: the array, reversed
 //C: no using Array.reverse() lmao
 //E: n/a

 //make a new array
 //for loop for length of array starting from back
   //push element to new array
 //retunr new array

