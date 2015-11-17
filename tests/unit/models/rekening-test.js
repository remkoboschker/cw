/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'rekening',
  'Rekening',
  {
    // Specify the other units that are required for this test.
      needs: ['model:lid', 'model:groep', 'model:extern', 'model:jaarrekeningen', 'model:posten']
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
