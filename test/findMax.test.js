const findMax = require('../lib/findMax').findMax1;

const chai = require('chai');

const expect = chai.expect;

describe.only('Check findMax1 function with three positive values', () => {
  it('when first is biggest', () => {
    expect(findMax(10, 15, 20)).to.equal(20);
  });
  it('when second is biggest', () => {
    expect(findMax(0, 0, 0)).to.equal(0);
  });
});
