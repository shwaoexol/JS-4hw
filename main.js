function info(name, birth, current) {
    let age = current - birth;
    return name + ' , Ваш возраст ' + age;
}

let name = prompt('Введите ваше имя:');
let birth = +prompt('Введите год рождения:');
let current = +prompt('Введите нынешний год:');

let notification = info(name, birth, current)
alert(notification);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomOperator(a, b) {
    let operator = random(1, 4);
    let result;
    let symbol;

    if (operator === 1) {
        result = a + b;
        symbol = '+';
    } else if (operator === 2) {
        result = a - b;
        symbol = '-';
    } else if (operator === 3) {
        result = a * b;
        symbol = '*';
    } else {
        result = +(a / b);
        symbol = '/';
    }

    return { result: result, sign: sign };
}

let example = +prompt('Введите количество примеров');
let min = 1;
let max = 10;

for (let i = 1; i <= example; i++) {
    let a = random(min, max);
    let b = random(min, max);

    let operation = randomOperator(a, b);
    let user = +prompt(`${a} ${operation.symbol} ${b} = ?`);

    let message = (user === operation.result)
        ? 'Ваш ответ верный'
        : `Ваш ответ неверный. Правильный ответ: ${operation.result}`;

    console.log(`${a} ${operation.symbol} ${b} = ${operation.result}. Ваш ответ: ${user}. ${message}`);
}

