const compose = function (arr) {
  return function (x) {
    return arr.reduceRight((acc, f) => f(acc), x);
  };
};

const example1 = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
const example2 = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
const example3 = compose([]);

console.log(example1(4)); //65
console.log(example2(1)); //1000
console.log(example3(42)); //42
