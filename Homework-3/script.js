let money, time;

function start() {
    money = +prompt('Ваш бюджет на місяць?', '');
    time = prompt('Введіть дату у форматі YYYY-MM-DD:', '');
    while (isNan(money) || money === '' || money === null) {
        money = +prompt('Ваш бюджет на місяць?', '');
    }
}

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

// for ...

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

// let i = 0;

// do...while

/*do {
    let a = prompt('Введіть обов\'язкову статтю видатків у цьому місяці:', ''),
    b = prompt('В яку суму обійдеться?', '');
    if ((typeof(a) === 'string') && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
    } else {
        i--;
    }
    i++;
    } while (i<2);*/

// while...

/*while (i<2) {
    let a = prompt('Введіть обов\'язкову статтю видатків у цьому місяці:', ''),
    b = prompt('В яку суму обійдеться?', '');
    if ((typeof(a) === 'string') && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
    } else {
        i--;
    }
    i++;
};*/


appData.moneyPerDay = appData.budget/30;

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

    
