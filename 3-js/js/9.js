 console.log("Задача 9");
 console.log("Дана строка с числами разделенными пробелами");
 console.log("«4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57».");
 console.log("Найдите самое большое и самое маленькое число в строке, используя цикл");
 console.log("===========================================================================");

 let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
 let numbers = str.split(" ");
 let maxNumber = parseFloat(numbers[0]);
 let minNumber = parseFloat(numbers[0]);

 for (let i = 1; i < numbers.length; i++) {
     let num = parseFloat(numbers[i]);

     if (num > maxNumber) {
         maxNumber = num;
     }

     if (num < minNumber) {
         minNumber = num;
     }
 }

 console.log(`Максимальное число: ${maxNumber}`);
 console.log(`Минимальное число: ${minNumber}`);


 console.log("");
 console.log("");