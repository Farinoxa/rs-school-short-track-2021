/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arr = [...s1];
  const s2Arr = [...s2];
  let sum = 0;
  for (let i = 0; i < s1Arr.length; i++) {
    if (s2Arr.includes(s1Arr[i])) {
      const index = s2Arr.indexOf(s1Arr[i]);
      s2Arr.splice(index, 1);
      sum += 1;
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
