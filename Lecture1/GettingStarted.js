log = console.log;

//Fizz Buzz

var n = 20;
for (var i = 1; i <= n; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else console.log(i);
}

// 1. Function
function myfn(whatToSay) {
  return "Gaurav";
}

var ansFn = myfn("Dhingra");
console.log(ansFn);

// Array

var arr = [
  1.1,
  true,
  null,
  undefined,
  [1, 2, 3, 4, 5, 6],
  function() {
    return "Value Returned";
  }
];

log(arr[4][2]);
log(arr[5]);
