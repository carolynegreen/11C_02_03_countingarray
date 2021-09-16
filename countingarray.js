"use strict";

const array = [];
let counting = 0;
countArray();

function countArray() {
  counting++;
  array.unshift(counting);
  console.log(array.slice(0, 9));
  setTimeout(countArray, 600);
}
