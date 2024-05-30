class Calculator {
  constructor(num) {
    this.result = num;
  }

  add(value) {
    this.result += value;
    return this;
  }
  subtract(value) {
    this.result = this.result - value;
    return this;
  }
  multiply(value) {
    this.result = this.result * value;
    return this;
  }
  divide(value) {
    if (value === 0) throw "Division by zero is not allowed";
    this.result = this.result / value;
    return this;
  }
  power(value) {
    this.result = this.result ** value;
    return this;
  }
  getResult() {
    return this.result;
  }
}

console.log(new Calculator(20).divide(0).getResult());
