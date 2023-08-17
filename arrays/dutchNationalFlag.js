// Given an array A[] consisting of only 0s, 1s, and 2s.
// The task is to write a function that sorts the given array.
// The functions should put all 0s first, then all 1s and all 2s in last.

//EXAMPLES
// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}

// Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
// Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}

// const dutchNationalFlag = arr => {
//   let sorted = false;
//   let zeroIdx, oneIdx, twoIdx;
//   while (!sorted) {
//     zeroIdx = arr.indexOf(0);
//     oneIdx = arr.indexOf(1);
//     twoIdx = arr.indexOf(2);
//     for (let i = 0; i < arr.length; i++) {
//       if (i === arr.length - 1) {
//         sorted = true;
//         break;
//       }
//       if (arr[i + 1] < arr[i]) {
//         let temp = arr[i + 1];
//         arr.splice(i + 1, 1);
//         switch (temp) {
//           case 0:
//             arr.splice(zeroIdx, 0, temp)
//             break;
//           case 1:
//             arr.splice(oneIdx, 0, temp)
//             break;
//           case 2:
//             arr.splice(twoIdx, 0, temp)
//             break;
//         }
//         break;
//       }
//     }
//   }
//   return arr;
// }

const dutchNationalFlag = (arr) => {
  let zero = 0;
  let one = 0;
  let two = 0;
  arr.forEach(val => {
    switch (val) {
      case 0:
        zero++;
        break;
      case 1:
        one++;
        break;
      case 2:
        two++;
        break;
    }
  });
  let result = [];
  while (zero > 0) {
    result.push(0);
    zero--;
  }
  while (one > 0) {
    result.push(1);
    one--;
  }
  while (two > 0) {
    result.push(2);
    two--;
  }
  return result;
}

const test1 = [0, 1, 2, 0, 1, 2]
console.log(`Test1:\n\t${dutchNationalFlag(test1)}`); //0, 0, 1, 1, 2, 2
const test2 = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
console.log(`Test2:\n\t${dutchNationalFlag(test2)}`); //0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2

//I: an array of 0s, 1s, and 2s
//O: the array sorted with all 0s first, then all 1s, then all2s
//C: no using sort! that's cheating.
//E: n/a

//could use a while loop with a for loop that attempts to make it all the way thru
//could just count the numbers of 0s, 1s, and 2s and then fill a new array with them, 
//but that might not be in the spirit of this puzzle.

//could use a for loop inside a while loop.
//first it finds index of the first occurrence of each digit
//it tries to make it all the way thru the while
//loop and if it finds a number out of place it splices it into the spot

//var sorted is false
//let zeroIdx, oneIdx, twoIdx
//while sorted is false
  //zeroIdx = indexOf(0)
  //oneIdx is indexOf 1
  //twoidx is indexOf 2
  //for each digit
    //if digit is last digit
      //sorted is true
      //break
    //if digit following current digit is less than digit
      //var temp is current digit
      //splice digit out at index
      //switch statement for temp
        //if its 0
          //splice in at zeroIdx
        //if its 1
          //splice in at oneIdx
        //if its 2
          //splice in at twoIdx
      //break
//return arr


//WOW. there is a much better way to do this.