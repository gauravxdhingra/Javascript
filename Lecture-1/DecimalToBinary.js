var n = 13;
var ans = 0;
var multiplier = 1;

function dectobin(n) {
  while (n != 0) {
    var rem = n % 2;

    ans = ans + rem * multiplier;

    multiplier *= 10;
    n = Math.floor(n / 2);
  }
  return ans;
}

console.log(dectobin(n));
