// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

var generateParenthesis = (n) => {
    const result = []; 

    var dfs = (curr, left, right) => {
        if (left === n && right === n) {
            result.push(curr);
            return;
        }
        if (left < n) {
            dfs(curr + '(', left + 1, right);
        }
        if (left > right && right < n) {
            dfs(curr + ')', left, right + 1);
        }
    }
    dfs("", 0, 0);
    return result;
}