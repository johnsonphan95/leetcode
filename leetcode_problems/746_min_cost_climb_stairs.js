// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

var minCostClimbingStairs = function(cost) {
  if (cost.length < 1) return 0;
  if (cost.length === 1) return cost[0];

  let prev = [];
  for (let i = 0; i < cost.length; i++) {
    let two = prev[i - 2] || 0;
    let one = prev[i - 1] || 0;
    prev[i] = cost[i] + Math.min(one, two);
  }

  return Math.min(prev[prev.length - 1], prev[prev.length - 2]);
};
