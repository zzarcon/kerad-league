import DS from "ember-data";

export default DS.Model.extend({
  result: DS.attr('string'),
  date: DS.attr('date'),
  homeTeamName: DS.attr('string', {defaultValue: "Goldenmanager"}),
  awayTeamName: DS.attr('string'),
  players: DS.hasMany('player'),

  formatedDate: function() {
    return moment(this.get('date')).format('MMMM Do YYYY, h:mm:ss a');
  }.property('date')
});