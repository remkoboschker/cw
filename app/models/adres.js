import DS from 'ember-data';

export default DS.Model.extend({
  straatnaam: DS.attr('string'),
  woonplaats: DS.attr('string'),
  postcode: DS.attr('string'),
  huisnummer: DS.attr('string'),
  vanaf: DS.attr('date'),
  tot: DS.attr('date')
});
