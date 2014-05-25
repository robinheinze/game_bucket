App.GamesNewController = Ember.ObjectController.extend({
  actions: {
    createGame: function() {
      var game = this.store.createRecord('game', {
        title: this.get('title'),
        description: this.get('description'),
        image: this.get('image'),
        year: this.get('year'),
        console: this.get('console'),
        company: this.get('company'),
        inProgress: true
      });
      var controller = this;
      game.save().then(function() {
        controller.set('title', '');
        controller.set('description', '');
        controller.set('image', '');
        controller.set('year', '');
        controller.set('console', '');
        controller.set('company', '');
      });
      this.transitionToRoute('games');
    }

  }

});