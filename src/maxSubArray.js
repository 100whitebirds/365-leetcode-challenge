// https://leetcode.com/problems/maximum-subarray/

// with fixed size
const maxSubArrayFixed = (nums, size) => {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (i >= size - 1) {
      maxSum = maxSum >= currentSum ? maxSum : currentSum;
      currentSum -= nums[i - (size - 1)];
    }
  }

  return maxSum;
};

// with no fixed size
const maxSubArray = (nums) => {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(nums[i], nums[i] + sum);
    max = sum > max ? sum : max;
  }

  return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArrayFixed(nums, 3));
console.log(maxSubArray(nums));
