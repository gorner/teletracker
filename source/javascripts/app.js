//= require jquery
//= require handlebars
//= require ember

//= require_self
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./routes
//= require_tree ./views
//= require_tree ./templates
//= require      ./router

window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
})