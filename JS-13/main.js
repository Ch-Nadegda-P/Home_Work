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
        
        this.storage = JSON.parse(localStorage.getItem("contacts")) || [];
        if (this.storage.length === 0) {
            
            this.getData();
        } else {
            
            this.storage.forEach((user) => super.add(user));
            this.render();
        }
    }

    async getData() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        data.forEach((user) =>
            super.add({
                id: user.id.toString(),
                name: user.name,
                email: user.email,
                address: `${user.address.street}, ${user.address.suite}, ${user.address.city}`,
                phone: user.phone,
            })
        );
        
        this.storage = super.get();
        this.render();
    }

    set storage(data) {
        
        localStorage.setItem("contacts", JSON.stringify(data));
    }

    get storage() {
        
        return JSON.parse(localStorage.getItem("contacts")) || [];
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
                data.id = Date.now().toString();
                this.onAdd(data);
            }
            this.form.reset();
            this.form.querySelector("[name=id]").value = "";
        });

        this.get();
    }

    onAdd(data) {
        super.add(data);
        
        this.storage = super.get();
        this.get();
    }

    onEdit(id, data) {
        super.edit(id, data);
        
        this.storage = super.get();
        this.get();
    }

    onRemove(id) {
        super.remove(id);
        
        this.storage = super.get();
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
                            if (this.form[key]) this.form[key].value = value;
                        });
                        this.form.querySelector("[name=id]").value = id;
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
