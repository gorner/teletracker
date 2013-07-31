App.ProgramController = Ember.ObjectController.extend({
  createQueueRecord: function(episodeID) {
    var queueRecord = App.QueueRecord.createRecord({
      episode: episodeID,
      queued_at: new Date()
    })
    return queueRecord;
  }
})