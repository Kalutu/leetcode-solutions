function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((results) => {
          resolve(results);
          clearTimeout(timeoutId);
        })
        .catch((error) => {
          reject(error);
          clearTimeout(timeoutId);
        });
    });
  };
}

const fn = async () => {
  throw "Error";
};

const myFunc = timeLimit(fn, 1000);

myFunc()
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
