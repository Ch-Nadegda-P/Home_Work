console.log("Задача 8");
console.log("Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0]");
console.log("(выведите в обратном порядке),используя цикл while и метод reverse.");
console.log("========================================================================");

let arr3 = [12, false, "Текст", 4, 2, -5, 0];


let i = arr3.length - 1;
while (i >= 0) {
    console.log(arr3[i]);
    i--;
}


let reversedArr = arr3.reverse();
console.log(reversedArr);

console.log("");
console.log("");