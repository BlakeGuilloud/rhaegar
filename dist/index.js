"use strict";

modules.exports = {
  email: function email(_email) {
    return _email.match(/.+?@.+?\..+?/i);
  }
};