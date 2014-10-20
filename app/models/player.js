import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('string'),
  goals: DS.attr('number', {defaultValue: 0}),
  picture: DS.attr('string')
});