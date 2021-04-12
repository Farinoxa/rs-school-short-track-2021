/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let end = array.length - 1;
  let result = -1;
  while (first <= end && result === -1) {
    const middle = Math.floor((first + end) / 2);
    if (array[middle] === value) {
      result = middle;
    }
    if (array[middle] > value) {
      end = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return result;
}

module.exports = findIndex;
