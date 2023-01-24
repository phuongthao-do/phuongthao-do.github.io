/**implement the returnHiddenValue function which returns
 * the value of the hiddenHTML element with the id "val".
 */
function returnHiddenValue() {
  let htmlElement = document.getElementById("val");
  return htmlElement.value;
}
/* ------------------------------------------------- */

/* Use the map function on testArray 
(which is an array of strings) to get an array
of numbers representing their lengths */
let map = testArray.map((elm) => elm.length);

/* ------------------------------------------------- */


/* Use the filter function on testArray 
(which is an array of strings) to get an array
of strings representing the value of the elements
which start with an uppsercase character */
let filterFunc = (ele) => {
  return ele.charCodeAt(0) >= 60 && ele.charCodeAt(0) <= 90;
};
let filter = testArray.filter(filterFunc);
console.log(filter);

/* ------------------------------------------------- */

/* Use the reduce function on testArray 
(which is an array of strings) to get a string
combining all of the elements in testArray */
let reduce = testArray.reduce((conc, elem) => {
  return conc + elem;
}, "");
console.log(reduce);

/* ------------------------------------------------- */

/* Implement the sumNumbers method to return
the sum of any number of inputs using a rest parameter */
function sumNumbersArray(...x) {
  return x.reduce((acc, num) => {
    return acc + num;
  }, 0);
}

/* ------------------------------------------------- */

/* Implement the combineArrays method which
takes two arrays as inputs and returns an
array with all of the elements of the two input
arrays - (Hint: use spread)*/
function combineArrays(x, y) {
  let array = x + y;
  return array;
}
/* ------------------------------------------------- */

/*Implement the addNumber method to return a function
which is a closure to its input (x) which adds that input
to its own input (y) and returns the value of their sum*/
function addNumber(x) {
  return (y) => {
    return x + y;
  };
}

/*-------------------------------------------------*/

function currying(x, z) {
  return x + this.y + z;
}

/* ------------------------------------------------- */

/*Create an object called myObject which has two
parameters:
x which has the value of 5
y which has the value of 10
*/
let myObject = {
  x: 5,
  y: 10,
};

/* ------------------------------------------------- */

/*Use bind on the function "currying" to bind myObject
with 1 , 2 as input values*/
let bindTest = currying.bind(myObject, 1, 2);

/* ------------------------------------------------- */

/*Use call on the function "currying" to bind myObject
with 6 , 7 as input values*/
let callTest = currying.call(myObject, 6, 7);

/* ------------------------------------------------- */

/*Use apply on the function "currying" to bind myObject
with 5 , 45 as input values*/
let applyTest = currying.apply(myObject, [5, 45]);

/* ------------------------------------------------- */

/*Use an IIFFE in order to take two inputs x , y
and return x * y, use 7 and 6 as test values*/
let usingiIffe = (function (x, y) {
  return x * y;
})(7, 6);
console.log("IFEE: " + usingiIffe);

/* ------------------------------------------------- */

/*Use a revealing module pattern where you will declare
let x = 5, let y = 8 and a function called doMath to return
the sum of x + y. return an object with a function named
math which exposes the doMath function*/
let usingModule = (function () {
  var x = 5;
  var y = 8;
  function returnx() {
    return x;
  }
  function returny() {
    return y;
  }
  function doMath() {
    return returny() + returnx();
  }
  return {
    math: doMath,
  };
})();
console.log("Math: " + usingModule.math());

/*----------------------------------------------------*/

/*Use any inheritance strategy you see fit to create a 
person object, the person object will have a name and
a function called speak which simply returns the
value of name.

Create an object called dave which inherits from 
person and uses "Dave Smith" to set the property of name
inside the parent object.

Create an object called charlie which inherits from 
person and uses "Charlez Brown" to set the property of name
inside the parent object.
Add a function named eat to charlie which simply returns
"eating...."*/
function Person(name) {
  this.name;
}
Person.prototype.speak = function () {
  return this.name;
};
function Dave(name) {
  this.name = name;
}
Dave.prototype.__proto__ = Person.prototype;

let dave = new Dave("Dave Smith");
Dave.prototype.name = dave.name;

function Charlie(name) {
  this.name = name;
}
Charlie.prototype.__proto__ = Person.prototype;

let charlie = new Charlie("Charlez Brown");
Charlie.prototype.name = charlie.name;
Charlie.prototype.eat = function () {
  return "eating....";
};
