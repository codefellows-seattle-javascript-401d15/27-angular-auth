'use strict';

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');
const uiRouter = require('@uirouter/angularjs');

// require('./scss/main.scss');

const cfgram = angular.module('cfgram', ['ui.router']);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  cfgram.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  cfgram.controller(pascalcase(path.basename(key, '.js')), context(key));
});

ontext = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => cfgram.service(camelcase(path.basename(key, '.js')), context(key)));

context = require.context('./component/', true, /\.js$/);
context.keys().forEach(key => cfgram.component(camelcase(path.basename(key, '.js')), context(key)));
