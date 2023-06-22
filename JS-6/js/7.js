console.log("Задача 7");
console.log(" Дана строка 'aa aba abba abbba abca abea'.");
console.log(" Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону:");
console.log("буква 'a', буква 'b' любое количество раз, буква 'a'.");

console.log("==== РЕШЕНИЕ ==============================================================================");

const $str = "aa aba abba abbba abca abea";
const regex = /ab+a/g;

console.log($str.match(regex));





console.log("");
console.log("");
