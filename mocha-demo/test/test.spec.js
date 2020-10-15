// imports assertion library
const expect = require("expect.js");

describe("Test Suite", function() {

    it("should be 2", function() {
        expect(2).equal(2);
    })

    it("should be 3", function() {
        var n = 3;
        expect(n).to.be(3);
    })

    it("should not be 4", function() {
        var n = 3;
        expect(n).not.to.be(4);
    })

})