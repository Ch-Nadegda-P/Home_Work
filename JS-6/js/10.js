console.log("Задача 10");
console.log("Напишите ф-цию, которая из полного адреса с параметрами и без,");
console.log("например:");
console.log(" https://tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile&utm_medium=smartdo200#zag3 ,");
console.log("получит адрес доменного имени");
console.log("(https://tech.onliner.by),");
console.log("остальную часть адреса без параметров ");
console.log("(/2018/04/26/smart-do-200/),");
console.log("параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3).");
console.log("В адресе может и не быть каких-либо составляющих.");
console.log("Ф-ция должна возвращать массив.");
console.log("== РЕШЕНИЕ ========================================================================");

function parseUrl(url) {
  const regex = /^(https?:\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
  const matches = url.match(regex);
  return [matches[1], matches[2], matches[3], matches[4]];
}

console.log(parseUrl('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));

console.log(parseUrl('https://tech.onliner.by'));











console.log("");
console.log("");
