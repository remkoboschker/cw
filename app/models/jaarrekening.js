import DS from 'ember-data';

export default DS.Model.extend({
  jaar: DS.attr('number'),
  alv: DS.attr('string'),
  balans: DS.belongsTo('balans'),
  resultaat: DS.belongsTo('resultaat'),
  rekening: DS.belongsTo('rekening'),
  posten: DS.hasMany('post'),
});
