console.log("Задача 5");
console.log("Выведите чётные числа от 8 до 56. Решить задание через while и for.");
console.log("=======================================================================");


for (let i = 8; i <= 56; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("-----------------------------");

let j = 8;

while (j <= 56) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

console.log("");
console.log("");
