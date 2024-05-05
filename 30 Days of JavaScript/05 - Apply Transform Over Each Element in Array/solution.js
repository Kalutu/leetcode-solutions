const arr = [1, 2, 3];
function plusone(n) {
  return n + 1;
}
function plusI(n, i) {
  return n + i;
}
function constant() {
  return 42;
}

const map = function (arr, fn) {
  const result = [];
  for (let i in arr) {
    result.push(fn(arr[i], Number(i)));
  }
  return result;
};

console.log(map(arr, plusone));
console.log(map(arr, plusI));
console.log(map(arr, constant));
