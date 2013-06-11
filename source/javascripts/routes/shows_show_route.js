App.ShowsShowRoute = Em.Route.extend({
  model: function(params) {
    if(params.show_id == 16356) {
      return {
        id: 16356,
        name: "Mad Men",
        country: "US",
        ended: false,
        started: 2007,
        seasons: 6
      };
    } else {
      return {
        id: 18164,
        name: "Breaking Bad",
        country: "US",
        ended: false,
        started: 2008,
        seasons: 5
      };
    }
  }
});