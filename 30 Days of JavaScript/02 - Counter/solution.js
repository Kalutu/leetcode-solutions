const createCounter = function (n) {
  let count = n;
  return function () {
    return count++;
  };
};

let counter = createCounter(10);

console.log(counter()); //10
console.log(counter()); //11
console.log(counter()); //12

class Counter {
  constructor(n) {
    this.n = n;
  }

  increment() {
    return this.n++;
  }
}

const counter1 = new Counter(10);

console.log(counter1.increment()); //10
console.log(counter1.increment()); //11
console.log(counter1.increment()); //12
