console.log("Задача 8");
console.log("Напишите ф-цию, которая рисует равнобедренный треугольник иззвездочек:");
console.log("");
console.log("    *");
console.log("   ***");
console.log("  *****");
console.log(" *******");
console.log("*********");
console.log("Кол-во рядов должно вводиться с клавиатуры.");
console.log("Доп., напишите такую же фцию, но которая выведет перевернутый треугольник."
);
console.log("====== РЕШЕНИЕ ==================================================================");

function drawTriangle() {
  let rows = prompt("Введите количество строк:");

  for (let i = 1; i <= rows; i++) {
    let row = '';
    for (let j = 1; j <= rows - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      row += '*';
    }
   console.log(row);
  }
}

function drawReversedTriangle() {
  let rows = prompt("Введите количество строк:");

  for (let i = rows; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= rows - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      row += '*';
    }
    console.log(row);
  }
}

drawTriangle();
drawReversedTriangle();




console.log("");
console.log("");