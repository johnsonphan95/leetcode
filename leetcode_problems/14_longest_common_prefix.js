// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = (strs) => {
    if (!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            if (strs[i] !== str[0][i]) {
                return str.slice(0, i);
            }
        }
    }
    return strs[0];
}