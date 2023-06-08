console.log("Задача 12");
console.log(" Напишите ф-цию, запрашивающую имя, фамилия, отчество");
console.log("и номер группы студента и выводящую введённые данные в следующем виде:");
console.log("Пример");
console.log("");
console.log("****************************  *");
console.log("* Домашняя работа: «Функции»  *");
console.log("* Выполнил: студент гр. W4017 *");
console.log("*    Иванов Иван Иванович     *");
console.log("****************************  *");
console.log("");
console.log("Размер рамки должен определятся автоматически по самой длинной строке.");
console.log("Рамку вывести в консоль.");

console.log("== РЕШЕНИЕ ========================================================================");

function printStudentInfo() {
    let firstName = prompt("Введите свое имя:");
    let lastName = prompt("Введите свою фамилию:");
    let patronymic = prompt("Введите своё отчество:");
    let groupNumber = prompt("Введите номер вашей группы:");

    let title = "Домашняя работа: «Функции»";
    let studentInfo = `Выполнил: студент гр. ${groupNumber}`;
    let fullName = `${lastName} ${firstName} ${patronymic}`;

    let maxLength = Math.max(title.length, studentInfo.length, fullName.length);
    let frameLength = maxLength + 4;

    console.log("*".repeat(frameLength));
    console.log(
        `* ${title
            .padStart(title.length + (maxLength - title.length) / 2)
            .padEnd(maxLength)} *`
    );
    console.log(
        `* ${studentInfo
            .padStart(studentInfo.length + (maxLength - studentInfo.length) / 2)
            .padEnd(maxLength)} *`
    );
    console.log(
        `* ${fullName
            .padStart(fullName.length + (maxLength - fullName.length) / 2)
            .padEnd(maxLength)} *`
    );
    console.log("*".repeat(frameLength));
}

printStudentInfo();


console.log("");
console.log("");
