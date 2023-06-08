let S = 2000000; // размер ипотечного кредита в рублях
let p = 10; // процентная годовая ставка в процентах
let years = 5; // кол-во лет в годах

let monthlyPayment = S*p/100/12*(1+1/(Math.pow(1+p/100/12, 12*years) - 1));

let totalPayment = monthlyPayment*12*years;

let Pereplata = totalPayment-S;

console.log(
    "Переплата по кредиту состовляет" +
        ": " +
        Pereplata.toFixed(2) +
        " " +
        "рублей."
);