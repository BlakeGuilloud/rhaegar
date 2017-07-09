# rhaegar
[![Build Status](https://travis-ci.org/BlakeGuilloud/rhaegar.svg?branch=master)](https://travis-ci.org/BlakeGuilloud/rhaegar) [![NPM version](https://img.shields.io/npm/v/rhaegar.svg)](https://www.npmjs.com/package/rhaegar)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](#badge)


#### A lightweight, zero dependency javascript library for dealing with regular expressions.


### Installation:
```
$ yarn add rhaegar
```
```
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

const matchEmail = new Rhaegar({ pattern: 'email', method: 'match' });

const matched = matchEmail('faceless_woman@bravos.si');
// matched => [ 'faceless_woman@bravos.s', index: 0, input: 'faceless_woman@bravos.si' ]
// matched[0] => 'faceless_woman@bravos.s';
// matched.index => 0
// matched.input => 'faceless_woman@bravos.si';

const testDateTime = new Rhaegar({ pattern: 'dateTime' });

testDateTime('30-11-2003 8:45');
// => true

testDateTime('11-2003 8:45');
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
