export class UserSettingsView extends HTMLElement {

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: "open" })

        this.shadow.innerHTML =` 
         <form id="create"> 
        <h1>Create user</h1> 
        <input name="name" placeholder="username" />
        <input name="password" placeholder="password" />
        <button type="submit">Create User</button>
        </form>
        
        <form id="edit"> 
        <h1>Edit user</h1> 
        <input name="name" placeholder="username" />
        <input name="password" placeholder="password" />
        <input name="newname" placeholder="new username"/>
        <input name="newpassword" placeholder="new password"/>
        <button type="submit">Edit user</button>
        </form>

        <form id="delete"> 
        <h1>Delete user</h1> 
        <input name="name" placeholder="username" />
        <input name="password" placeholder="password" />
        <button type="submit">Delete user</button>
        </form>
        `;


        const CreateForm = this.shadowRoot.getElementById("create");
        console.log(CreateForm);
        const EditForm = this.shadowRoot.getElementById("edit");
        const DeleteForm = this.shadowRoot.getElementById("delete");

        CreateForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
               const formData = new FormData(CreateForm);
               const Form = Object.fromEntries(formData.entries()) 
            const CreateUserEvent = new CustomEvent("CreateUserEvent",
                { composed: true, bubbles: true, detail: Form })
            this.dispatchEvent(CreateUserEvent)
        })

    
    }
}