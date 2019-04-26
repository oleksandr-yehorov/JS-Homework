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
    dayValue = document.querySelector('.day-value');

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
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;    // місяць починається з нуля
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function(){
   let sum = 0;
   for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
        b = expensesItem[++i].value;
    if ((typeof(a) === 'string') && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
    } else {
        i--;
        }
    };
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i <= optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;       
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    };    
});

countBtn.addEventListener('click', function(){
    if (appData.budget != undefined){
        appData.moneyPerDay = (appData.budget/30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Мінімальний рівень достатку';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Середній рівень достатку';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Високий рівень достатку';
        } else {
            levelValue.textContent = 'Помилка!';
        };
    } else {
        dayBudgetValue.textContent = 'Помилка!';
    }
   
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        
    },
    detectDayBudget: function() {
        
        alert("Щоденний бюджет: " + appData.moneyPerDay);
    },
    chooseOptExpenses: function() {
        
    },
    detectLevel: function() {

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