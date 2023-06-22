
console.log("Задача 1");
console.log("Использую полученные знания, реализуйте экземпляр любого объекта.");
console.log("Объект должен иметь, как внутренние,");
console.log("так и доступные для пользователя, свойства и методы.");
console.log("");
console.log("Примеры объектов:");
console.log("");
console.log("Калькулятор.");
console.log("Возможные методы: вкл/выкл калькулятора,");
console.log("получение выражения для расчета или, а и б числа с операцией,");
console.log("вычисление выражения, показ результата расчета.");
console.log("");
console.log("Можно выдумать любой другой объект.");
console.log("Кол-во методов и свойств может быть любым, но не менее трех.");
console.log("==== РЕШЕНИЕ ========================================================");


const calculator = {
    isOn: false,
    input: "",
    operator: "",
    result: 0,

    turnOn: function () {
        this.isOn = true;
        document.getElementById("result").disabled = false;
    },

    turnOff: function () {
        this.input = "";
        this.operator = "";
        this.result = 0;
        this.isOn = false;
        document.getElementById("result").disabled = true;
        document.getElementById("result").value = "";
    },

    addToInput: function (value) {
        if (this.isOn) {
            this.input += value;
            document.getElementById("result").value = this.input;
        }
    },

    addOperator: function (operator) {
        if (this.isOn) {
            this.operator = operator;
            this.result = parseFloat(this.input);
            this.input = "";
        }
    },

    calculate: function () {
        if (this.isOn) {
            switch (this.operator) {
                case "+":
                    this.result += parseFloat(this.input);
                    break;
                case "-":
                    this.result -= parseFloat(this.input);
                    break;
                case "*":
                    this.result *= parseFloat(this.input);
                    break;
                case "/":
                    this.result /= parseFloat(this.input);
                    break;
            }
            document.getElementById("result").value = this.result.toString();
            this.input = "";
            this.operator = "";
        }
    },

    clear: function () {
        if (this.isOn) {
            this.input = "";
            this.operator = "";
            this.result = 0;
            document.getElementById("result").value = "";
        }
    },
};






console.log("");
console.log("");