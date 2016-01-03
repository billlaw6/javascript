//数据结构与算法JAVASCRIPT语言描述版
//2016-01-01

//JS的对象（Class）也用函数实现

function Checking(amount){
    this.balance = amount; //属性
    this.deposit = deposit; //方法
    this.withdraw = withdraw; //方法
    this.toString = toString; //方法
}

function deposit(amount){
    this.balance += amount;
}

function withdraw(amount){
    if (amount <= this.balance ){
        this.balance -= amount;
    }
    if (amount > this.balance ){
        print("Insufficient funds");
    }
}

function toString(){
    return "Balance: " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
print(account.toString());
account.withdraw(750);
print(account.toString());
account.withdraw(850);
print(account.toString());

