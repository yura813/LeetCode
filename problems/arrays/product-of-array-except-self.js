// Given an integer array nums, return an array answer such that answer[i] is equal to the product
// of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Solution
// 每個數字的答案是 (它前面的數字乘積)* (它後面的數字乘積)
var productExceptSelf = function (nums) {
  const res = new Array(nums.length).fill(1);
  // 先把每個數字的 前面數字乘積存到 res
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }
  // res = [1, 1, 2, 6]

  let suffix = 1;
  // 再把每個數字的 後面數字乘積 一個個乘進res
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
};
