import DS from 'ember-data';

export default DS.Model.extend({
  van: DS.attr('date'),
  tot: DS.attr('date'),
  naam: DS.attr('string'),
  document: DS.attr('string'),

  partijen: DS.hasMany('partij', { polymorphic: true })
});
