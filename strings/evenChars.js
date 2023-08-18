// Write a function that returns a sequence (index begins with 1)
// of all the even characters from a string. If the string is smaller than two characters
// or longer than 100 characters, the function should return “invalid string”.

// For example:

// “abcdefghijklm” –> [“b”, “d”, “f”, “h”, “j”, “l”]

// “a”             –> “invalid string”

const evenChars = str => {
  if (str.length < 2 || str.length > 100) {
    return 'invalid string';
  }
  let result = [];
  for (let i = 1; i < str.length; i += 2) {
    result.push(str[i]);
  }
  return result;
}

//if string length less than 2 or greater than 100
  //return 'invalid string'
//declare var result
//for every other index i starting with 1
  //add char to result
//return result

const test1 = 'abcdefghijklm';
const test2 = 'a';
console.log(`Test 1 Result:\n\t${evenChars(test1)}`); //[“b”, “d”, “f”, “h”, “j”, “l”]
console.log(`Test 2 Result:\n\t${evenChars(test2)}`); //“invalid string”
