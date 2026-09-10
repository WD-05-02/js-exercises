/**
 * 5. Написать функцию, которая переводит 
 * целое число из десятичной системы счисления 
 * в шестнадцатеричную, используя алгоритм деления 
 * на 16 (задачу решить без использования встроенных функций). 
 * При решении задачи использовать оператор switch
 */

/**
 * Такую бы функцию написал с входным параметром decNum,
 * но отказался только из-за ввода с клавиатуры, как в других задачах.
 */

function decToHex() {
    decNum = +prompt('Enter decimal num: ')
    hexNum = ""
    while (decNum > 0) {
        remainder = decNum % 16

        switch (remainder) {
            case 10: hexNum = 'A' + hexNum; break
            case 11: hexNum = 'B' + hexNum; break
            case 12: hexNum = 'C' + hexNum; break
            case 13: hexNum = 'D' + hexNum; break
            case 14: hexNum = 'E' + hexNum; break
            case 15: hexNum = 'F' + hexNum; break
            default: hexNum = remainder + hexNum; break
        }

        decNum = (decNum - remainder) / 16
    }
    alert(`Hex num = ${hexNum}`)
}