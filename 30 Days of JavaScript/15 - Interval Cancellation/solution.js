function cancellable(fn, args, t) {
  console.log(fn(...args));
  const intervalId = setInterval(() => {
    console.log(fn(...args));
  }, t);
  return function cancelFn() {
    clearInterval(intervalId);
  };
}

const fn = (x) => x * 2;

const cancelFn = cancellable(fn, [4], 3500);

setTimeout(cancelFn, 19000);
