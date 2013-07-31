App.Episode = DS.Model.extend({
  program: DS.belongsTo('App.Program'),
  queueRecord: DS.belongsTo('App.QueueRecord'),   // only one queuing per episode for now
  seasonNumber: DS.attr('number'),
  episodeNumber: DS.attr('number'),
  totalNumber: DS.attr('number'),
  title: DS.attr('string'),
  airdate: DS.attr('date'),
  watched: DS.attr('boolean')
});

App.Episode.FIXTURES = [
  {
    id: 579676,
    program: 16356,
    seasonNumber: 1,
    episodeNumber: 1,
    totalNumber: 1,
    title: "Smoke Gets in Your Eyes",
    airdate: new Date('2007-07-19T22:00-04:00'),
    watched: true
  },
  {
    id: 583369,
    program: 16356,
    seasonNumber: 1,
    episodeNumber: 2,
    totalNumber: 2,
    title: "Ladies Room",
    airdate: new Date('2007-07-26T22:00-04:00'),
    watched: true
  },
  {
    id: 583370,
    program: 16356,
    seasonNumber: 1,
    episodeNumber: 3,
    totalNumber: 3,
    title: "Marriage of Figaro",
    airdate: new Date('2007-08-02T22:00-04:00'),
    watched: false,
    queueRecord: 1
  }
];
