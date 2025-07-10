// Given an integer array nums and an integer k,
// return the k most frequent elements. You may return the answer in any order.
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2,  Output: [1,2]

// Solution
// 把「相同頻率」的數字放在一起
// 然後從「頻率最高的開始往下撈」，直到撈出 K 個

var topKFrequent = function (nums, k) {
  // 將每個數字出現的次數存成 Map
  const count = new Map();
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }
  // 陣列 index 表示出現頻率 0 ~ nums.length，在該 index 開一個空陣列，存放相同頻率的數字
  const arr = new Array(nums.length + 1).fill(null).map(() => []);
  for (const [num, freq] of count.entries()) {
    arr[freq].push(num);
  }
  const res = [];
  // 從陣列最後面往前撈，直到撈出 K 個
  for (let i = nums.length; res.length < k; i--) {
    for (const n of arr[i]) {
      res.push(n);
      if (res.length === k) break;
    }
  }
  return res;
};
