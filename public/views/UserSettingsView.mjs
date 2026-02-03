export class UserSettingsView extends HTMLElement {

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: "open" })

        const CreateHeader = document.createElement("h1");
        CreateHeader.innerText = "Create User";
        const CreateUserForm = document.createElement("Form");
        const CreateName = document.createElement("input");
        CreateName.placeholder = "username";
        const CreatePassword = document.createElement("input");
        CreatePassword.placeholder = "password";
        const CreateUserBtn = document.createElement("button");
        CreateUserBtn.innerText = "Create User"

        CreateUserForm.appendChild(CreateHeader);
        CreateUserForm.appendChild(CreateName);
        CreateUserForm.appendChild(CreatePassword);
        CreateUserForm.appendChild(CreateUserBtn);
        this.shadow.appendChild(CreateUserForm);

        const EditHeader = document.createElement("h1");
        EditHeader.innerText = "Edit User";
        const EditUserForm = document.createElement("Form");
        const EditName = document.createElement("input");
        EditName.placeholder = "username";
        const EditPassword = document.createElement("input");
        EditPassword.placeholder = "password";
        const EditUserBtn = document.createElement("button");
        EditUserBtn.innerText = "Edit User"

        EditUserForm.appendChild(EditHeader);
        EditUserForm.appendChild(EditName);
        EditUserForm.appendChild(EditPassword);
        EditUserForm.appendChild(EditUserBtn);
        this.shadow.appendChild(EditUserForm);

        const DeleteHeader = document.createElement("h1");
        DeleteHeader.innerText = "Delete User";
        const DeleteUserForm = document.createElement("Form");
        const DeleteName = document.createElement("input");
        DeleteName.placeholder = "username";
        const DeletePassword = document.createElement("input");
        DeletePassword.placeholder = "password";
        const DeleteUserBtn = document.createElement("button");
        DeleteUserBtn.innerText = "Delete User"

        DeleteUserForm.appendChild(DeleteHeader);
        DeleteUserForm.appendChild(DeleteName);
        DeleteUserForm.appendChild(DeletePassword);
        DeleteUserForm.appendChild(DeleteUserBtn);
        this.shadow.appendChild(DeleteUserForm);



        CreateUserBtn.addEventListener("click", (evt) => {
            evt.preventDefault();
            const Form = new FormData(CreateUserForm)
            const CreateUserEvent = new CustomEvent("CreateUserEvent",
                { composed: true, bubbles: true, detail: { Form } })
            this.dispatchEvent(CreateUserEvent)
        })

        EditUserBtn.addEventListener("click", () => {
            const CreateUserEvent = new CustomEvent("EditUserEvent",
                { composed: true, bubbles: true, detail: { name: CreateName.value, password: CreatePassword.value } })
            this.dispatchEvent(CreateUserEvent)
        })

        DeleteUserBtn.addEventListener("click", () => {
            const CreateUserEvent = new CustomEvent("DeleteUserEvent",
                { composed: true, bubbles: true, detail: { name: CreateName.value, password: CreatePassword.value } })
            this.dispatchEvent(CreateUserEvent)
        })
    }
}