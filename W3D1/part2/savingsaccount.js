class SavingsAccount extends Account {

    constructor(number, interest){
        super(number);
        this.setInterest(interest);
    }

    getInterest(){ 
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest; 
    }

    addInterest(){ 
        this._balance += this.getBalance() * this.getInterest() / 100 ; 
    }

    toString(){
        return "Interest added SavingsAccount "+ this.getNumber() +": balance: "+ this.getBalance() +" interest: " + this.getInterest();
    }
}
