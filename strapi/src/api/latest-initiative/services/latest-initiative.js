'use strict';

/**
 * latest-initiative service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-initiative.latest-initiative');
