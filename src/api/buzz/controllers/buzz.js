'use strict';

/**
 *  buzz controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::buzz.buzz');
