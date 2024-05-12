function addTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2]).then(
    ([result1, result2]) => result1 + result2
  );
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 50));

const promise2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30));

addTwoPromises(promise1, promise2)
  .then((sum) => console.log(sum))
  .catch((error) => console.log(error));
