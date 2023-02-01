const pi = 3.14;

function add(x, y){ return x + y;}
function subtract(x, y) { return x - y; }
function multiply(x, y) {return x * y;}
function divide(x, y) {
    if(y == 0 ) return 0;
    return x/y;
}

module.exports = {
    pi: pi,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};