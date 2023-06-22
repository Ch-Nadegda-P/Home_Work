
console.log("Задача 1");
console.log("Дана строка 'aaa@bbb@ccc'. Замените все @ на !");
console.log("с помощью глобального поиска и замены.");
console.log("==== РЕШЕНИЕ ========================================================");

let str = "aaa@bbb@ccc";
str = str.replace(/@/g, "!");

console.log(str);



console.log("");
console.log("");