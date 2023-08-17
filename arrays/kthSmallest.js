// Given an array and a number K where K is smaller than the size of the array.
// Find the K’th smallest element in the given array.
// Given that all array elements are distinct.

//I: an array and an integer K
//O: the Kth smallest element in the array
//C: all array elements are distinct
//E: if number is larger than size of array, throw an error

const kthSmallest = (arr, k) => {
  return arr.sort((a, b) => {
    return a - b;
  })[k - 1];
}

//sort the array, return K - 1 index of result

const test1 = [7, 10, 4, 3, 20, 15];
const k1 = 3;
console.log(`Test 1 Result:\n\t${kthSmallest(test1, k1)}`); //7
const k2 = 4;
console.log(`Test 2 Result:\n\t${kthSmallest(test1, k2)}`); //10

