var scanf = require("scanf");
var i,
  r,
  arr = [null, null],
  p = 0,
  temp;
console.log("Enter numbers seperated by space then to continue enter '/");
for (i = 0; i < 1000; i++) {
  temp = scanf("%d");
  if (temp != "/") {
    arr[i] = temp;
  } else break;
}
r = arr.length;
function merge_sort(a, p, r) {
  if (p < r) {
    var q = (p + r) / 2;
    merge_sort(a, p, q);
    merge_sort(a, q + 1, r);
    merge(a, p, q, r);
  }
}
function merge(a, p, q, r) {
  var n1 = q - p + 1;
  var n2 = r - q;
  var l = [0, 1],
    r = [0, 1];
  for (i = 1; i <= n1; i++) l = a[p + i - 1];
  for (j = i; j < n2; j++) r = a[q + j];

  l[n1 + 1] = 999999;
  r[n2 + 1] = 999999;
  i = j = 1;
  for (k = p; k <= r; k++) {
    if (l[i] <= r[j]) {
      a[k] = l[i];
      i++;
    } else {
      a[k] = r[j];
      j++;
    }
  }
}
function display(input) {
  console.log("The output of the array is");
  console.log(input.join(" "));
}
merge_sort(arr, p, r);
display(a);
