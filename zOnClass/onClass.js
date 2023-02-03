//2. Write some jQuery code to: Create a input tag with type="text", value="hello world" name="hello" Add the tag you created to the bottom of the form that has id "helloForm" Model Short Answer 
$("#helloForm").append(
  $("<input>", { type: "text", name: "hello", value: "hello world" })
);
//5. Implement the following UML diagram in JavaScript using the new ES6 class syntax. The runProgram() method should take a string that indicates which program, and then console.log "running: " + program. The carryAround() method takes no parameters, and console.log "carrying laptop: cpu" + cpu +" ram: " + ram + " storage: " + storage + " battery: " + battery
class Computer{

  constructor(cpu, ram, storage, battery){
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
  }

  runProgram(program){
    console.log ("running: " + program);
  }
  carryAround(){
    //console.log ("carrying laptop: cpu" + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
  }
}

// ---------
class Computer {
  constructor(ram, cpu, storage) {
    this.ram = ram;
    this.cpu = cpu;
    this.storage = storage;
  }
  runProgram(p) {
    console.log("running: " + p);
  }
}

/******************************/

class Laptop extends Computer() {
  constructor(cpu, ram, storage, battery) {
    super(cpu, ram, storage);
    this.battery = battery;
  }

  carryAround() {
    console.log(
      "carrying laptop: cpu" + this.cpu +
        " ram: " + this.ram +" storage: " + this.storage +
        " battery: " + this.battery
    );
  }
}