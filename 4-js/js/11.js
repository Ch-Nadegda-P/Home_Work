console.log("Задача 11");
console.log("Нарисовать равнобедренный треугольник из символов ^.");
console.log("Высоту выбираетпользователь. Например: высота = 5, на экране:");
console.log("Пример");
console.log("    ^");
console.log("   ^^^");
console.log("  ^^^^^");
console.log(" ^^^^^^^");
console.log("^^^^^^^^^");
console.log("==========================================================================");

let n = 10;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
        row += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        row += "^";
    }
    console.log(row);
}

console.log("");
console.log("");
