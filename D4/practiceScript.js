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
  
/* max returns the maximum of 2 arguments */
function max(a, b) {
if (a > b) {
    return a;
} else {
    return b;
};
}
console.log("Expected output of max(50,7) is 50  " + myFunctionTest(50, max(50, 7)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
return max(max(a, b), c);

}
console.log("Expected output of maxOfThree(6,9,44) is 44  " + myFunctionTest(44, maxOfThree(6,9,44)));
console.log("Expected output of maxOfThree(70,90,85) is 90 " + myFunctionTest(90, maxOfThree(70,90,85)));
console.log("Expected output of maxOfThree(15,10,12) is 15  " + myFunctionTest(15, maxOfThree(15,10,12)));

// isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel
function isVowel(c){
    if(c == null || c.length != 1) return false;

    let vowelList = ['a','e','i','o','u'];

    for (let i = 0; i < vowelList.length; i++){
        if (vowelList[i] === c.toLowerCase()[0]) return true;
    }
    return false;

}
console.log("Expected output of isVowel('1') is false  " + myFunctionTest(false, isVowel("1")));
console.log("Expected output of isVowel('EV') is false  " + myFunctionTest(false, isVowel("EV")));
console.log("Expected output of isVowel('U') is true  " + myFunctionTest(true, isVowel("U")));

// sum() and a function multiply() that sums all the numbers in an array of numbers
function sum(arr){
    if(arr == null || arr.length == 0) return 0;

    var res = 0;
    for(i of arr){
        if(typeof(i) != 'number') return 0;
        res += i;
    }
    return res
}
console.log("Expected output of sum([]) is 0  " + myFunctionTest(0, sum([])));
console.log("Expected output of sum([2, 5, 10]) is 17  " + myFunctionTest(17, sum([2, 5, 10])));
console.log("Expected output of sum(['2', 5, 10]) is 0  " + myFunctionTest(0, sum(['2', 5, 10])));
console.log("Expected output of sum(['a', 5, 10]) is 0  " + myFunctionTest(0, sum(['a', 5, 10])));

// multiplies() (respectively) all the numbers in an array of numbers
function multiplies(arr){
    if(arr == null || arr.length == 0) return 0;

    var res = 1;
    for(i of arr){
        if(typeof(i) != 'number') return 0;
        res *= i;
    }
    return res
}
console.log("Expected output of multiplies([]) is 0  " + myFunctionTest(0, multiplies([])));
console.log("Expected output of multiplies([2, 5, 10]) is 100  " + myFunctionTest(100, multiplies([2, 5, 10])));
console.log("Expected output of multiplies(['2', 5, 10]) is 0  " + myFunctionTest(0, multiplies(['2', 5, 10])));
console.log("Expected output of multiplies(['a', 5, 10]) is 0  " + myFunctionTest(0, multiplies(['a', 5, 10])));

// reverse() that computes the reversal of a string
function reverse(str){
    if(str == null || str.length == 0) return "";

    let res = "";
    for(let i = str.length - 1; i >= 0; i--){
        res += str[i];
    }
    return res;
}
console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest("ratset gaj", reverse("jag testar")));

// findLongestWord() that takes an array of words and returns the length of the longest one
function findLongestWord(arr){
    if(arr == null || arr.length == 0) return 0; 

    let res = 0;
    for(i of arr){
        if(i.length > res){
            res = i.length;
        }
    }
    return res;
}
console.log("Expected output of findLongestWord(['23','123t','yuu']) is 4  " + myFunctionTest(4, findLongestWord(["23","123t","yuu"])));

// filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i
function filterLongWords(arr, i){
if(arr == null || arr.length == 0) return []; 

var resArr = [];
for(item of arr){
    if(item.length > i){
        resArr.push(item)
    }
}
return resArr;
}
console.log("Expected output of filterLongWords(['23','123t','yuu'],2) is ['123t', 'yuu']  " + myFunctionTest( ["123t", "yuu"], filterLongWords(["23","123t","yuu"],2)));

const a = [1,3,5,3,3];
const multiply10 = a.map( x => x*10 );
console.log("multiply each element by 10: " + multiply10);

const elements3 = a.filter( x => x == 3);
console.log("all elements equal to 3: " + elements3);
