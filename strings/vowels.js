// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//declare vowels
//declare counter
//for each character in str
  //if vowels includes char
    //increment counter
//return counter

const vowels = str => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      counter++
    }
  }
  return counter;
}

const test1 = 'good grief charlie brown';
console.log(`Test 1 Result:\n\t${vowels(test1)}`); //8