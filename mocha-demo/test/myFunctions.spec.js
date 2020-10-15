// imports assertion library
const expect = require("expect.js");
const { square, cube, addAsync } = require("../src/myFunctions.js");

describe("myFunctions Test Suite", function() {

    it("square should be 9", function() {
        var res = square(3);
        expect(res).to.be(9);
    })

    it("cube should be 27", function() {
        var res = cube(3);
        expect(res).to.be(27);
    })

    it("addAsync should be 5 in the future", function() {
        
        addAsync(2,3).then(res => {
            expect(res).to.be(5);
        })
    
    })

})