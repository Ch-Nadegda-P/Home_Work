console.log("Задача 3");
console.log("помощью цикла найдите сумму чисел от 0 до 100.");
console.log("Создайте новый массив и заполните его значениями от 23 до 57,");
console.log("используя цикл for иwhile. Выведите оба массива.");
console.log("С помощью цикла for найдите сумму элементов этогомассива.");
console.log("Запишите ее в переменную result и выведите.");
console.log("=================================================");


let arrFor = [];
for (let i = 23; i <= 57; i++) {
  arrFor.push(i);
}


let arrWhile = [];
let j = 23;
while (j <= 57) {
  arrWhile.push(j);
  j++;
}


console.log(arrFor);
console.log(arrWhile);


let _result = 0;
for (let i = 0; i < arrFor.length; i++) {
  _result += arrFor[i];
}


console.log(_result);


console.log("");
console.log("");