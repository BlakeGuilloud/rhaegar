import assert from 'assert';
import Rhaegar from '../dist/rhaegar.min.js';

describe('Email', () => {
  const email = new Rhaegar({ pattern: 'email' });

  it('Should return true on a valid email address', (done) => {
    assert.equal(email('ned@winterfell.com'), true);
    assert.equal(email('faceless_brunette@gmail.com'), true);
    assert.equal(email('a@b.c'), true);
    assert.equal(email('jorah@mormont tyrion@kingslanding.com'), true)
    assert.equal(email('a@b.c', 'match')[0], 'a@b.c');
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
  })
});