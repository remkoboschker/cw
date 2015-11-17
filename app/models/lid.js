import DS from 'ember-data';
import partij from './partij';

export default partij.extend({
  achternaam: DS.attr('string'),
  bsn: DS.attr('string'),
  geboorteDatum: DS.attr('date'),
  lidmaatschappen: DS.hasMany('lidmaatschap'),
  woongeschiedenis: DS.hasMany('adres'),
});
