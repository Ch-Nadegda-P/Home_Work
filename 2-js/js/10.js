let dAy = Number(prompt("Введите число дня от 1 до 365"));

let month;
if (dAy <= 31) {
    month = 1;
} else if (dAy <= 59) {
    month = 2;
} else if (dAy <= 90) {
    month = 3;
} else if (dAy <= 120) {
    month = 4;
} else if (dAy <= 151) {
    month = 5;
} else if (dAy <= 181) {
    month = 6;
} else if (dAy <= 212) {
    month = 7;
} else if (dAy <= 243) {
    month = 8;
} else if (dAy <= 273) {
    month = 9;
} else if (dAy <= 304) {
    month = 10;
} else if (dAy <= 334) {
    month = 11;
} else {
    month = 12;
}

let season;
switch (
    month 
) {
    case 12:
    case 1:
    case 2:
        season = "зима";
        break;
    case 3:
    case 4:
    case 5:
        season = "весна";
        break;
    case 6:
    case 7:
    case 8:
        season = "лето";
        break;
    default:
        season = "осень";
}

console.log("Месяц: " + month);
console.log("Пора года: " + season);
