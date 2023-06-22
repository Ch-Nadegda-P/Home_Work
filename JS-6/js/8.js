console.log("Задача 8");
console.log("Напишите ф-цию строгой проверки ввода номер телефона в международном формате");
console.log("(<код страны> <код города или сети> <номер телефона>).");
console.log("Функция должна возвращать true или false.");
console.log("Используйте регулярные выражения.");

console.log("====== РЕШЕНИЕ ==================================================================");

function validatePhoneNumber(phoneNumber) {
  const regex = /^\d{1,4} \d{1,4} \d{1,10}$/;
  return regex.test(phoneNumber);
}

console.log(validatePhoneNumber('1 123 4567890')); 
console.log(validatePhoneNumber('12 1234 567890')); 
console.log(validatePhoneNumber('123 12345 67890')); 
console.log(validatePhoneNumber('1234 12345 67890'));
console.log(validatePhoneNumber('12345 12345 67890')); 




console.log("");
console.log("");