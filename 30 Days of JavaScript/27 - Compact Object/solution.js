const compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj
      .filter((item) => Boolean(item))
      .map((item) => {
        if (typeof item === "object") {
          return compactObject(item);
        }
        return item;
      });
  }
  for (const [key, val] of Object.entries(obj)) {
    if (!val) {
      delete obj[key];
      continue;
    }
    if (typeof val === "object") {
      obj[key] = compactObject(val);
    }
  }
  return obj;
};

const obj = [null, 0, 5, [0], [false, 16]];

console.log(compactObject(obj));
