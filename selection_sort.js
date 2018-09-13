var scanf = require("scanf");
var i,
  arr = [null, null],
  temp;
console.log("Enter numbers seperated by space then to continue enter '/");
for (i = 0; i < 1000; i++) {
  temp = scanf("%d");
  if (temp != "/") {
    arr[i] = temp;
  } else break;
}
function sort(a) {
  var i = 0,
    j = 0,
    key;
  for (j = 1; j < a.length; j++) {
    key = a[j];
    //i = j - 1;
    for (i = j - 1; i >= 0; i--) {
      if (a[i] > key) {
        a[i + 1] = a[i];
      } else break;
    }
    a[i + 1] = key;
  }
  display(a);
}
function display(input) {
  console.log("The output of the array is");
  console.log(input.join(" "));
}
sort(arr);
