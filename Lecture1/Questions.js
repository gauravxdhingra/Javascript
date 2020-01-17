// Q1
var arr = [1, 2, 3, 4, 5];
var n = arr.length;
var arr1 = [];
for (var i = 0; i < n; i++) {
  var ele = arr.pop();
  arr1.push(ele);
}
console.log(arr1);

// Q2
var arra = [1, 2, 3];
var arrb = [1, 2, 3, 100, 10];

var m = arra.length <= arrb.length ? arrb.length : arra.length;

for (var i = 0; i < m; i++) {
  if (arrb.length <= arra.length)
    if (arra.includes(arrb[i]) == false) {
      arra.push(arrb[i]);
    } else {
      if (arrb.includes(arra[i]) == false) {
        arra.push(arra[i]);
      }
    }
}

arra.length >= arrb.length ? console.log(arra) : console.log(arrb);
