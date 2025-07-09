// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Solution 1
// 跑兩層迴圈把每種可能都加一遍
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

// Solution 2
// 兩個數字應該是num, target-num，把跑過的數字記起來
// {target-nums[i]: i} 存成 key-value，跑 for 迴圈檢查 num 有沒有存在物件過
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    // 檢查這個數字有沒有存過
    // 如果上一輪存的數字 index 是 0，obj[nums[i]] 會是 0，直接用if會是 false，所以要用 !== undefined
    if (obj[nums[i]] !== undefined) {
      return [obj[nums[i]], i];
    } else {
      obj[target - nums[i]] = i;
    }
  }
};
