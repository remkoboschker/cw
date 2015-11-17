import DS from 'ember-data';

export default DS.Model.extend({
  naam: DS.attr('string'),
  bankrekening: DS.attr('string'),
  overeenkomsten: DS.hasMany('overeenkomst'),
  adres: DS.belongsTo('adres'),
  telecom: DS.belongsTo('telecom')
  rekening: DS.belongsTo('rekening'),
});
