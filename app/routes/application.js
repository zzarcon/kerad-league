import Ember from "ember";

export default Ember.Route.extend({
  beforeModel: function() {
    Ember.$.get('data.json').then(function(data) {
      this.get('store').pushPayload('match', data);
      this.get('store').pushPayload('player', data);
    }.bind(this));
  }
});