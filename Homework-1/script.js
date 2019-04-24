let money = +prompt('Ваш бюджет на місяць?', ''),
    time = prompt('Введіть дату у форматі YYYY-MM-DD:', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let a1 = prompt("Введіть обов\'язкову статтю видатків у цьому місяці:", ''),
    a2 = prompt('В яку суму обійдеться?', ''),
    a3 = prompt("Введіть обов\'язкову статтю видатків у цьому місяці:", ''),
    a4 = prompt('В яку суму обійдеться?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert("Щоденний бюджет: " + appData.budget/30);
