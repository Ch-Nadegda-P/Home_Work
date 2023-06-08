let days = Number(
    prompt('Введите количество дней,')
);

let years = days / 365;
if (years >= 1) {
  console.log(years + " года(лет)");
} else {
  console.log("Меньше года");
}

let months = days / 31;
if (months >= 1) {
  console.log(months + " месяца(ев)");
} else {
  console.log("Меньше месяца");
}

let weeks = days / 7;
if (weeks >= 1) {
  console.logweeks + " недели(ль)";
} else {
  console.log("Меньше недели");
}

let hours = days * 24;
console.log(hours + " часы(ов)");

let minutes = days * 24 * 60;
console.log(minutes + " минут(ы)");

let seconds = days * 24 * 60 * 60;
console.log(seconds + " секунды(а)");
