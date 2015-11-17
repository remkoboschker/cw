import DS from 'ember-data';

export default DS.Model.extend({
  datum: DS.attr('date'),
  rekening: DS.belongsTo('rekening'),
  totaal: DS.attr('number')
});
