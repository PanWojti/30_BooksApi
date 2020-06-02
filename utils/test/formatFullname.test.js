const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return an error if "fullName" arg is empty', () => {
  expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" is not a string', () => {
  expect(formatFullname(20)).to.equal('Error');
  });

  it('should return an error if "fullName" format is different than <firstName> <lastName>', () => {
  expect(formatFullname('John')).to.equal('Error');
  expect(formatFullname(' Doe')).to.equal('Error');
  expect(formatFullname('John Doe Doe')).to.equal('Error');
  });

});
