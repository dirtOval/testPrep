// Given an array arr[] of integers. Find all peak elements i.e. an element that is not smaller than its neighbors. 

// Note: For corner elements, we need to consider only one neighbor.
// Note: If all elements of the input array are the same, every element is a peak element.

// Example:

// Input: array[]= {5, 10, 20, 15}
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

// Input: array[] = {10, 20, 15, 2, 23, 90, 67}
// Output: 20 or 90
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20, similarly 90 has neighbors 23 and 67.

//I: an array of integers
//O: an array of integers representing the 'peak' elements of the input array
//C: unclear
//E: if all elements are the same, return the array as they are all peak elements, corner elements only need consider 1 neighbor

//so we need to iterate through the array, first element checks the following element and every subsequent checks previous and following
//last element just checks previous, if integer is higher than neighbors add to array. return that array.
//the remaining question is how to check if all elements are identical, in which case just return the array. Array.every will help us.

const findPeaks = array => {
  if (array.every(val => val === array[0])) {
    return array;
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      if (array[i] > array[i + 1]) {
        result.push(array[i]);
      }
    } else if (i === array.length - 1) {
      if (array[i] > array[i - 1]) {
        result.push(array[i]);
      }
    } else {
      if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
        result.push(array[i]);
      }
    }
  }
  return result;
}

const test1 = [5, 10, 20, 15];
console.log(`Test 1 Result: ${findPeaks(test1)}`); //20
const test2 = [10, 20, 15, 2, 23, 90, 67];
console.log(`Test 2 Result: ${findPeaks(test2)}`); //20, 90
const test3 = [1, 1, 1, 1, 1, 1, 1] //return the whole array
console.log(`Test 3 Result: ${findPeaks(test3)}`);