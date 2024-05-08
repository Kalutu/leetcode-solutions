const reduce = function (nums, fn, init) {
  if (nums.length === 0) return init;
  let accumulator = init;
  for (let i = 0; i < nums.length; i++) {
    accumulator = fn(accumulator, nums[i]);
  }
  return accumulator;
};
