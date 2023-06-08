console.log("Задача 6");
console.log("Напишите ф-цию, в которую передается массив с целыми числами.");
console.log("Верните новый массив, где останутся лежать только четные из этих чисел.");
console.log("Для этого используйте вспомогательную функцию isEven из предыдущей задачи.");
console.log("========= РЕШЕНИЕ =====================================================================");

function isEven(num) {
    return num % 2 === 0;
}

function getEvenNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = getEvenNumbers(myArray);
console.log(evenNumbers);





console.log("");
console.log("");
