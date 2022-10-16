'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('github-rebuild-action')
      .service('myService')
      .getWelcomeMessage();
  },
};
