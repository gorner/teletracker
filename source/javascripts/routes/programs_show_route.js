App.ProgramsShowRoute = Em.Route.extend({
  model: function(params) {
    return App.Program.find(params.program_id);
  }
});