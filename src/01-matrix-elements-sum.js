/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const subArrLength = matrix[0].length;
  for (let i = 0; i < subArrLength; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (j > 0) {
        if (matrix[j - 1][i] !== 0) {
          sum += matrix[j][i];
        }
      } else {
        sum += matrix[j][i];
      }
    }
  }
  return sum;
}
module.exports = getMatrixElementsSum;
