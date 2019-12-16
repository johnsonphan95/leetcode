// Given a string containing digits from 2-9 inclusive, return all possible letter combinations
// that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.

var letterCombinations = function(digits) {
  
    let result = [];
    let phone = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    
    if (!digits) return result;
    
    const backtrack = (combination, nextDigits) => {
        if (!nextDigits){
            result.push(combination);
        } else {
            for (const letter of phone[nextDigits[0]]){
                backtrack(combination + letter, nextDigits.slice(1))
            }
        }
    }
    
    backtrack("", digits);
    return result;
};