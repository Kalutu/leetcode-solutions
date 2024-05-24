const sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

const arr = [
  [3, 4],
  [5, 2],
  [10, 1],
];
const fn = (x) => x[1];

console.log(sortBy(arr, fn));
