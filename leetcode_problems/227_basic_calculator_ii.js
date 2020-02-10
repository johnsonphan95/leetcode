// Implement a basic calculator to evaluate a simple expression string.

// The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

// Example 1:

// Input: "3+2*2"
// Output: 7
// Example 2:

// Input: " 3/2 "
// Output: 1
// Example 3:

// Input: " 3+5 / 2 "
// Output: 5

var calculate = function(s) {
  if (s.length === 0) return 0;

  let stack = [];
  let op = "+";

  for (let i = 0, n = 0; i <= s.length; i++) {
    let c = s.charAt(i);

    if (c === " ") continue;

    if (c >= "0" && c <= "9") {
      n = n * 10 + parseInt(c);
      continue;
    }

    if (op === "+") {
      stack.push(n);
    } else if (op === "-") {
      stack.push(-n);
    } else if (op === "*") {
      stack.push(stack.pop() * n);
    } else if (op === "/") {
      stack.push(Math.trunc(stack.pop() / n));
    }

    op = c;
    n = 0;
  }

  return stack.reduce((ele, acc) => (acc += ele));
};
