let callCount = 0;

const memoize = function (fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    let result = fn(...args);
    callCount++;
    cache[key] = result;
    return result;
  };
};

function sum(a, b) {
  return a + b;
}

function fib(n) {
  if (n <= 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

//011235813

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

//5*4*3*2*1

const example1 = memoize(sum);
const example2 = memoize(factorial);
const example3 = memoize(fib);

console.log(example3(5)); //8
console.log(callCount); //1
console.log(example3(5));
console.log(callCount); //1
