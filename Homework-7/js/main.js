let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0];
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn =  document.getElementsByTagName('button')[1],
    countBtn =  document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayvalue = document.querySelector('.day-value');

let money, time; 

startBtn.addEventListener('click', function() {
    time = prompt('Введіть дату у форматі YYYY-MM-DD:', '');
    money = +prompt('Ваш бюджет на місяць?', '');
    while (isNaN(money) ==true  || money == "" || money == null) {
        money = +prompt('Ваш бюджет на місяць?', '');
    };
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
});

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
        console.log("Способи додаткового заробітку: ");
        appData.income.forEach(function(item, i){
            i++;
            console.log(i + ": " + item);
        })
    },
    objAppData: function() {
        console.log("Наша програма містить в собі: ");
        for (let key in appData) {
            console.log(key + " : " + appData[key]);    
        }
    }
};

/*
appData.chooseExpenses();

appData.detectDayBudget();

appData.chooseOptExpenses();

appData.detectLevel();

appData.checkSavings();

appData.chooseIncome();

appData.objAppData();*/