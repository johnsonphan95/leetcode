// Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which randomly picks an index in proportion to its weight.

// Note:

// 1 <= w.length <= 10000
// 1 <= w[i] <= 10^5
// pickIndex will be called at most 10000 times.
// Example 1:

// Input: 
// ["Solution","pickIndex"]
// [[[1]],[]]
// Output: [null,0]
// Example 2:

// Input: 
// ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
// [[[1,3]],[],[],[],[],[]]
// Output: [null,0,1,1,1,0]

var Solution = function(w) {
  this.probs = []; 
  this.sum = 0; 
  for (let i = 0; i < w.length; i++) {
      this.sum += w[i]; 
      this.probs[i] = this.sum;
  }
};

Solution.prototype.pickIndex = function() {
  let index = Math.floor(Math.random() * this.sum);
  let l = 0; 
  let r = this.probs.length - 1;
  
  while (l < r) {
      const mid = Math.floor((l + r) / 2);
      
      if (this.probs[mid] > index) {
          r = mid;
      } else {
          l = mid + 1;
      }
  }
  
  return l;
};