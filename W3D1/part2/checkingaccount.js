class CheckingAccount extends Account{
    constructor(number, overdraftLimit){
        super(number);
        this.setOverdraftLimit(overdraftLimit);
    }

    getOverdraftLimit(){
        return this._overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit){
        this._overdraftLimit = overdraftLimit;
    }

    withdraw(amount){
        if(amount <= 0 ){
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if(amount > this.getOverdraftLimit()){
            throw Error("Warning, low balance CheckingAccount "+ this.getNumber() +": balance: "+ this.getBalance() +" overdraft limit: "+ this.getOverdraftLimit());
        }
        this._balance -= amount;
    }

    toString(){
        return "Balance CheckingAccount "+ this.getNumber() +": balance: " + this.getBalance() + " overdraft limit: " + this.getOverdraftLimit();
    }
}