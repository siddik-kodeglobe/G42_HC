'use strict';

/**
 * usp-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::usp-service.usp-service');
