import patterns from './patterns';

export default class Rhaegar {
  constructor({ ...args }) {
    const { pattern } = args;

    this.pattern = patterns[pattern];

    return (value, method) => this.init(value, method);
  }

  init(value, method = 'test') {
    this.method = this[method];

    return this.method(value);
  }
  
  test(value) {
    return this.pattern.test(value);
  }

  match(value) {
    return value.match(this.pattern);
  }
}
