import Ember from 'ember';

var Router = Ember.Router.extend({
  location: KeradLeagueENV.locationType
});

Router.map(function() {
  this.route('table');
  this.route('players');
  this.route('match', {path: 'match/:match_id'});
  this.route('player', {path: 'player/:player_id'});
});

export default Router;
