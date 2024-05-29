class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((acc, item) => acc + item, 0);
  }

  toString() {
    return `[${this.nums.join(",")}]`;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
// const obj2 = new ArrayWrapper([3, 4]);

// const res = obj1 + obj2;

// console.log(res);

console.log(String(obj1));
