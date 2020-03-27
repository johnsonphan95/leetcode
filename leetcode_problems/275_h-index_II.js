// Given an array of citations sorted in ascending order (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

// According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

// Example:

// Input: citations = [0,1,3,5,6]
// Output: 3 
// Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had 
//              received 0, 1, 3, 5, 6 citations respectively. 
//              Since the researcher has 3 papers with at least 3 citations each and the remaining 
//              two with no more than 3 citations each, her h-index is 3.

// Olog(N) time O(1) space this is binary search problem
var hIndex = function(citations) {
  const n = citations.length; 
  
  let left = 0; 
  let right = n - 1; 
  
  while (left <= right) {
      const mid = Math.floor((left + right) / 2); 
      if (isValid(citations, mid)) {
          left = mid + 1; 
          continue; 
      }
      right = mid - 1;
  }
  return left; 
};

var isValid = function(citations, index) {
  const n = citations.length - 1;
  const h = index + 1;
  const val = citations[n - index];
  
  return val >= h;
}