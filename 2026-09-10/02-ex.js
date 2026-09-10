/**
 * 2. Напишите функцию, которая умеет определять 
 * количество цифр в любом натуральном числе. 
 * (Исходное число вводится с клавиатуры).
 */

function getNumLength() {
    let num = +prompt('2 | Enter num')
    let numLength = 0
    if (num <= 0) {
        alert(`Число должно быть положительным`)
        return
    }
    while (num != 0) {
        num = Math.floor(num / 10)
        numLength += 1
    }

    alert(`2 | result: ${numLength}`)
}

