class User {
    constructor(data) {
        this.data = data;
    }

    edit(obj) {
        this.data = { ...this.data, ...obj };
    }

    get() {
        return this.data;
    }
}

class Contacts {
    constructor() {
        this.data = [];
    }

    add(user) {
        this.data.push(new User(user));
    }

    edit(id, obj) {
        const user = this.data.find((user) => user.data.id === id);
        if (user) user.edit(obj);
    }

    remove(id) {
        this.data = this.data.filter((user) => user.data.id !== id);
    }

    get() {
        return this.data.map((user) => user.get());
    }
}

class ContactsApp extends Contacts {
    constructor() {
        super();
        this.app = document.querySelector("#app");
        this.render();
    }

    render() {
        this.app.innerHTML = `
                    <h1>Контакты</h1>
                    <form id="form">
                        <input type="hidden" name="id" />
                        <input type="text" name="name" placeholder="Имя" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="text" name="address" placeholder="Адрес" />
                        <input type="text" name="phone" placeholder="Телефон" />
                        <button type="submit">Сохранить</button>
                    </form>
                    <ul id="contacts"></ul>
                `;

        this.form = document.querySelector("#form");
        this.contactsList = document.querySelector("#contacts");

        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = Object.fromEntries(new FormData(this.form).entries());
            if (data.id) {
                this.onEdit(data.id, data);
            } else {
                this.onAdd(data);
            }
            this.form.reset();
        });

        this.get();
    }

    onAdd(data) {
        super.add(data);
        this.get();
    }

    onEdit(id, data) {
        super.edit(id, data);
        this.get();
    }

    onRemove(id) {
        super.remove(id);
        this.get();
    }

    get() {
        this.contactsList.innerHTML = "";
        super.get().forEach((user) => {
            const li = document.createElement("li");
            li.innerHTML = `
                        ${user.name} - ${user.email} - ${user.address} - ${user.phone}
                        <button data-id="${user.id}">Редактировать</button>
                        <button data-id="${user.id}">Удалить</button>
                    `;
            li.querySelectorAll("[data-id]").forEach((button) =>
                button.addEventListener("click", (event) => {
                    const id = event.target.getAttribute("data-id");
                    const user = super.get().find((user) => user.id === id);
                    if (event.target.textContent === "Редактировать") {
                        Object.entries(user).forEach(([key, value]) => {
                            this.form[key].value = value;
                        });
                    } else if (event.target.textContent === "Удалить") {
                        if (confirm("Вы уверены?")) {
                            this.onRemove(id);
                        }
                    }
                })
            );
            this.contactsList.appendChild(li);
        });
    }
}

new ContactsApp();
