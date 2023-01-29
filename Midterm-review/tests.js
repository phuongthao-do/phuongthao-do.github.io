let testArray = ["David", "marcus", "Noelle", "carl", "tina", "Natalia"];

window.onload = tester;

function tester(){
    describe("returnHiddenValue", function(){
        it("returns the hidden value of the val element == 15", function(){
            assert.strictEqual(returnHiddenValue(), "15");
        });
    });
    describe("returnHiddenValue", function(){
        it("returns the hidden value of the val element is NOT === 15", function(){
            assert.notStrictEqual(returnHiddenValue(), 15);
        });
    });

    describe("map", function(){
        it("takes a string array and returns an array of the lengths of each element", function(){
            assert.equal(map.reduce((x,y) => x+y), 32);
        });
    });

    describe("filter", function(){
        it("takes a string array and returns an array of only the elements that start with an uppercase character", function(){
            assert.equal(filter.reduce((x,y) => x+y), "DavidNoelleNatalia");
        });
    });

    describe("reduce", function(){
        it("takes a string array and returns combines the elements into a single string object", function(){
            assert.equal(reduce, "DavidmarcusNoellecarltinaNatalia");
        });
    });

    describe("sumNumbersArray", function(){
        it("takes 5 parameters and returns the sum of their values", function(){
            assert.equal(sumNumbersArray(3,5,7,5,3), 23);
        });
    });
    describe("sumNumbersArray", function(){
        it("takes 3 parameters and returns the sum of their values", function(){
            assert.equal(sumNumbersArray(7,5,3), 15);
        });
    });
    describe("sumNumbers", function(){
        it("takes 6 parameters and returns the sum of their values", function(){
            assert.equal(sumNumbersArray(7,5,3,1,3,6), 25);
        });
    });
    describe("combineArrays", function(){
        it("takes 2 arrays and returns an arrays representing the combination of the two inputs", function(){
            assert.equal(combineArrays([7,5,3],[1,3,6]), '7,5,31,3,6');
        });
    });
    describe("addNumber", function(){
        it("uses closures to calculate a value", function(){
            assert.equal(addNumber(3)(4), 7);
        });
    });
    describe("createObject", function(){
        it("check if object is properly created", function(){
            assert.equal(myObject.x, 5);
        });
    });
    describe("createObject", function(){
        it("check if object is properly created", function(){
            assert.equal(myObject.y, 10);
        });
    });
    describe("usingBind", function(){
        it("uses closures to return a value", function(){
            assert.equal(bindTest(), 13);
        });
    });

    describe("usingCall", function(){
        it("uses closures to return a value", function(){
            assert.equal(callTest, 23);
        });
    });

    describe("usingApply", function(){
        it("uses closures to return a value", function(){
            assert.equal(applyTest, 60);
        });
    });

    describe("usingIffe", function(){
        it("uses an iffe to multiply two values", function(){
            assert.equal(usingiIffe, 42);
        });
    });

    describe("doMath", function(){
        it("uses a revealing module pattern to sum 5 + 8", function(){
            assert.equal(usingModule.math(), 13);
        });
    });

    describe("doMath", function(){
        it("uses a revealing module pattern to sum 5 + 8", function(){
            assert.equal(usingModule.math(), 13);
        });
    });

    describe("checkDave", function(){
        it("checking dave's name", function(){
            assert.equal(dave.prototype.name == dave.prototype.speak(), true);
        });
    });

    describe("checkCharlie", function(){
        it("checking charlie's name", function(){
            assert.equal(charlie.prototype.name == charlie.prototype.speak(), true);
        });
    });

    describe("checkCharlie-eat", function(){
        it("checking if charlie's can eat", function(){
            assert.equal(charlie.eat() == "eating....", true);
        });
    });
;


    mocha.run();
}