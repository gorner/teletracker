App.ProgramsIndexRoute = Em.Route.extend({
  model: function() {
    return App.Program.find();
  }
});