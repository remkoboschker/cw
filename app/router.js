import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('boekhouding', function() {
    this.route('rekeningen');
  });
  this.route('groepen');
  this.route('leden');
  this.route('externen');

  this.route('extern', function() {});
  this.route('groep');
  this.route('lid');
});

export default Router;
