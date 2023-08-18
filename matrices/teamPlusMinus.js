
// Write a function that returns the team +/- for the home team given an array of scores.

// “team +/-” means the total difference between the points scored by the home team and the points given up. It could be a negative number.

// Scores will be in a 2-D array in the format:

// int[][] games = {
//     {84, 92},
//     {95, 93},
//     {86, 88},
//     {86, 83},
//     {112, 103},
//     {105, 95}
// };
// Java
// Each “game” will have two numbers: the home score and the away score.

// You should write a function called teamPlusMinus that takes a parameter games and computes the total +/- of these games for the home team.

//I: a 2D array containing scores
//O: the total difference of home & away scores
//C: no empty scores
//E: n/a

//this is a good use case for reduce

//declare var result
//array reduce with acc and val
  //return acc + val[0] - val[1]
//return result

const teamPlusMinus = arr => {
  return arr.reduce((acc, val) => {
    console.log(val);
    return acc + val[0] - val[1];
  }, 0);
}

const test1 = [
  [84, 92],
  [95, 93],
  [86, 88],
  [86, 83],
  [112, 103],
  [105, 95]
]
console.log(`Test 1 Result:\n\t${teamPlusMinus(test1)}`); //14