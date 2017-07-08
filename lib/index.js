import patterns from './patterns';

export default class Rhaegar {
  constructor({ ...args }) {
    const { pattern, method = 'test' } = args;

    this.pattern = patterns[pattern];
    this.method = this[method];

    if (!this.pattern) Promise.reject('Rhaegar - Invalid `pattern` argument provided.');
    if (!this.method) Promise.reject('Rhaegar - Invlaid `method` argument provided.');

    return (value) => this.init(value);
  }

  init(value) {
    return this.method(value);
  }
  
  test(value) {
    return this.pattern.test(value);
  }

  match(value) {
    return value.match(this.pattern);
  }
}
