/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'groep',
  'Groep',
  {
    // Specify the other units that are required for this test.
      needs: ['model:rekening', 'model:lidmaatschappen', 'model:begroting', 'model:telecom']
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
