let money, time;

function start() {
    money = +prompt('Ваш бюджет на місяць?', '');
    time = prompt('Введіть дату у форматі YYYY-MM-DD:', '');
    while (isNaN(money) ==true  || money == "" || money == null) {
        money = +prompt('Ваш бюджет на місяць?', '');
    };
};

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введіть обов\'язкову статтю видатків у цьому місяці:', ''),
            b = prompt('В яку суму обійдеться?', '');
        if ((typeof(a) === 'string') && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
        } else {
            i--;
        }
    };
};

chooseExpenses();

appData.moneyPerDay = (appData.budget/30).toFixed();

alert("Щоденний бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Мінімальний рівень достатку");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Середній рівень достатку");
} else if (appData.moneyPerDay > 2000) {
    console.log("Високий рівень достатку");
} else {
    console.log("Помилка!");
};

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Яка сума заощаджень?"),
            percent = +prompt("Під який процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Дохід за місяць з Вашого депозиту: " + appData.monthIncome);

    }
};

checkSavings();