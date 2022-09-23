const longestInTwo = (a, b) => {
  let long;
  let short;

  if (a.length > b.length) {
    long = a;
    short = b;
  } else {
    long = b;
    short = a;
  }

  while (long.indexOf(short) === -1) {
    short = short.slice(0, -1);
  }
  return short;
};

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';

  return strs.reduce((result, s) => longestInTwo(result, s));
};

console.log(longestCommonPrefix(['flow', 'flight', 'flight', 'flop']));
