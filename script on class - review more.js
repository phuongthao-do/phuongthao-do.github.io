let fuc1 = function(x, y){ return x + y; }
let fun2 = function(x, y){ return x - y; }

function exeF(x, y, z){let res = x(y, z); console.log(res);}
exeF(fun1, 1,2)
exeF(fun2, 5, 1);

function myF(x){
    console.log([...x]);
    console.log(...x);
}
myF([1, 3, 4, 5], ["z", "f"]);

function myF(x, y){
    console.log([...x, ...y]);
    console.log(...x, ...y);
}
myF([1, 3, 4, 5],[4,6,7])

//It won't work
function myF(x, y){
    console.log([...x,...y]);
}
myF({
    attr1: "a1",
    attr2: "a2"
},{
    attr3: "a3",
    attr4: "a4"
})

function myF(x, y){
    console.log({...x,...y});
}
myF({
    attr1: "a1",
    attr2: "a2"
},{
    attr3: "a3",
    attr4: "a4",
    attr5: "a5"
});
myF([ "a1","a2" ],[ "a3", "a4", "a5" ]);

function myF(...x){
    let z1 = [];
    x.forEach(i => z1.push(i));
    console.log(z1);

    let c = [];
    x.forEach(i => c.push(...i));
    console.log(c);    
}
myF([ "a1","a2" ],["s2", "s3", 4]);

let number = [3,4,5,1,2,9]
let [x, y, ...z] = number;
console.log(z);

//It won't work
let {n, m} = number;
console.log(n);

let object = {
    '0': "value 1",
    '1': "value 2",
    '2': "value 3"
}
for(let i = 0; i < 3; i++){
    console.log(object[i]);
}

function fname(e,r){
    return e*r;
}
fname ((e,r) => e*r, 5, 14);
function fname(x, y){
    console.log(arguments);
    // console.log(x(4, 5) + y);
}


function fname(x){
    console.log(x * 10);
}


var x1;
function myF(){
   let x1 = 12;
   myF1();
   function myF1(){
        x1 = 30;
        console.log(x1);
   }
   console.log("Again: " + x1);
}
function mF(){
    console.log(x1);
}
myF();
mF();