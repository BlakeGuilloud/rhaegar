## rhaegar [![Build Status](https://travis-ci.org/BlakeGuilloud/rhaegar.svg?branch=master)](https://travis-ci.org/BlakeGuilloud/rhaegar)


#### A lightweight, zero dependency javascript library for dealing with regular expressions.


### Installation:
```
$ yarn add rhaegar

or

$ npm install rhaegar --save
```

### Usage:
```javascript
import Rhaegar from 'rhaegar';

const testEmail = new Rhaeger({ pattern: 'email', method: 'test' });

testEmail('ned@winterfell.com');
// => true

testEmail('greyworm@yahoo');
// => false
```

### Supported Patterns:
- email
- dateTime
- notBinary
- alphaNumeric
- alpha
- numeric

### Supported Methods:
- test (default)
- match