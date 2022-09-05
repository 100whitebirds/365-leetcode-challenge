// https://leetcode.com/problems/two-sum/
// NEED TO RECALL

const twoSum = (array, target) => {
  const hashtable = {};

  for (let i = 0; i < array.length; i++) {
    hashtable[array[i]] = i;
  }

  for (let j = 0; j < array.length; j++) {
    const complement = target - array[j];

    if (hashtable.hasOwnProperty(complement) && hashtable[complement] !== j) {
      return [hashtable[complement] + 1, j + 1];
    }
  }

  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
