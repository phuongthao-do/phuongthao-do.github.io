class MyClass {
  constructor() {
    let privateAttribute = 'private';
    
    this.publicAttribute = 'public';

    let privateMethod = function() {
      console.log('This is a private method');
    };

    this.publicMethod = function() {
      console.log('This is a public method');
      privateMethod();
    };

    this.getPrivateAttr = function(){ return privateAttribute; }
  }

  printP(){
    console.log(this.getPrivateAttr());
  }
}

let myO = new MyClass();
myO.printP();