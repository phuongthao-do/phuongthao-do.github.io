window.onload = tester;

function tester(){
    describe("SavingsAccount", function(){
        it("returns the new SavingsAccount which has 'balance: 102.5 interest: 2.5'", function(){
            let savingsAccount = new SavingsAccount(2, 2.5);
            savingsAccount.deposit(100);
            savingsAccount.addInterest();
            assert.equal(savingsAccount.toString(), "Interest added SavingsAccount 2: balance: 102.5 interest: 2.5");
        });
    });
    describe("CheckingAccount", function(){
        it("returns the new CheckingAccount which has 'balance: -100 overdraft limit: 500'", function(){
            let checkingAccount = new CheckingAccount(3, 500);
            checkingAccount.deposit(100);
            checkingAccount.withdraw(200);
            assert.throws(() =>checkingAccount.withdraw(700), "Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500");
        });
    });
    mocha.run();
}