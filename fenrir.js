const isValid = (s) => {
  // ここにコードを書いてください
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const check = s[i];
    switch (check) {
      case "(":
        stack.push(check);
        break;
      case "{":
        stack.push(check);
        break;
      case "[":
        stack.push(check);
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
    }
  }

  // stackに値が残っている場合はfalse
  // 例 "(" false
  if (!stack.length) {
    return true;
  } else {
    return false;
  }
};

let s = "()";
console.log(isValid(s)); // true

s = "({)}";
console.log(isValid(s)); // false
