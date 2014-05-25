App.GameController = Ember.ObjectController.extend({
  actions: {
    markComplete: function() {
      var model = this.get('model');
      model.set('inProgress', false);
      model.save();
    },
    deleteGame: function() {
      if(confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('games');
      }
    }

  }
});