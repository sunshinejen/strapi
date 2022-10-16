'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('home')
      .service('myService')
      .getWelcomeMessage();
  },
};
