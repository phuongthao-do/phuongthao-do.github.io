window.onload = tester;

function tester(){
    describe("String.prototype.filter", function(){
        it("returns the new string of the val element == 'This house is nice!'", function(){
            assert.strictEqual("This house is not nice!".filter('not'), "This house is nice!");
        });
    });
    describe("Array.prototype.bubbleSort", function(){
        it("returns the shorted array of the val element == [-2, 0, 1, 3, 4, 6]", function(){
            assert.deepEqual([6,4,0, 3,-2,1].bubbleSort(),[-2, 0, 1, 3, 4, 6]);
        });
    });
    describe("Call teacher teachs a subject", function(){
        
        it("returns the new string of the val element == 'This house is nice!'", function(){
            var res = myTecher.teach("HTML-CSS-JS");
            assert.equal(res, "Teacher Camply is now teaching HTML-CSS-JS");
        });
    });
    mocha.run();
}