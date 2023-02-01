const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("What is your name?", name => {
    console.log(`Welcome ${name}`);
    askAge();
})
function askAge(){
    readline.question("What old are you?", age => {
        if(age < 16) {
            console.log("You’re not allowed to drive in Iowa");
        }else{
            console.log("You’re allowed to get a drivers license in Iowa");
        }
        getNumber();
    })
}
let sumNum = 0;
function getNumber(){
    readline.question("Enter a number:", number => {
        if(number == "stop"){
            console.log("Sum of all number: "+ sumNum);
            readline.close();
        }else{
            sumNum += parseInt(number);
            getNumber();
        }
    })
}