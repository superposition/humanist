

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var Network = require('./views/network');
var Minimap = require('./views/minimap');
Backbone.$ = $;


// TODO|dev
$.getJSON('data.json', _.bind(function(data) {
  new Network({ data: data });
  new Minimap({ data: data });
}, this));
