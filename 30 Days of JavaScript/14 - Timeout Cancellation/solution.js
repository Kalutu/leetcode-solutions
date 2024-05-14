function cancellable(fn, args, t) {
  const timeoutId = setTimeout(() => {
    console.log(fn(...args));
  }, t);
  return function cancelFn() {
    clearTimeout(timeoutId);
  };
}

const fn = (x1, x2) => x1 * x2;

const cancelFn = cancellable(fn, [2, 4], 30);

setTimeout(cancelFn, 100);
