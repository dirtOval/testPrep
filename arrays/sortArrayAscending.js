//Sort an array of integers in ascending order. No cheating with the built in array method!

const sortArrayAscending = (arr) => {
  let copy = [...arr];
  let sorted = false;
  while (!sorted) {
    for (let i = 0; i < copy.length; i++) {
      if (i === copy.length - 1) {
        sorted = true;
        break;
      }
      if (copy[i] > copy[i + 1]) {
        let temp = copy[i + 1];
        copy[i + 1] = copy[i];
        copy[i] = temp;
        break;
      }
    }
  }
  return copy;
};

//I: an array of integers
//O: the array sorted in ascending order
//C: no using array.sort! don't mutate input array
//E: empty array, just return that array i suppose

//so okay, how about we use a for loop inside a while loop?
//the loop tries to make it all the way through the array
//but if the next value is smaller than the current value it
//swaps them and starts over
//once it makes it all the way thru it returns the array

//should probably make it not mutate the original array, so we're making a copy
//with spread operator

const test1 = [0, 23, 14, 12, 9];
const mutateCheck = [...test1];
console.log(`Test1:\n\t${sortArrayAscending(test1)}`); //0 9 12 14 23 
console.log(`Mutation check! Was the input array mutated? ${JSON.stringify(test1) !== JSON.stringify(mutateCheck)}`);