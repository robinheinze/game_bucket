App.ResultsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('game', {keyword: params.keyword});
  }
});