function info(name, birth, current) {
    let age = current - birth;
    return name + ' , Ваш возраст ' + age;
}

let name = prompt('Введите ваше имя:');
let birth = +prompt('Введите год рождения:');
let current = +prompt('Введите нынешний год:');

let notification = info(name, birth, current)
alert(notification);

function random(min,max) {
    return Math.floor(Math.random() * ( max + 1 - min ) + min)
}

function operators() {
    let operators = ['+', '-', '*', '/'];
    return Math.floor(Math.random() * operators)
}

function examples(count, a, b) {
    for(let i = 1; i <= count;i++) {
        let one = random(a,b)
        let two = random(a,b)
        let operators = random();
}
let example = +prompt('Введите количество примеров')
switch (example) {
    case '+':
        example = a + b;
        break;
     case '-':
        example = a - b;
        break;
     case '*':
        example = a * b;
        break;
    case '/':
        example = a / b;
        break;
    default:
        break;
}
let info = +prompt(`${i}) Сколько будет: ${num1} ${operator} ${num2} = ?`);
let word = info == example ? 'Ваш ответ верный' : 'Неверно. Правильный ответ'
console.log(`${a} ${operator} ${b} = ${example}. Ваш ответ: ${info}. ${word}`);
}

  
  