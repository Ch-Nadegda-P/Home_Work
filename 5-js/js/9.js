 console.log("Задача 9");
 console.log( "Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000.");
 console.log("==== РЕШЕНИЕ ==================================================================================");
 function getFibonacciNumbers() {
     let result = [0, 1];
     let nextNumber = result[result.length - 1] + result[result.length - 2];
     while (nextNumber <= 1000) {
         result.push(nextNumber);
         nextNumber = result[result.length - 1] + result[result.length - 2];
     }
     return result;
 }

 let fibonacciNumbers = getFibonacciNumbers();
 console.log(fibonacciNumbers); 






 console.log("");
 console.log("");