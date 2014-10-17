

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var Network = require('./views/network');
var Timeline = require('./views/timeline');
var Minimap = require('./views/minimap');
Backbone.$ = $;


// TODO|dev
$.getJSON('data.json', _.bind(function(data) {
  new Minimap({ data: data });
  new Timeline({ data: data });
  new Network({ data: data });
}, this));
