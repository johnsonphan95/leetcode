// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

var permute = function(nums) {
  let permutations = []; 
  permutationHelper(0, nums, permutations);
  return permutations;
};

var permutationHelper = (i, array, permutations) => {
  if (i === array.length - 1) {
      permutations.push(array.slice());
  } else {
      for (let j = i; j < array.length; j++) {
          swap(array, i, j);
          permutationHelper(i + 1, array, permutations);
          swap(array, i, j);
      }
  }
}

var swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
}