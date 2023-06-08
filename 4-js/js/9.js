 console.log("Задача 9");
 console.log( "Напишите скрипт, считающий количество нулевых (пустых) элементов");
 console.log("в заданномцелочисленном массиве [5, 9, 21, , , 9, 78, , , , 6]");
 console.log("===========================================================================");

 let arr4 = [5, 9, 21, , , 9, 78, , , , 6];
 let count2 = 0;
 for (let i = 0; i < arr4.length; i++) {
     if (arr4[i] === undefined) {
         count2++;
     }
 }
 console.log(count2);




 console.log("");
 console.log("");