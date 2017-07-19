class Account{
    constructor(id,name,bal){
        this.id=id;
        this.name=name;
        this.bal=bal;
    }
    getBalance(){
        return this._bal;
    }
}
class SavingAccount extends Account{
    constructor(id,name,bal,interest){
        super(id,name,bal);
        this.interest=interest;
    }
    getBalance(){
        return this.bal+this.interest;
    }
}
class CurrentAccount extends Account{
    constructor(id,name,bal,cash_credit){
        super(id,name,bal);
        this.cash_credit=cash_credit;
    }
     getBalance(){
        return (this.bal+this.cash_credit);
    }
}
let acc1=new SavingAccount(100,'tanmay',2000,5000);
let acc2=new CurrentAccount(200,'amit',2000,1000);
let acc3=new SavingAccount(300,'abhishek',2000,5000);
let acc4=new CurrentAccount(400,'vaibhav',2000,1000);
    
export function getTotalCashInBank(){
        var a=acc1.getBalance();
        var b=acc2.getBalance();
        var c=acc3.getBalance();
        var d=acc4.getBalance();
        console.log(a+b+c+d);
    
}