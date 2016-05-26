/**
 * Adlog.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    adPosition: {
      type: 'string',
      defaultsTo: ''
    },
    pageLoadTilAdCall: {
    type: 'integer',
      defaultsTo: -1
    },
    adLoadTime: {
    type: 'integer',
      defaultsTo: -1
    },
    url: {
      type: 'string',
      defaultsTo: ''
    },
    content_type: {
      type: 'string',
      defaultsTo: ''
    },
    source: {
      type: 'string',
      defaultsTo: 'OAS'
    },
  }
};

