console.log("Задача 4");
console.log(" Напишите две функции: первая ф-ция должна возвращать массив");
console.log("с числовыми значениями,");
console.log("диапазон которых должен вводиться пользователемс клавиатуры;");
console.log(" вторая – выводить полученный массив.");
console.log("===== РЕШЕНИЕ ================================================");


function generateArray() {
  const start = +prompt("Введите начальное число диапазона:");
  const end = +prompt("Введите конечное число диапазона:");
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

function printArray(arr) {
  console.log(arr);
}

const numbers = generateArray();
printArray(numbers);





console.log("");
console.log("");

