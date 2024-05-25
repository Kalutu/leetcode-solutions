const join = function (arr1, arr2) {
  const combinedArr = [...arr1, ...arr2];

  const merged = combinedArr.reduce((acc, obj) => {
    const id = obj.id;

    if (!acc[id]) {
      acc[id] = { ...obj };
    } else {
      acc[id] = { ...acc[id], ...obj };
    }
    return acc;
  }, {});

  const joinedArr = Object.values(merged);

  joinedArr.sort((a, b) => a.id - b.id);

  return joinedArr;
};

const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

console.log(join(arr1, arr2));
