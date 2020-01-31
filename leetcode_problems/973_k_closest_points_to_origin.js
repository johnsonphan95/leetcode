// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

// (Here, the distance between two points on a plane is the Euclidean distance.)

// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

// Example 1:

// Input: points = [[1,3],[-2,2]], K = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], K = 2
// Output: [[3,3],[-2,4]]
// (The answer [[-2,4],[3,3]] would also be accepted.)

var kClosest = function(array, K) {
  let sorted = [];
  for (let i = array.length - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }

  let l = array.length - 1;
  for (let n = l; n >= l - K + 1; n--) {
    swap(array, n, 0);
    sorted.push(array.pop());
    heapify(array, n, 0);
  }

  return sorted;
};

function heapify(array, n, i) {
  if (array.length === 0) return;
  let leftIdx = 2 * i + 1;
  let rightIdx = 2 * i + 2;

  let leftVal = euclid(array[leftIdx]);
  let rightVal = euclid(array[rightIdx]);
  let currVal = euclid(array[i]);

  if (currVal < leftVal && currVal < rightVal) return;

  let swapIdx;
  if (leftVal > rightVal) {
    swapIdx = rightIdx;
  } else {
    swapIdx = leftIdx;
  }
  swap(array, i, swapIdx);
  heapify(array, n, swapIdx);
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

function euclid(point) {
  if (!point) return Infinity;
  return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
}
