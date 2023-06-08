console.log("Задача 10");
console.log("Найдите сумму элементов массива между двумя нулями");
console.log("(первым и последним нулямив массиве).");
console.log("Если двух нулей нет в массиве, то выведите ноль.");
console.log("В массиве может бытьболее 2х нулей.");
console.log("Пример массива:");
console.log("[48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или[1,8,0,13,76,8,7,0,22,0,2,3,2].");
console.log("==========================================================================");

let arr5 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
let firstZeroIndex = arr5.indexOf(0);
let lastZeroIndex = arr5.lastIndexOf(0);

if (
    firstZeroIndex !== -1 &&
    lastZeroIndex !== -1 &&
    firstZeroIndex !== lastZeroIndex
) {
    let sum2 = 0;
    for (let i = firstZeroIndex + 1; i < lastZeroIndex; i++) {
        sum2 += arr5[i];
    }
    console.log(sum2);
} else {
    console.log(0);
}





console.log("");
console.log("");
