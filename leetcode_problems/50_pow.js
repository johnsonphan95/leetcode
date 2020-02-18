// var myPow = function(x, n) {
//   if (n === 0) return 1;

//   let pow = Math.abs(n);

//   let result =
//     pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;

//   return n < 0 ? 1 / result : result;
// };

var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (x === 0) return 0;
  
  if (n > 0) {
      if (n % 2 === 0) {
          return myPow(x * x, n/2)
      } else {
          return x * myPow(x, n - 1);
      }
  } else {
      return myPow(1/x, -n)
  }
};