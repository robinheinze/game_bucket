App.GamesIncompleteRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('games').filterBy('inProgress');
  }
});