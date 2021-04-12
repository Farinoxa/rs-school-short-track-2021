/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = [...n.toString()];
  const nArrMax = [...n.toString()];
  nArrMax.sort((a, b) => b - a);
  for (let i = 0; i < nArr.length; i++) {
    if (nArr[i] === nArrMax[0]) {
      indexForDell = i - 1;
    }
  }
  nArr.splice(indexForDell, 1);
  return Number(nArr.join(''));
}

module.exports = deleteDigit;
