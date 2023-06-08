console.log("Задача 13");
console.log("Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты, ");
console.log("неиспользуя регулярные выражения. Почта верна при условии:");
console.log("");
console.log("a. весь адрес не должен содержать русские буквы и спецсимволы,");
console.log("кроме одной «собачки», знака подчеркивания, дефиса и точки, ");
console.log("причем они не могут быть первыми и последними в адресе, и идти подряд, ");
console.log(" например: «..», «@.», «.@» или «@@», «_@», «@-», «--» и т.п");
console.log("");
console.log("b. имя эл. почты (до знака @) должно быть длиной более 2 символов,");
console.log("причем имя может содержать только буквы, цифры,");
console.log("но не быть первыми и единственными в имени, и точку;");
console.log("");
console.log("c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)");
console.log("не может быть длиной менее 2 и более 11 символов.");
console.log("== РЕШЕНИЕ ====================================================================================");


function checkEmail() {
    let email = prompt("Введите свой адрес электронной почты:");
    let atSymbolIndex = email.indexOf("@");
    let lastPeriodIndex = email.lastIndexOf(".");
    let topLevelDomain = email.slice(lastPeriodIndex + 1);
    let localPart = email.slice(0, atSymbolIndex);
    let domainPart = email.slice(atSymbolIndex + 1, lastPeriodIndex);

    if (atSymbolIndex === -1 || lastPeriodIndex === -1) {
        alert(
            "Неверный адрес электронной почты: отсутствует символ @ или точка"
        );
        return false;
    }

    if (
        atSymbolIndex === 0 ||
        atSymbolIndex === email.length - 1 ||
        lastPeriodIndex === 0 ||
        lastPeriodIndex === email.length - 1
    ) {
        alert(
            "Недопустимый адрес электронной почты: символ @ или точка не могут быть первым или последним символом"
        );
        return false;
    }

    if (/[^a-zA-Z0-9@._-]/.test(email)) {
        alert(
            "Недопустимый адрес электронной почты: содержит недопустимые символы"
        );
        return false;
    }

    if (/[.@_-]{2}/.test(email)) {
        alert(
            "Недопустимый адрес электронной почты: два специальных символа не могут отображаться последовательно"
        );
        return false;
    }

    if (localPart.length < 3) {
        alert(
            "Недопустимый адрес электронной почты: локальная часть должна быть длиннее 2 символов"
        );
        return false;
    }

    if (/^[0-9.]+$/.test(localPart)) {
        alert(
            "Неверный адрес электронной почты: локальная часть не может содержать только цифры и точки"
        );
        return false;
    }

    if (topLevelDomain.length < 2 || topLevelDomain.length > 11) {
        alert(
            "Недопустимый адрес электронной почты: длина домена верхнего уровня должна составлять от 2 до 11 символов"
        );
        return false;
    }

    alert("Действительный адрес электронной почты");
    return true;
}

checkEmail();



console.log("");
console.log("");
