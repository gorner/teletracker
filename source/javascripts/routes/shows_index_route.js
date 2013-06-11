App.ShowsIndexRoute = Em.Route.extend({
  model: function() {
    return [
      {
        id: 16356,
        name: "Mad Men",
        country: "US",
        ended: false,
        started: 2007,
        seasons: 6
      },
      {
        id: 18164,
        name: "Breaking Bad",
        country: "US",
        ended: false,
        started: 2008,
        seasons: 5
      }
    ];
  }
});