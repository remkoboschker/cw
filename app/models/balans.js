import DS from 'ember-data';

export default DS.Model.extend({
  datum: DS.attr('date'),
  totaal: DS.attr('number')
});
