App.Router.map(function() {
  // put your routes here
  this.resource('programs', function() {
    this.route('show',{ path: ':program_id' });
  });
});