class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.value = value;
    this.error = false;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    if (!this.error) this.value = this.value + value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    if (!this.error) this.value = this.value - value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    if (!this.error) this.value = this.value * value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (!this.error) {
      if (value === 0) {
        this.value = 'Division by zero is not allowed';
        this.error = true;
        return this;
      }
      this.value = this.value / value;
    }
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    if (!this.error) this.value = this.value ** value;
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    if (this.error) {
      return 'Division by zero is not allowed';
    }
    return this.value;
  }
}

export { Calculator };
