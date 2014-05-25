App.ApplicationController = Ember.Controller.extend({
  actions: {
    createSearch: function() {
      var temp = this.get('keyword');
      this.set('keyword', '')
      this.transitionToRoute('/search/'+temp )
    }
  }
});