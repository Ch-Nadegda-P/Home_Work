 console.log("Задача 9");
 console.log("Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия:");
 console.log("");
 console.log("- весь адрес не должен содержать русские буквы и спецсимволы,");
 console.log("кроме одной «собачки», знака подчеркивания, дефиса и точки;");
 console.log("");
 console.log("- имя эл. почты (до знака @) должно быть длиной более 2 символов,");
 console.log("причем имя может содержать только буквы, цифры, ");
 console.log("но не быть первыми и единственными в имени;");
 console.log("");
 console.log("- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)");
 console.log("не может быть длиной менее 2 и более 11 символов.");
 console.log("");
 console.log("Функция должна возвращать true или false.");
 console.log(" Используйте регулярные выражения.");

 console.log("==== РЕШЕНИЕ ==================================================================================");

 function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,11}$/;
  return regex.test(email);
}

console.log(validateEmail('example@example.com')); 
console.log(validateEmail('example@example.co.uk')); 
console.log(validateEmail('example@example')); 
console.log(validateEmail('example@.com')); 
console.log(validateEmail('example@com.')); 
console.log(validateEmail('example@com')); 
console.log(validateEmail('электронная_почта@example.com')); 






 console.log("");
 console.log("");