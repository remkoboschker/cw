import DS from 'ember-data';

export default DS.Model.extend({
  telefoonnummer: DS.attr('string'),
  emailadres: DS.attr('string'),
  website: DS.attr('string')
});
