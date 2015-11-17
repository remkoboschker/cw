import DS from 'ember-data';

export default DS.Model.extend({
  naam: DS.attr('string'),
  groep: DS.belongsTo('groep'),
  jaarrekeningen: DS.hasMany('jaarrekening'),
  posten: DS.hasMany('post'),
  totaal: DS.attr('number')
});
