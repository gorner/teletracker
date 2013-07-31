App.Program = DS.Model.extend({
  name: DS.attr('string'),
  country: DS.attr('string'),
  ended: DS.attr('boolean'),
  started: DS.attr('number'),
  seasons: DS.attr('number'),
  episodes: DS.hasMany('App.Episode'),

  watchedFraction: function() {
    var episodes = this.get('episodes');
    var episodesCount = episodes.get('length');
    if(episodesCount == 0) {
      return 0;
    } else {
      var watchedCount = episodes.filterProperty('watched').get('length');
      return watchedCount / episodesCount;
    }
  }.property('episodes.@each.watched'),

  watchedPercent: function() {
    return Math.round(this.get('watchedFraction') * 100);
  }.property('watchedFraction'),
});

App.Program.FIXTURES = [
  {
    id: 16356,
    name: "Mad Men",
    country: "US",
    ended: false,
    started: 2007,
    seasons: 6,
    episodes: [
      579676, 
      583369,
      583370
    ]
  },
  {
    id: 18164,
    name: "Breaking Bad",
    country: "US",
    ended: false,
    started: 2008,
    seasons: 5,
    episodes: []
  }
];
