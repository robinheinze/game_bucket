App.GamesIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('games');
  }
});