// Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that
// specifies a list of banned words. The function returns the string after removing all the
// banned words. 
String.prototype.filter = function(...arr){
    var res = this;
    var newStr = (function(){
        for( i of arr){
            res = res.replaceAll(i,"");
        }
        return res;
    });
    return newStr().replaceAll("  ", " ");
};

// Exercise 2:
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
// that works by repeatedly stepping through the list to be sorted.
Array.prototype.bubbleSort = function(){
    var arr = this;
    for (let i = 0; i < arr.length; i++){
        for(let y = 0; y < arr.length - 1; y++){
            const change = function(){
                if(arr[y+1] < arr[y]){
                    let temp = arr[y];
                    arr[y] = arr[y+1];
                    arr[y+1] = temp;
                };
                return arr; 
            };
            change();           
        }
    }
    return arr;
};


// Exercise 3:
// Create an object called Teacher derived from the Person class, and implement a method called teach
// which receives a string called subject, and returns:
// [teacher's name] is now teaching [subject]
var Person = function(){};

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
}

// Student function constructor
var Student = function(){};
Student.prototype = new Person();

Student.prototype.learn = function(subject){
    console.log(this.name + " just learned " + subject);
}

var me = new Student();
me.initialize("John", 25);
// me.learn("Inheritance");

// Teacher function constructor
var Teacher = function(){};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    return this.name + " is now teaching " + subject;
}

let myTecher = new Teacher();
myTecher.initialize("Teacher Camply", 35);
// myTecher.teach("HTML-CSS-JS");