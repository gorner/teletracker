App.EpisodesShowRoute = Em.Route.extend({
  model: function(params) {
    return App.Episode.find(params.episode_id);
  },

  setupController: function(controller, episode) {
    controller.set('model', episode);
  }
});
