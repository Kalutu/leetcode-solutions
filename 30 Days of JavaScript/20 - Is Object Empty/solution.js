const isEmpty = function (obj) {
  return JSON.stringify(obj).length == 2 ? true : false;
};

const obj = [];

console.log(isEmpty(obj));
