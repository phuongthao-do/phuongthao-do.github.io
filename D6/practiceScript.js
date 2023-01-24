/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if(Array.isArray(expected) && Array.isArray(found)){
        if(expected.length == found.length){
            for(i1 of expected){
                let checkI = found.filter(x => x == i1)
                if(checkI.length == 0){
                    return "TEST FAILED.  Expected " + expected + " found " + found;
                }
            }
            return "TEST SUCCEEDED";
        }
    }
    else if (expected === found) {
      return "TEST SUCCEEDED";
    }
    return "TEST FAILED.  Expected " + expected + " found " + found;
}

// sum() and a function multiply() that sums all the numbers in an array of numbers
function sum(arr){
    if(arr == null || arr.length == 0) return 0;

    let res = arr.filter(i => typeof(i) === 'number').reduce((total, i) => total + i, 0);
    return res
}
console.log("Expected output of sum([]) is 0  " + myFunctionTest(0, sum([])));
console.log("Expected output of sum([2, 5, 10]) is 17  " + myFunctionTest(17, sum([2, 5, 10])));
console.log("Expected output of sum(['2', 5, 10]) is 15  " + myFunctionTest(15, sum(['2', 5, 10])));
console.log("Expected output of sum(['a', 5, 10]) is 15  " + myFunctionTest(15, sum(['a', 5, 10])));

// multiplies() (respectively) all the numbers in an array of numbers
function multiplies(arr){
    if(arr == null || arr.length == 0) return 0;

    let res = arr.filter(i => typeof(i) === 'number').reduce((total, i) => total* i, 1);
    return res
}
console.log("Expected output of multiplies([]) is 0  " + myFunctionTest(0, multiplies([])));
console.log("Expected output of multiplies([2, 5, 10]) is 100  " + myFunctionTest(100, multiplies([2, 5, 10])));
console.log("Expected output of multiplies(['2', 5, 10]) is 50  " + myFunctionTest(50, multiplies(['2', 5, 10])));
console.log("Expected output of multiplies(['a', 5, 10]) is 50  " + myFunctionTest(50, multiplies(['a', 5, 10])));

// reverse() that computes the reversal of a string
function reverse(str){
    if(str == null || str.length == 0) return "";
    let charArr = str.split("");

    let res = charArr.reduce((total, i) => i+total, "");
    return res;
}
console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest("ratset gaj", reverse("jag testar")));

// filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i
function filterLongWords(arr, i){
if(arr == null || arr.length == 0) return []; 

let resArr = arr.filter((o) => o.length > i);
return resArr;
}
console.log("Expected output of filterLongWords(['23','123t','yuu'],2) is ['123t', 'yuu']  " + myFunctionTest( ["123t", "yuu"], filterLongWords(["23","123t","yuu"],2)));