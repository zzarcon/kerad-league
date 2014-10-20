import DS from "ember-data";
import Ember from 'ember';

export default DS.ActiveModelAdapter.extend({
  pathForType: function(type) {
    var underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});