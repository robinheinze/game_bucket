App.GameEditController = Ember.ObjectController.extend({
  actions: {
    updateGame: function() {
      var model = this.get('model');
      var controller = this;
      model.save()
      .then(function() {
        controller.transitionToRoute('game', model);
      });
    }
  }
});
