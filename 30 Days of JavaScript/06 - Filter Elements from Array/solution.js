const arr1 = [0, 10, 20, 30];
const arr2 = [1, 2, 3];
const arr3 = [-2, -1, 0, 1, 2];

function greaterThan10(n) {
  return n > 10;
}
function firstIndex(n, i) {
  return i === 0;
}
function plusOne(n) {
  return n + 1;
}

const filter = function (arr, fn) {
  const filteredArr = [];
  for (let i in arr) {
    if (fn(arr[i], Number(i))) filteredArr.push(arr[i]);
  }

  return filteredArr;
};

console.log(filter(arr1, greaterThan10));
console.log(filter(arr2, firstIndex));
console.log(filter(arr3, plusOne));
