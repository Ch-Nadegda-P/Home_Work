
console.log("Задача 2");
console.log(" В переменной date лежит дата в формате 2025-12-31. ");
console.log("Преобразуйте эту дату в формат 31/12/2025.");
console.log("===== РЕШЕНИЕ ==================================================");

let _date = '2025-12-31';
let _newDate = _date.split('-').reverse().join('/');
console.log(_newDate);


console.log("");
console.log("");
