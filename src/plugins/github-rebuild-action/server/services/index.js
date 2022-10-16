'use strict';
const myService = require('./my-service');
const github = require("./github-action")
module.exports = {
  myService,
  github,
};