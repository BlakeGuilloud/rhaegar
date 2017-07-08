import patterns from './patterns';

export default class Rhaegar {
  constructor({ ...args }) {
    const { pattern } = args;

    this.pattern = patterns[pattern];

    return (...args) => this.init(...args);
  }

  init(value, method) {
    this.method = this[method || 'test'];
    return this.method(value);
  }
  
  test(value) {
    return this.pattern.test(value);
  }

  match(value) {
    return value.match(this.pattern);
  }

  patterns() {
    return patterns;
  }
}
