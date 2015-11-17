/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'boeking',
  'Boeking',
  {
    // Specify the other units that are required for this test.
      needs: ['model:van', 'model:naar', 'model:boeker', 'model:tegen']
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      var model = this.subject();
      // var store = this.store();
      expect(model).to.be.ok;
    });
  }
);
