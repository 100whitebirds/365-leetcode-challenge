// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (s) => {
  let begin = 0;
  let maxLen = 0;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined && map[s[i]] >= begin) {
      begin = i;
    }
    map[s[i]] = i;
    maxLen = Math.max(maxLen, i - begin + 1);
  }
  return maxLen;
};

const s = "abcabcbb";

console.log(lengthOfLongestSubstring(s));
