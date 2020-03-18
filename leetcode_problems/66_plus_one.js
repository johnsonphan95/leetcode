var plusOne = function(digits) {
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--)
  {
      let sum=carry;
      
      if (i == digits.length-1) {
        sum+=(digits[i]+1);
      }
      else {
        sum+=digits[i];
      }
      carry = parseInt(sum/10);
      digits[i] = sum % 10;
  }
  if (carry!=0) {
    digits.unshift(carry);
  }
  return digits;
};