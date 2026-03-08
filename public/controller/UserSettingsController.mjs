import loadView from "../viewLoader.mjs";
import find from "../findElement.mjs";

let viewName = "UserSettingsView";


const template = await loadView(viewName);

function UserSettingsController(target) {

    let __target = target;
    render(target)
}

function render(target) {

    target.innerHTML = "";
    const FormElement = document.importNode(template.content, true);

    const loginForm = find("#login", FormElement);
    loginForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        const formData = new FormData(loginForm);
        const Form = Object.fromEntries(formData.entries());

        const CreateUserEvent = new CustomEvent("LoginUserEvent", { bubbles: true, composed: true, detail: Form });
        target.dispatchEvent(CreateUserEvent);
    })

    const createForm = find("#create", FormElement);
    createForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        const formData = new FormData(createForm);
        const Form = Object.fromEntries(formData.entries());

        const CreateUserEvent = new CustomEvent("CreateUserEvent", { bubbles: true, composed: true, detail: Form });
        target.dispatchEvent(CreateUserEvent);
    })

    const editForm = find("#edit", FormElement);
    editForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        const formData = new FormData(editForm);
        const Form = Object.fromEntries(formData.entries());

        const EditUserEvent = new CustomEvent("EditUserEvent", { bubbles: true, composed: true, detail: Form });
        target.dispatchEvent(EditUserEvent)
    })

    const deleteForm = find("#delete", FormElement);
    deleteForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        const formData = new FormData(deleteForm);
        const Form = Object.fromEntries(formData.entries());

        const DeleteUserEvent = new CustomEvent("DeleteUserEvent", { bubbles: true, composed: true, detail: Form });
        target.dispatchEvent(DeleteUserEvent)
    })


    const inputNames = ["username", "password", "newname", "newpassword"]

    for (let i = 0; i < inputNames.length; i++) {
        const inputName = find(`input[name="${inputNames[i]}"]`, FormElement);
        if (inputName.length === undefined) {
            inputName.placeholder = "navn";
        } else {
            for (let p = 0; p < inputName.length; p++) {
                inputName[p].placeholder = "navn"
            }
        }
    }

    const headerIDs = ["loginHeader", "createHeader", "editHeader", "deleteHeader"];

    for (let i = 0; i < headerIDs.length; i++) {
        const headerText = find(`#${headerIDs[i]}`, FormElement)
        headerText.innerText = "navn";
    }

    const buttonIDs = ["loginbtn", "createbtn", "editbtn","deletebtn"];

    for(let i = 0; i < buttonIDs.length; i++){
const buttonText = find(`#${buttonIDs[i]}`, FormElement);
buttonText.innerText = "navn";

    }






    target.appendChild(FormElement)
}

export default UserSettingsController