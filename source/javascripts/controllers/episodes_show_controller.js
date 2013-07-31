App.EpisodesShowController = Ember.ObjectController.extend({
  enqueue: function() {
    var queueRecord = App.QueueRecord.createRecord({
      episode: this.get('model'),
      queued_at: new Date()
    })
    this.set('model.queueRecord', queueRecord);
  },

  dequeue: function() {
    var queueRecord = this.get('model.queueRecord');
    queueRecord.deleteRecord();
    this.set('model.queueRecord', null);
  }
})