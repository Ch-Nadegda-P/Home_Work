const aaA = 10;
const bB = 2;

const diff = aaA - bB;
const mult = aaA * bB;
const div = aaA / bB;
const sum = aaA + bB;

console.log(`Сумма:${sum}`);
console.log(`Разность:${diff}`);
console.log(`Произведение:${mult}`);
console.log(`Частное:${div}`);

if (sum > 1) {
    const square = sum * sum; 
    console.log(`Квадрат суммы:${square}`);
}
