// Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[].
// Expected time complexity is O(Logn)

const countOccurrences = (arr, x) => {
  const first = arr.indexOf(x);
  if (first === -1) {
    return first;
  }
  let counter = 0;
  for (let i = first; i < arr.length; i++) {
    if (arr[i] === x) {
      counter++;
    } else {
      return counter;
    }
  }
  return counter;
}

//FUNCTIONALITY TESTS
// const test1 = [1, 1, 2, 2, 2, 2, 3];
// const x1 = 2;
// console.log(`Test 1 Result:\n\t${countOccurrences(test1, x1)}`) //4
// const x2 = 3;
// console.log(`Test 2 Result:\n\t${countOccurrences(test1, x2)}`) //1
// const x3 = 1;
// console.log(`Test 3 Result:\n\t${countOccurrences(test1, x3)}`) //2
// const x4 = 4;
// console.log(`Test 4 Result:\n\t${countOccurrences(test1, x4)}`) //-1

//TIME COMPLEXITY TESTS
const timeFunction = (func, input) => {
  const start = performance.now();
  let result = func(input[0], input[1]);
  const end = performance.now();
  console.log(result);
  return `Execution Time: ${end - start}ms`;
};

let test1 = new Array(10).fill(1);
console.log(timeFunction(countOccurrences, [test1, 1]));
let test2 = new Array(100).fill(1);
console.log(timeFunction(countOccurrences, [test2, 1]));
let test3 = new Array(1000).fill(1);
console.log(timeFunction(countOccurrences, [test3, 1]));
let test4 = new Array(10000).fill(1);
console.log(timeFunction(countOccurrences, [test4, 1]));
let test5 = new Array(100000).fill(1);
console.log(timeFunction(countOccurrences, [test5, 1]));

//I: a sorted array of integers
//O: an integer representing the number of occurrences of the indicated value, or -1 if it is not present
//C: time complexity should be O(Logn), no using Array.count()!
//E: if value is not present return -1

//could index of to find the first item and iterate until it hits a different value. if -1, return that

//var first = indexOf first occurrence
//if first is -1, return first
//var counter = 0
//for each element in arr starting at index first
  //if element equals x
    //counter++
  //else
    //return counter

//my timing function is not working, suggesting complexity here i am not understanding.