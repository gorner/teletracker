App.QueueRoute = Em.Route.extend({
  model: function() {
    return App.QueueRecord.find();
  }
});