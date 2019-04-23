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

for (let i = 0; i < 2; i++) {
    let a = prompt('Введіть обов\'язкову статтю видатків у цьому місяці:', ''),
        b = prompt('В яку суму обійдеться?', '');
    appData.expenses[a] = b;
}

alert(appData.budget/30);