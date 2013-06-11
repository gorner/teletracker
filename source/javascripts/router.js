App.Router.map(function() {
  // put your routes here
  this.resource('shows', function() {
    this.route('show',{ path: ':show_id' });
  });
});