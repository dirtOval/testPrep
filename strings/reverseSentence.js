// reverseWords(“The greatest victory is that which requires no battle”)

// should return “battle no requires which that is victory greatest The”

//split sentence into words
//reverse array
//join by spaces

const reverseWords = str => str.split(' ').reverse().join(' ');

const test1 = 'The greatest victory is that which requires no battle';
console.log(`Test 1 Result:\n\t${reverseWords(test1)}`); //battle no requires which that is victory greatest The