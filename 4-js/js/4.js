console.log("Задача 4");
console.log("Дан массив числами (строчного типа), например:");
console.log(" [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].");
console.log("Выведите на экран только те числа из массива,");
console.log("которые начинаются на цифру 1, 2 или5");
console.log("=====================================================");

let aArr = ["10", "20", "30", "50", "235", "3000"];
let reSult = aArr.filter(
    (num) => num.startsWith("1") || num.startsWith("2") || num.startsWith("5")
);
console.log(reSult);



console.log("");
console.log("");

