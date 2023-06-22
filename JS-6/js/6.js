console.log("Задача 6");
console.log(" Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.");
console.log("Для решения этой задачи напишите функцию, ");
console.log("которая будет добавлять 0 перед днями и месяцами,");
console.log("которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).");
console.log("========= РЕШЕНИЕ =====================================================================");

      function addZero(i) {
          if (i < 10) {
              i = "0" + i;
          }
          return i;
      }

      let date = new Date();
      let day = addZero(date.getDate());
      let month = addZero(date.getMonth() + 1);
      let year = date.getFullYear();
      let hours = addZero(date.getHours());
      let minutes = addZero(date.getMinutes());
      let seconds = addZero(date.getSeconds());

      document.getElementById(
          "date-time"
      ).innerHTML = `${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;

      console.log(`${hours}:${minutes}:${seconds} ${day}.${month}.${year}`);





console.log("");
console.log("");
