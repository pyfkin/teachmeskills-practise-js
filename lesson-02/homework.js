//Homework: Need to create an application in order to check what Goods can buy Users with Bank's help. Steps:
// 1. Need to create 4 classes: App, User, Good, Bank.
// 2. User will have properties: firstName, lastName, income
// 3. Good will have properties: name, price
// 4. Bank will have properties: loanPercentagePerYear
// 5. Bank should have method: checkIfUserCanByGood(user, good). This method should check if user can take a loan for buying specific good.
//      It is depends on his income. If user can pay for the loan in 5 years, bank will definitely give him a loan, otherwise - not.
// 6. App should have method run(). This method should have 2 methods: generateUsers() and generateGoods().
//  Generate 10 random users and 10 random goods.
// 7. App should have another method: startCheck().
// This method will start the check procedure: check if every user can take a loan in order to purchase each good.
let users = [],
    goods = [];

class App {
    run(){
        this.generateUsers();
        this.generateGoods();
    }
    generateUsers() {
        let firstName, lastName, income;
        for (let i = 0; i < 2; i++) {
            firstName = prompt('Введите имя','');
            lastName = prompt('Введите фамилию','');
            income = prompt('Введите доход','');
            users.push(new User(firstName, lastName, income));
            // console.log(`${i+1} позователь: имя ${users[i].firstName}, фамилия ${users[i].lastName}, доход ${users[i].income}`);
        }
        return users;
    };
    generateGoods() {
        let name, price;
        for (let i = 0; i < 2; i++) {
            name = prompt('Введите название','');
            price = prompt('Введите стоимость','');
            goods.push(new Good(name, price));
        }
        return goods;
    };
    static startCheck(){
        return alert('Второй коммит');
    }
}

class User {
    constructor(firstName, lastName, income){
        this.firstName = firstName;
        this.lastName = lastName;
         this.income = income;
    }
    get getFirstName() { return this.firstName }
    set SetFirstName(firstName) { this.firstName = firstName}

    get getLastName() { return this.lastName }
    set setLastName(lastName) { this.lastName = lastName}

    get getIncome() { return this.income }
    set setIncome(income) { this.income = income}
}

class Good {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    get getName() { return this.name }
    set setName(name) { this.name = name}

    get getPrice() { return this.price }
    set setPrice(price) { this.price = price}
}

class Bank {
    get loanPercentagePerYear() { return this.prop }
    set loanPercentagePerYear(prop) { this.amount = prop}

    checkIfUserCanByGood(user, good){}
}

let app = new App();
app.run();
app.startCheck();

