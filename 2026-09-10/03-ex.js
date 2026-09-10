/**
 * 3. Написать функцию проверки знания таблицы умножения. 
 * Программа должна вывести 10 примеров и выставить оценку: 
 * за 10 правильных ответов - "отлично", 
 * за 8 или 9 правильных ответов - "хорошо", 
 * за 6 или 7 правильных ответов - "удовлетворительно", 
 * остальные варианты - "плохо". (Примеры должны генерироваться рандомно!). 
 * При решении задачи использовать цикл for.
 */

function multiplicationTable() {
    let correctAnswers = 0
    for (let i = 1; i < 11; i++) {
        let frstMultiplier = Math.floor(Math.random() * 9 + 1)
        let scndMultiplier = Math.floor(Math.random() * 9 + 1)
        let answer = +prompt(`${i}/10 | Solve: ${frstMultiplier} * ${scndMultiplier}`)
        if (answer === frstMultiplier * scndMultiplier) {
            correctAnswers += 1;
        }
    }
    switch (true) {
        case correctAnswers === 10:
            alert('Отлично.')
            break
        case correctAnswers >= 8:
            alert('Хорошо.')
            break
        case correctAnswers >= 6:
            alert('Удовлетворительно.')
            break
        default:
            alert('Плохо.')
    }
}

