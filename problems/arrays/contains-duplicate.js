// 題目： 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// 把 nums 存成 Set,比較 nums 跟 set 長度，如果 nums 長度大於 set，表示有重複，return true
var containsDuplicate = function (nums) {
  return new Set(nums).size < nums.length;
};
