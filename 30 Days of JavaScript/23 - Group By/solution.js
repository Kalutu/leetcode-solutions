Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, item) => {
    const key = fn(item);

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);

    return acc;
  }, {});
};

const array = [{ id: "1" }, { id: "1" }, { id: "2" }];
const fn = function (item) {
  return item.id;
};
console.log(array.groupBy(fn));
