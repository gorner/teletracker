App.QueueRecord = DS.Model.extend({
  episode: DS.belongsTo('App.Episode'),
  queuedAt: DS.attr('date'),
});

App.QueueRecord.FIXTURES = [
  {
    id: 1,
    episode: 583370,
    queuedAt: new Date('2013-06-06T12:00-04:00'),
  }
]
