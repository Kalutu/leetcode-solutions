class EventEmitter {
  constructor() {
    this.events = {};
  }
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);

    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (cb) => cb !== callback
        );
      },
    };
  }

  emit(eventName, args = []) {
    if (!this.events[eventName]) {
      return [];
    }
    return this.events[eventName].map((callback) => callback(...args));
  }
}
const emitter = new EventEmitter();

const sub = emitter.subscribe("firstEvent", (...args) => args.join(","));

console.log(emitter.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]

sub.unsubscribe(); // undefined

console.log(emitter.emit("firstEvent", [4, 5, 6])); // [], there are no subscriptions
