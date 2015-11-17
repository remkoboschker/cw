import DS from 'ember-data';

export default DS.Model.extend({
  vanaf: DS.attr('date'),
  tot: DS.attr('date'),
  lid: DS.belongsTo('lid'),
  groep: DS.belongsTo('groep')
});
