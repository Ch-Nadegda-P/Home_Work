console.log("Задача 6");
console.log("Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:");
console.log("2*2 = 4___2*3 = 6___2*4 = 8___2*5 = 10");
console.log("3*1 = 3___3*2 = 6___3*3 = 9___3*4 = 12");
console.log("Для решения задачи используйте вложенные циклы.");
console.log("==============================================================================");

for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

console.log("");
console.log("");
