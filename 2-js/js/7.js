let n = Number(prompt("Введите число от 0 до 59"));

if (n >= 0 && n <= 14) {
    console.log("Первая четверть");
} else if (n >= 15 && n <= 29) {
    console.log("Вторая четверть");
} else if (n >= 30 && n <= 44) {
    console.log("Третья четверть");
} else if (n >= 45 && n <= 59) {
    console.log("Четвертая четверть");
} else {
    console.log("Ошибка! Число должно быть от 0 до 59.");
}
