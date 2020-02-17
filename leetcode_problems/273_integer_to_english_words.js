const belowTen = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const belowTwenty = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const belowHundred = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

var numberToWords = function(num) {
    if(num === 0) return 'Zero'
    return helper(num);
};

const helper = (num) => {
    let result = '';
  
    if(num < 10) result = belowTen[num];
    else if(num < 20) result = belowTwenty[num-10];
    else if(num < 100) result = belowHundred[Math.floor(num/10)] + ' ' + helper(num%10);
    else if(num < 1000) result = belowTen[Math.floor(num/100)] + ' Hundred ' + helper(num % 100);
    else if(num < 10000) result = belowTen[Math.floor(num/1000)] + ' Thousand ' + helper(num % 1000);
    else if(num < 1000000) result = helper(Math.floor(num/1000)) + ' Thousand ' + helper(num%1000);
    else if(num < 1000000000) result = helper(Math.floor(num/1000000)) + ' Million ' + helper(num%1000000);
    else if(num < 1000000000000) result = helper(Math.floor(num/1000000000)) + ' Billion ' + helper(num%1000000000);

    return result.trim();
}