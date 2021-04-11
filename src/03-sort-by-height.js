/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
const sortedStock = [];
const resultStock = [];

function sortByHeight(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      sortedStock.push(arr[i]);
    }
  }
  sortedStock.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      resultStock.push(arr[i]);
    } else {
      resultStock.push(sortedStock[0]);
      sortedStock.shift();
    }
  }
  return resultStock;
}

module.exports = sortByHeight;
