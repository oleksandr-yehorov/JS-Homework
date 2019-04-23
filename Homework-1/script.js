let money = prompt('Ваш бюджет на місяць?', ''),
    time = prompt('Введіть дату у форматі YYYY-MM-DD:', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let a1 = prompt('Введіть обов\'язкову статтю видатків у цьому місяці:', ''),
    a2 = prompt('В яку суму обійдеться?', ''),
    a3 = prompt('Введіть обов\'язкову статтю видатків у цьому місяці:', ''),
    a4 = prompt('В яку суму обійдеться?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

for (let i=0; i<=2; i++) {
    let a = prompt('Введіть обов\'язкову статтю видатків у цьому місяці:', ''),
        b = prompt('В яку суму обійдеться?', '');
    appData.expenses[a] = b;
}

alert(appData.budget/30);