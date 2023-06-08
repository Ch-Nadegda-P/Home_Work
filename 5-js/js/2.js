
console.log("Задача 2");
console.log("Сделайте функцию, которая возвращает куб числа и его квадрат.");
console.log("Число передается параметром.");
console.log("===== РЕШЕНИЕ ==================================================");

function cubeAndSquare(num) {
    return {
        cube: Math.pow(num, 3),
        square: Math.pow(num, 2),
    };
}

let result = cubeAndSquare(30);

console.log(result.cube); 
console.log(result.square);



console.log("");
console.log("");
