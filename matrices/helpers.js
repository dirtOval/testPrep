const displayMatrix = (arr) => {
  let result = '';
  for (let row of arr) {
    result += JSON.stringify(row);
    result += '\n';
  }
  return result;
}

module.exports.displayMatrix = displayMatrix;