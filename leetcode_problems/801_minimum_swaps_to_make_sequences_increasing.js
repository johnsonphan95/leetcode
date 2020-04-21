// We have two integer sequences A and B of the same non-zero length.

// We are allowed to swap elements A[i] and B[i].  Note that both elements are in the same index position in their respective sequences.

// At the end of some number of swaps, A and B are both strictly increasing.  (A sequence is strictly increasing if and only if A[0] < A[1] < A[2] < ... < A[A.length - 1].)

// Given A and B, return the minimum number of swaps to make both sequences strictly increasing.  It is guaranteed that the given input always makes it possible.

// Example:
// Input: A = [1,3,5,4], B = [1,2,3,7]
// Output: 1
// Explanation: 
// Swap A[3] and B[3].  Then the sequences are:
// A = [1, 3, 5, 7] and B = [1, 2, 3, 4]
// which are both strictly increasing.

var minSwap = function(A, B) {
  let swap = 1;
  let unswap = 0;
  
  for(let i = A.length - 2; i >= 0; i--) {
      let temp = swap;
      // Case 1 a[i] < a[i + 1] && a[i] < b[i + 1]
      // && b[i] < b[i + 1] && b[i] < a[i + 1]
      // i.e. strictly increasing
      if (A[i] < A[i+1] && A[i] < B[i+1] && B[i] < A[i+1] && B[i] < B[i+1]) {            
          swap = 1 + Math.min(swap,unswap);
          unswap = 0 + Math.min(temp,unswap);
          continue;
      }
      // Case 2 a >= a[i + 1] || b > b[i + 1]
      if(A[i] >= A[i+1] || B[i] >= B[i+1]) {
          swap = 1 + unswap;
          unswap = 0 + temp;
          continue;
      }
      // Case 3 a >= b[i + 1] || b >= a[i + 1]
      // either a or b violates other's sequence
      if (A[i] >= B[i+1] || B[i] >= A[i+1]) {
          swap = 1 + swap;
          unswap = 0 + unswap;
          continue;
      }
      
  }
  return Math.min(swap,unswap);
};