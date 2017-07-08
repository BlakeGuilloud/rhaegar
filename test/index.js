import assert from 'assert';
import Rhaegar from '../dist/rhaegar.min.js';

describe('Email', () => {
  const email = new Rhaegar({ pattern: 'email' });

  it('Should return true on a valid email address', (done) => {
    assert.equal(email('ned@winterfell.com'), true);
    assert.equal(email('faceless_brunette@gmail.com'), true);
    assert.equal(email('a@b.c'), true);
    assert.equal(email('jorah@mormont tyrion@kingslanding.com'), true)
    done();
  });

  it('Should return false on an invalid email address', (done) => {
    assert.equal(email(''), false);
    assert.equal(email(' '), false);
    assert.equal(email('drogon'), false);
    assert.equal(email('greyworm@yahoo'), false);
    assert.equal(email('shireen.com'), false);
    assert.equal(email('@reed.com'), false);
    done();
  });
});

describe('DateTime', () => {
  const dateTime = new Rhaegar({ pattern: 'dateTime' });

  it('Should return true on a valid date time format', (done) => {
    assert.equal(dateTime('30-11-2003 8:45'), true);
    assert.equal(dateTime('5-12-2003 8:45'), true);
    done();
  });

  it('Should return false on an invalid date time fromat', (done) => {
    assert.equal(dateTime(''), false);
    assert.equal(dateTime('11-2003 8:45'), false);
    assert.equal(dateTime('5-12-2003 8'), false);
    done();
  });
});

describe('NotBinary', () => {
  const notBinary = new Rhaegar({ pattern: 'notBinary' });

  it('Should return false on a valid binary sequence', (done) => {
    assert.equal(notBinary('111111'), false);
    assert.equal(notBinary('00000'), false);
    assert.equal(notBinary('10101010'), false);
    assert.equal(notBinary('00000001'), false);
    assert.equal(notBinary(''), false);
    done();
  });

  it('Should return true on an invalid binary sequence', (done) => {
    assert.equal(notBinary('120010'), true);
    assert.equal(notBinary('3'), true);
    done();
  });
});

describe('AlphaNumeric', () => {
  const alphaNumeric = new Rhaegar({ pattern: 'alphaNumeric' });

  it('Should return true on a string of only alphanumeric values', (done) => {
    assert.equal(alphaNumeric('Sam2'), true);
    assert.equal(alphaNumeric('44'), true);
    assert.equal(alphaNumeric('NightKing'), true);
    done();
  });

  it('Should return false if the string contains any non-alphanumeric values', (done) => {
    assert.equal(alphaNumeric(''), false);
    assert.equal(alphaNumeric('What is dead may never die'), false);
    assert.equal(alphaNumeric(' '), false);
    assert.equal(alphaNumeric('Do you deny me?'), false);
    done();
  });
});

describe('Alpha', () => {
  const alpha = new Rhaegar({ pattern: 'alpha' });

  it('Should return true on a string of only letters', (done) => {
    assert.equal(alpha('Coldhands'), true);
    assert.equal(alpha('RobertBaratheon'), true);
    assert.equal(alpha('R'), true);
    done();
  });

  it('Should return false if the string contains any non-letters', (done) => {
    assert.equal(alpha('Jacquen4Face'), false);
    assert.equal(alpha(''), false);
    assert.equal(alpha('Dark wings dark words'), false);
    assert.equal(alpha(' '), false);
    assert.equal(alpha('3'), false);
    done();
  });
});

describe('Numeric', () => {
  const numeric = new Rhaegar({ pattern: 'numeric' });

  it('Should return true on a string of only numeric values', (done) => {
    assert.equal(numeric('123'), true);
    assert.equal(numeric('4'), true);
    assert.equal(numeric('0'), true);
    done();
  });

  it('Should return false if the string contains any non-numeric value', (done) => {
    assert.equal(numeric('Jacquen4Face'), false);
    assert.equal(numeric(' 1'), false);
    assert.equal(numeric('-1'), false);
    assert.equal(numeric(' '), false);
    assert.equal(numeric('Meow3'), false);
    done();
  });
});