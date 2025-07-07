// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Solution 1
// 將字串拆成陣列，排序後再轉回字串，檢查是否相等
var isAnagram = function (s, t) {
  const arrs = s.split("").sort().join("");
  const arrt = t.split("").sort().join("");
  return arrs === arrt;
};

//Solution 2
// 先檢查字串長度相等
// 將每個字母出現次數存成物件，檢查兩個物件是否相同
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const countS = {};
  const countT = {};
  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  for (const key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }
  return true;
};
