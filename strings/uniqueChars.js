// In this Kata, you will be given two strings a and b and your task will be to
// return the characters that are not common in the two strings.

// For example:

// solve(“xyab”,”xzca”) = “ybzc” 

// –The first string has ‘yb’ which is not in the second string. 

// –The second string has ‘zc’ which is not in the first string. 

// Notice also that you return the characters from the first string concatenated with those from the second string.

// More examples in the tests cases.

// Good luck!

//declare result var = ''
//for each char in str1
  //if char not in str2
    //add to result
//for each char in str2
  //if char not in str1
    //add to result
//return result

const uniqueChars = (str1, str2) => {
  let result = '';
  let compare = (add, compare) => {
    for (let char of add) {
      if (!compare.includes(char)) {
        result += char;
      }
    }
  };
  compare(str1, str2);
  compare(str2, str1);
  return result;
}

const test1 = ['xyab', 'xzca'];
console.log(`Test 1 Result:\n\t${uniqueChars(...test1)}`); //'ybzc'