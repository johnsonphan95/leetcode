// In a list of songs, the i-th song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i < j with (time[i] + time[j]) % 60 == 0.

// Example 1:

// Input: [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// Example 2:

// Input: [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.

var numPairsDivisibleBy60 = function(times) {
  const hash = {};
  let result = 0;
  times.forEach(time => {
    // get remainder of time
    const remainder = time % 60;
    // finding the match to the remainder, if remainder is 0
    // should take care of the case where time is 60
    const match = (60 - remainder) % 60;
    // if we find a match, we add the count of times we've seen that match
    result += hash[match] ? hash[match] : 0;
    // increment the count of remainder by 1 or set it to 1 for first time
    hash[remainder] = hash[remainder] ? hash[remainder] + 1 : 1;
  });
  return result;
};
