
import { describe, it, assert } from "../src/DA_Spec.ts";

describe("Describe", function () {

  it("works", function () { assert.equal(5, 5); });

  it("throws an AssertionError", function () {
    assert.throws(() => {
      assert.equal(1, 2);
    }, {
      name: 'AssertionError',
      actual: 1,
      expected: 2
    });
  });

});
