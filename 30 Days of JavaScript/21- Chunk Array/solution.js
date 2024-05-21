//Subarry Solution

/*const chuck = function (arr, size) {
  const result = [];
  let subarr = [];

  for (let i = 0; i < arr.length; i++) {
    subarr.push(arr[i]);
    if (subarr.length == size) {
      result.push(subarr);
      subarr = [];
    }
  }
  if (subarr.length) {
    result.push(subarr);
  }
  return result
};*/

// Slice Solution

const chuck = function (arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const arr = [2, 7, 8, 5, 9];
const size = 2;

console.log(chuck(arr, size)); //[[2,7],[8,5],[9]]
