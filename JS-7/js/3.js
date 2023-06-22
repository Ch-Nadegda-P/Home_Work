console.log("Задача 3");
console.log("Использую полученные знания, реализуйте экземпляр любого объекта.");
console.log("Объект должен иметь, как внутренние,");
console.log("так и доступные для пользователя, свойства и методы.");
console.log("");
console.log("Примеры объектов:");
console.log("");
console.log("Контакты.");
console.log("Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл. почта),");
console.log("проверка введенной информации,");
console.log("");
console.log("например:");
console.log("проверить возраст – должен быть целым неотрицательным числом больше 18,");
console.log("вывод информации о конкретном контакте, вывод всех контактов.");
console.log("");
console.log("==== РЕШЕНИЕ =============================================");

const form = document.querySelector("#add-contact-form");
const contactsList = document.querySelector("#contacts-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.querySelector("#name-input");
    const ageInput = document.querySelector("#age-input");
    const phoneInput = document.querySelector("#phone-input");
    const emailInput = document.querySelector("#email-input");

    if (ageInput.value < 18 || !Number.isInteger(Number(ageInput.value))) {
        alert("ПОТЕРПИ: Тебе нужно немного подрости!!!");
        return;
    }

    const newContact = document.createElement("li");
    newContact.textContent = `${nameInput.value}, ${ageInput.value} лет, ${phoneInput.value}, ${emailInput.value}`;

    nameInput.value = "";
    ageInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";

    contactsList.appendChild(newContact);
});



  



  




console.log("");
console.log("");
