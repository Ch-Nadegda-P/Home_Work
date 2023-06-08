console.log("Задача 7");
console.log("Запросите у пользователя по очереди числовые значения при помощи");
console.log("prompt исохраните их в массив.");
console.log("Собирайте числа до тез пор пока пользователь не введет пустоезначение.");
console.log("Выведите получившийся массив на экран.");
console.log("Выполните сортировку чиселмассива, и выведите его на экран.");
console.log("==================================================================================");

const arr2 = [];

while (true) {
  const num1 = prompt('Введите число:');

  if (num1 === null || num1 === '') {
    break;
  }

  arr2.push(Number(num1));
}

console.log('Исходный массив:', arr2);

arr2.sort(function(a, b) {
  return a - b;
});

console.log('Отсортированный массив:', arr2);




console.log("");
console.log("");
