console.log("Задача 11");
console.log("Дан массив с числами (передается параметром).");
console.log("Выведите последовательно его элементы, ");
console.log("используя рекурсию и не используя цикл.");
console.log("==== РЕШЕНИЕ ======================================================================");

function printArrayRecursive(arr, index) {
  if (index >= arr.length) { 
    return;
  }

  console.log(arr[index]);
  printArrayRecursive(arr, index + 1);
}

let arr = [1, 21, 18, 13, 5];
printArrayRecursive(arr, 0); 



console.log("");
console.log("");
