/*https://strapi.io/blog/strapi-webhooks */

'use strict';

/**
 * Lifecycle callbacks for the `Post` model.
 */

module.exports = {  
  afterCreate: async (entry) => {
    console.log('afterCreate');
  },

  afterUpdate: async (entry) => {
    console.log('afterUpdate');
  },

  afterDestroy: async (entry) => {
    console.log('afterDestroy');
  }
};