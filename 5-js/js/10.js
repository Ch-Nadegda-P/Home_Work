console.log("Задача 10");
console.log("Дано число. Сложите его цифры. Если сумма получилась более 9-ти,");
console.log("опять сложите его цифры. И так, пока сумма не станет ");
console.log("однозначным числом(9 и менее). Исп. Рекурсию.");
console.log("== РЕШЕНИЕ ========================================================================");

function sumDigits(num) {
    let sum = 0;

    
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

   
    if (sum > 9) {
        return sumDigits(sum);
    }

    return sum;
}

let num = prompt("Введите число:");
console.log(sumDigits(num));







console.log("");
console.log("");
