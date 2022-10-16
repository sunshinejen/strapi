'use strict';

/**
 * buzz router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::buzz.buzz');
