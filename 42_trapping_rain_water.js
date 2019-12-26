// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it is able to trap after raining.

const trap = heights => {
  let maxes = new Array(heights.length).fill(0);
  let leftMax = 0;
  for (let i = 0; i < heights.length; i++) {
    let height = heights[i];
    maxes[i] = leftMax;
    leftMax = Math.max(leftMax, height);
  }
  let rightMax = 0;
  for (let i = heights.length - 1; i > 0; i--) {
    let height = heights[i];
    let minHeight = Math.min(maxes[i], rightMax);
    if (height < minHeight) {
      maxes[i] = minHeight - height;
    } else {
      maxes[i] = 0;
    }
    rightMax = Math.max(height, rightMax);
  }
  return maxes.reduce((a, b) => a + b, 0);
};
