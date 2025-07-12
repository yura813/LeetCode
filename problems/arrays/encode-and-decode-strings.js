// Design an algorithm to encode a list of strings to a single string.
// The encoded string is then decoded back to the original list of strings.

// 解題邏輯看 /daily/2025-07-12.md
class Solution {
  encode(strs) {
    const res = "";
    for (const str of strs) {
      res += str.length + "#" + str;
    }
    return res;
  }

  decode(str) {
    const res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      res.push(str.substring(i, j));
      i = j;
    }
    return res;
  }
}
