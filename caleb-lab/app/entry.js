'use strict'

require('./scss/main.scss')

const path = require('path')
const camelcase = require('camelcase')
const pascalcase = require('pascalcase')
const angular = require('angular')
const uiRouter = require('@uirouter/angularjs')

const cfgram = angular.module('cfgram', ['ui.router'])

let context = require.context('./config/', true, /\.js$/)
context.keys().forEach(path => cfgram.config(context(path)))
//for each key in the config files, mount the config for the cfgram
context = require.context('./view/', true, /\.js$/)
context.keys().forEach(key => cfgram.controller(pascalcase(path.basename(key, '.js')), context(key)))

context = require.context('./service', true, /\.js$/)
context.keys().forEach(key => cfgram.service(camelcase(path.basename(key, '.js')), context(key)))

context = require.context('./component/', true, /\.js$/)
context.keys().forEach(key => cfgram.component(camelcase(path.basename(key, '.js')), context(key)))
