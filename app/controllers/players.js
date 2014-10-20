import Ember from "ember";

export default Ember.ArrayController.extend({
  sortProperties: ['goals'],
  sortAscending: false,

  model: function() {
    return this.get('store').all('player');
  }.property()
});