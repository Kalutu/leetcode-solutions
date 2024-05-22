Array.prototype.last = function () {
  if (this.length) {
    return this[this.length - 1];
  } else {
    return -1;
  }
};

const nums = [];

console.log(nums.last());
