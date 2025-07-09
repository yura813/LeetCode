// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Solution
// 把每個字用 UTF-16 轉成長度為 26 的陣列來表示字母分配，再轉回字串作為 key，value 開一個空陣列把字存進去
// 有相同的 key 表示為 anagram，存進同一個 key-value 陣列
var groupAnagrams = function (strs) {
  const res = {};
  for (const s of strs) {
    // 初始化字母分配的陣列，先全部填入 0
    const count = new Array(26).fill(0);
    for (const c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    // 轉成像這樣的字串 "1,0,0,0,1,...,0"
    const key = count.join(",");
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(s);
  }
  return Object.values(res);
};
