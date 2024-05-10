const once = function (fn) {
  let called = false;
  return function (...args) {
    if (called) {
      return undefined;
    }
    called = true;
    return fn(...args);
  };
};

// let fn = (a, b, c) => a + b + c;

let fn = (a, b, c) => a * b * c;

let onceFn = once(fn);

console.log(onceFn(5, 7, 4)); //140
console.log(onceFn(2, 3, 6)); //undefined
console.log(onceFn(4, 6, 8)); //undefined
