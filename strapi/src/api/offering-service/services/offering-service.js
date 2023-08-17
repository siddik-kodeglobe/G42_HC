'use strict';

/**
 * offering-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::offering-service.offering-service');
