const isSubsequence = (s, t) => {
  const a = s.split("");
  let b = 0;

  for (let i = 0; i < t.length; i++) {
    if (a[b] === t[i]) {
      b++;
    }
  }
  return b === s.length;
};

const s = "b";
const t = "c";

console.log(isSubsequence(s, t));
