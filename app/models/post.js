import DS from 'ember-data';

export default DS.Model.extend({
  naam: DS.attr('string'),
  beschrijving: DS.attr('string'),
  rekening: DS.belongsTo('rekening'),
  boekingen: DS.hasMany('boeking'),
  totaal: DS.attr('number'),
  begroting: DS.attr('number'),
});
