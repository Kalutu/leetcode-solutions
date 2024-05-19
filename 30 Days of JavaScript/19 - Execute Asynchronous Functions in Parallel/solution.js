function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    functions.map((fn, index) => {
      fn()
        .then((value) => {
          result[index] = value;
          count++;
          if (count === functions.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

const functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
  Thumb,
];

promiseAll(functions)
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
