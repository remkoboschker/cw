import DS from 'ember-data';
import partij from './partij';

export default partij.extend({
  vorm: DS.attr('string'),
  kvk: DS.attr('string'),
  btw: DS.attr('string')
});
