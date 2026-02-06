export class UserSettingsView extends HTMLElement {

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: "open" })

        this.shadow.innerHTML = ` 
         <form id="create"> 
        <h1>Create user</h1> 
        <input name="name" placeholder="username" />
        <input name="password" placeholder="password" />
        <input name="TOS" type="checkbox" id="TOS" name="TOS">
        <label for="TOS">  <a href="https://uiano-my.sharepoint.com/:w:/r/personal/filiplr_uia_no/_layouts/15/Doc.aspx?sourcedoc=%7B6657D567-407F-4503-9D6E-04210709FD86%7D&file=Terms%20of%20Service%20boardgameservice.docx&action=default&mobileredirect=true&DefaultItemOpen=1&wdOrigin=MAIL.SHELL%2CAPPHOME-WEB.FILEBROWSER.RECENT&wdPreviousSession=f3f598b4-2fc8-447c-a419-c36aa5359872&wdPreviousSessionSrc=AppHomeWeb&ct=1770221650664">Agree to Terms of Service</a> </label>
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

        EditForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const formData = new FormData(EditForm);
            const Form = Object.fromEntries(formData.entries())

            const EditUserEvent = new CustomEvent("EditUserEvent",
                { composed: true, bubbles: true, detail: Form })
            this.dispatchEvent(EditUserEvent)
        })

        DeleteForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const formData = new FormData(CreateForm);
            const Form = Object.fromEntries(formData.entries())

            const DeleteUserEvent = new CustomEvent("DeleteUserEvent",
                { composed: true, bubbles: true, detail: Form })
            this.dispatchEvent(DeleteUserEvent)
        })

    }
}