import DS from 'ember-data';

export default DS.Model.extend({
  datum: DS.attr('date'),
  van: DS.belongsTo('post'),
  naar: DS.belongsTo('post'),
  bedrag: DS.attr('number'),
  boeker: DS.belongsTo('boeker'),
  tegen: DS.belongsTo('boeking'),
  bon: DS.attr('string')
});
