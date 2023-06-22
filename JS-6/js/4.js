console.log("Задача 4");
console.log("Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. ");
console.log("Найдите квадратный корень из суммы кубов его элементов.");
console.log("Для решения воспользуйтесь циклом for.");
console.log("===== РЕШЕНИЕ ================================================");

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
}

let result = Math.sqrt(sum);

console.log(result);







console.log("");
console.log("");

