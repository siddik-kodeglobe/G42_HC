'use strict';

/**
 * meet-us service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meet-us.meet-us');
