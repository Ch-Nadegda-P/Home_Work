console.log("Задача 5");
console.log("Сделайте функцию isEven() (even - это четный),");
console.log("которая параметром принимает целое число и проверяет: четное оно или нет.");
console.log(" Если четное - пусть функция возвращает true, если нечетное — false.");
console.log("==== РЕШЕНИЕ ===================================================================");

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(12));
console.log(isEven(25));




console.log("");
console.log("");
