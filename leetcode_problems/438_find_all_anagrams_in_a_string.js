// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

//   const map = new Map();
  
//   for (let i = 0; i < p.length; i++){
//       if (map.has(p.charAt(i))){
//           map.set(p.charAt(i), map.get(p.charAt(i)) + 1);
//       } else {
//           map.set(p.charAt(i), 1)
//       }
//   }
  
//   let end = 0, begin = 0, ans = []; wordLength = p.length, counter = map.size;
  
//   while(end < s.length){
//       const endChar = s.charAt(end);
//       if (map.has(endChar)){
//           map.set(endChar, map.get(endChar) - 1);
//           if (map.get(endChar) === 0) counter--;
//       }
      
//       end++;
      
//       while(counter === 0){
//           if (end - begin === wordLength){
//               ans.push(begin)
//           }
          
//           const startChar = s.charAt(begin);
          
//           if (map.has(startChar)){
//               map.set(startChar, map.get(startChar) + 1);
//               if (map.get(startChar) > 0) counter++;
//           }
          
//           begin++;
          
//       }
      
//   }
  
//   return ans;
 
// };