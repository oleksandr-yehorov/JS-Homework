let money, time; 
/*
function start() {
    money = +prompt('Ваш бюджет на місяць?', '');
    time = prompt('Введіть дату у форматі YYYY-MM-DD:', '');
    while (isNaN(money) ==true  || money == "" || money == null) {
        money = +prompt('Ваш бюджет на місяць?', '');
    };
};

start();
*/
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Щоденний бюджет: " + appData.moneyPerDay);
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Стаття необов\'язкових витрат: ", '');
            if ((typeof(a) === 'string') && typeof(a) != null
                && a != '' && a.length < 50) {
                    appData.optionalExpenses[i] = a;
            };
        };    
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Мінімальний рівень достатку");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Середній рівень достатку");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Високий рівень достатку");
        } else {
            console.log("Помилка!");
        };
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Яка сума заощаджень?"),
                percent = +prompt("Під який процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Дохід за місяць з Вашого депозиту: " + appData.monthIncome);
    
        };
    },
    chooseIncome: function() {
        let items = prompt("Що принесе додатковий дохід? (Перерахуйте через кому)", '');
        while ((items == '') || (items == null)) {
            items = prompt("Що принесе додатковий дохід? (Перерахуйте через кому)", '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Може щось ще?", ''));
        appData.income.sort();
    }
};

appData.chooseIncome();