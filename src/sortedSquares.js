// https://leetcode.com/problems/squares-of-a-sorted-array/?envType=study-plan&id=algorithm-i

const sortedSquares = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  const res = [];
  let pos = end;

  while (start <= end) {
    if (nums[start] ** 2 > nums[end] ** 2) {
      res[pos--] = nums[start++] ** 2;
    } else {
      res[pos--] = nums[end--] ** 2;
    }
  }

  return res;
};
