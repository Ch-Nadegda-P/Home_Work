
console.log("Задача 2");
console.log("Использую полученные знания, реализуйте экземпляр любого объекта.");
console.log("Объект должен иметь, как внутренние,");
console.log("так и доступные для пользователя, свойства и методы.");
console.log("");
console.log("Примеры объектов:");
console.log("");
console.log("Лампочка.");
console.log("Возможные методы: ввод информации о лампочке (мощность, стоимость электроэнергии),");
console.log(" вкл./выкл. лампочки, получение расхода за горение лампочки, счетчик горения лампочки.");
console.log("");
console.log("===== РЕШЕНИЕ ==================================================");


      const lamp = {
        on: false,
        power: 0,
        rate: 0,
        consumption: 0,
        counter: 0,
        turnOn() {
          this.on = true;
          this.updateDisplay();
        },
        turnOff() {
          this.on = false;
          this.updateDisplay();
        },
        reset() {
          this.consumption = 0;
          this.counter = 0;
          this.updateDisplay();
        },
        updateDisplay() {
          document.getElementById('onoff').textContent = this.on ? 'Выкл' : 'Вкл';
          document.getElementById('consumption').textContent = this.consumption.toFixed(2);
          document.getElementById('counter').textContent = this.counter.toFixed(2);
        },
        calculateConsumption() {
          if (this.on) {
            const consumption = this.power * this.rate / 1000;
            this.consumption += consumption;
            this.counter += 1 / 3600;
            this.updateDisplay();
          }
        }
      };

      document.getElementById('onoff').addEventListener('click', () => {
        if (lamp.on) {
          lamp.turnOff();
        } else {
          lamp.turnOn();
        }
      });

      document.getElementById('reset').addEventListener('click', () => {
        lamp.reset();
      });

      document.getElementById('power').addEventListener('input', () => {
        lamp.power = parseFloat(document.getElementById('power').value);
      });

      document.getElementById('rate').addEventListener('input', () => {
        lamp.rate = parseFloat(document.getElementById('rate').value);
      });

      setInterval(() => {
        lamp.calculateConsumption();
      }, 1000);



console.log("");
console.log("");
