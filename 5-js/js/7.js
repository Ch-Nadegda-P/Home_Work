console.log("Задача 7");
console.log("Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенныециклы):");
console.log("Пример");
console.log("");
console.log("1");
console.log("22");
console.log("333");
console.log("4444");
console.log("55555");
console.log("666666");
console.log("7777777");
console.log("88888888");
console.log("999999999");
console.log("");
console.log("Кол-во рядов должно вводиться параметром. ");
console.log("Если пользователь ввел доп.параметр, непредусмотренный ф-цией ");
console.log("по умолчанию - один любой символ,кроме пробела,");
console.log("то пирамида должна быть нарисована этим символом,");
console.log("Пример");
console.log("");
console.log("*");
console.log("**");
console.log("***");
console.log("****");
console.log("*****");
console.log("******");
console.log("*******");
console.log("********");
console.log("*********");
console.log("==== РЕШЕНИЕ ==============================================================================");

function drawPyramid() {
    let rows = prompt("Введите количество строк:");
    let char = prompt("Введите символ для рисования пирамиды (необязательно):");
    for (let i = 1; i <= rows; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += char || i;
        }
        console.log(row);
    }
}

drawPyramid();





console.log("");
console.log("");
