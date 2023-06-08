console.log("Задача 5");
console.log("ВСоставьте массив дней недели (ПН, ВТ, СР и т.д.). ");
console.log("С помощью цикла for выведите вседни недели,");
console.log("а выходные дни выведите жирным.");
console.log("=======================================================================");

let daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
for (let i = 0; i < daysOfWeek.length; i++) {
   
    if (daysOfWeek[i] === "СБ" || daysOfWeek[i] === "ВС") {

        console.log("%c" + daysOfWeek[i], "font-weight: bold");
    } else {
        console.log(daysOfWeek[i]);
    }
}




console.log("");
console.log("");
