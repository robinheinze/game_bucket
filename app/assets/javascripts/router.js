// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route('index', {path: '/'}); //Ember will do this without having to specify, but i've included for clarity
  this.resource('games', function() {
    this.route('complete');
    this.route('incomplete');
    this.route('new');
    this.route('all');
    this.resource('game', { path: '/:game_id'}, function() {
      this.route('edit');
    });
  });
  this.route('results', {path: 'search/:keyword'});
});
