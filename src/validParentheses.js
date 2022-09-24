const isValid = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const item = s[i];

    if (item === '(') {
      stack.push(')');
    } else if (item === '{') {
      stack.push('}');
    } else if (item === '[') {
      stack.push(']');
    } else if (item !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('()[]{}'));
