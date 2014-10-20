import DS from "ember-data";

export default DS.Model.extend({
  result: DS.attr('string'),
  startTime: DS.attr('string'),
  homeTeamName: DS.attr('string', {defaultValue: "Goldenmanager"}),
  awayTeamName: DS.attr('string', {defaultValue: "?????"}),
  players: DS.hasMany('player'),

  formatedDate: function() {
    if (!this.get('startTime')) {
      return '?????';
    }

    var date = new Date(this.get('startTime'));
    return moment(date).format('DD/MM/YYYY - HH:mm');
  }.property('startTime')
});