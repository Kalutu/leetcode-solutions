const debounce = function (fn, t) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const fn = (n) => console.log(n);

const myFunc = debounce(fn, 50);

setTimeout(() => {
  myFunc(1);
}, 50);

setTimeout(() => {
  myFunc(2);
}, 75);
