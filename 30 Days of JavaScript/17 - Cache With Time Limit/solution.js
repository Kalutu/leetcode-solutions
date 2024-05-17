class TimeLimitCache {
  constructor() {
    this.cache = {};
  }

  set(key, value, duration) {
    const existingEntry = this.cache[key];

    if (existingEntry) {
      clearTimeout(existingEntry.timeoutId);
    }

    const timeoutId = setTimeout(() => {
      delete this.cache[key];
    }, duration);

    this.cache[key] = { value, timeoutId };

    return Boolean(existingEntry);
  }

  get(key) {
    const existingEntry = this.cache[key];

    if (existingEntry) {
      return existingEntry.value;
    } else {
      return -1;
    }
  }

  count() {
    return Object.keys(this.cache).length;
  }
}

const cache = new TimeLimitCache();

console.log(cache.set(1, 42, 50)); // Add key-value pair with key=1, value=42, and duration=50ms

setTimeout(() => {
  console.log(cache.set(1, 50, 100)); // Update value of key=1 to 50 with new duration=100ms
}, 40);

setTimeout(() => {
  console.log(cache.get(1)); // Get the value associated with key=1
}, 50);

setTimeout(() => {
  console.log(cache.get(1)); // Get the value associated with key=1 again
}, 120);

setTimeout(() => {
  console.log(cache.get(1)); // Get the value associated with key=1 again
}, 200);

setTimeout(() => {
  console.log(cache.count()); // Count the number of active keys in the cache
}, 250);
