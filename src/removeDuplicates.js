const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums;
};

console.log(removeDuplicates([1, 1, 2]));
