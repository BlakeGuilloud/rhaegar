"use strict";

module.exports = {
  email: function email(_email) {
    return _email.match(/.+?@.+?\..+?/i);
  }
};