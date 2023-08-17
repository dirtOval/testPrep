// Given an array, write functions to find the minimum and maximum elements in it.

//I: an array of integers
//O: an object containing two keys, min and max
//C: unclear
//E: if all elements the same value, return min and max as same value

//sort the array, create an object with the requested keys assigned to first and last values,
//return that

const findMinAndMax = arr => {
  const obj = {};
  const sorted = arr.sort((a, b) => {
    return a - b;
  });
  obj.min = sorted[0];
  obj.max = sorted[arr.length - 1];
  return obj;
};

const test1 = [1, 423, 6, 46, 34, 23, 13, 53, 4];
const result1 = findMinAndMax(test1);
console.log(`Test 1: \n\tMin: ${result1.min}\n\tMax: ${result1.max}`); // min 1, max 423

const test2 = [1, 1, 1, 1, 1];
const result2 = findMinAndMax(test2);
console.log(`Test 2: \n\tMin: ${result2.min}\n\tMax: ${result2.max}`); // min 1, max 1