// There are a total of n courses you have to take, labeled from 0 to n-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// Example 1:

// Input: 2, [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
//              To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: 2, [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.

var canFinish = function(numCourses, prerequisites) {
  const seen = new Set();
  const visiting = new Set();
  const arr = [...new Array(numCourses)].map(() => []);

  for (let [u, v] of prerequisites) {
    arr[v].push(u);
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;

  function dfs(course) {
    if (seen.has(course)) return true;
    if (visiting.has(course)) return false;
    visiting.add(course);

    for (let prereq of arr[course]) {
      if (!dfs(prereq)) return false;
    }

    visiting.delete(course);
    seen.add(course);
    return true;
  }
};
