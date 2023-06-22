console.log("Задача 3");
console.log("Дана строка «Я учу javascript!».");
console.log("Вырежете из нее слово «учу» и слово «javascript»");
console.log("тремя разными способами (через substr, substring, slice).");
console.log("==== РЕШЕНИЕ =============================================");

let _str = "Я учу javascript!";

console.log("Используем метод substr()");
let substr1 = _str.substr(2, 3);
let substr2 = _str.substr(6);

console.log("Используем метод substring()».");
let substring1 = _str.substring(2, 5);
let substring2 = _str.substring(6);

console.log("Используем метод slice()");
let slice1 = _str.slice(2, 5);
let slice2 = _str.slice(6);

console.log(substr1);
console.log(substr2);
console.log(substring1);
console.log(substring2);
console.log(slice1);
console.log(slice2);

console.log("");
console.log("");
