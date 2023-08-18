// You receive the name of a city as a string, and you need to return a string
// that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// “Chicago”  –>  “c:**,h:*,i:*,a:*,g:*,o:*”

// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc).
// There should be no spaces in the output, and the different letters are separated by a comma (,)
// as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

//split into an array,
//for each element count, add that many asterisks to str

//declare result = ''
//declare letters equal to str to lowercase split
//for each letter in split
  //if letter is in result
    //continue
  //add letter to result
  //for letters.count(letter)
    //add a *
  //add a comma to result
//return result

const charCounter = str => {
  let result = '';
  let letters = str.toLowerCase().split('');
  for (let char of letters) {
    if (result.includes(char)) {
      continue;
    }
    result += char;
    let count = letters.filter(x => x === char).length;
    for (i = 0; i < count; i++) {
      result += '*';
    }
    result += ',';
  }
  return result;
}

const test1 = 'Chicago';
console.log(`Test 1 Result:\n\t${charCounter(test1)}`); //'c:**,h:*,i:*,a:*,g:*,o:*'
const test2 = 'Mississippi';
console.log(`Test 2 Result:\n\t${charCounter(test2)}`); //'m*,i****,s****,p**'
