const { check } = require("../check");
const chai = require("chai");
const assert = chai.assert;
describe("#check", function () {
  it("should return true when check digit is valid", function() {
    const actual = check("79927398713");
    assert.isTrue(actual); 
  });

  it("should return false when check digit is invalid", function() {
    const actual = check("9501234400001");
    assert.isFalse(actual); 
  });

  it("should return false when num is empty string", function() {
    const actual = check("");
    assert.isFalse(actual);
  });
})