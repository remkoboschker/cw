import DS from 'ember-data';
import partij from './partij';

export default partij.extend({
  lidmaatschappen: DS.hasMany('lidmaatschappen'),
  contributie: DS.attr('number'),
  contributieTermijn: DS.attr('string'),
  bestuur: DS.hasMany('leden')
});
