// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

var isValid = function(s) {
    const parens = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    const stack = [];
    
    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        }
        else if (parens[char]) {
            if (stack.length === 0) return false;
            if (stack[stack.length - 1] === parens[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};