const createCounter = function (init) {
  let val = init;
  const increment = () => ++val;

  const decrement = () => --val;

  const reset = () => (val = init);

  return {
    increment,
    decrement,
    reset,
  };
};

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
