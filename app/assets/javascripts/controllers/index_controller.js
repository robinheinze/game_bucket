App.IndexController = Ember.ArrayController.extend({
  gamesCount: Ember.computed.alias('length'),
  incomplete: function() {
    return this.filterBy('inProgress').slice(0,3);
  }.property('@each.inProgress')
});