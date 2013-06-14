App.Episode = DS.Model.extend({
  program: DS.belongsTo('App.Program'),
  season_number: DS.attr('number'),
  episode_number: DS.attr('number'),
  total_number: DS.attr('number'),
  title: DS.attr('string'),
  airdate: DS.attr('date')
});

App.Episode.FIXTURES = [
  {
    id: 579676,
    program: 16356,
    season_number: 1,
    episode_number: 1,
    total_number: 1,
    title: "Smoke Gets in Your Eyes",
    airdate: new Date('2007-07-19T22:00-04:00')
  },
  {
    id: 583369,
    program: 16356,
    season_number: 1,
    episode_number: 2,
    total_number: 2,
    title: "Ladies Room",
    airdate: new Date('2007-07-26T22:00-04:00')
  },
  {
    id: 583370,
    program: 16356,
    season_number: 1,
    episode_number: 3,
    total_number: 3,
    title: "Marriage of Figaro",
    airdate: new Date('2007-08-02T22:00-04:00')
  }
];