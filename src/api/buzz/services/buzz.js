'use strict';

/**
 * buzz service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::buzz.buzz');
