/**
 * 1. Напишите функцию, которая находит все делители числа, 
 * кроме единицы и самого числа. (Исходное число вводится с клавиатуры).
 *  При решении задачи использовать цикл for.
 */

function getDivisors() {
    const upperBound = +prompt('1 | Enter num: ')
    let divisors = [];

    for (let i = 2; i < upperBound; i++)
        if (upperBound % i === 0) {
            divisors.push(i)
        }

    alert(`1 | result: ${divisors.join(', ')}`)
}
