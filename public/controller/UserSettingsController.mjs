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
        target.dispatchevent(EditUserEvent)
    })


    target.appendChild(FormElement)
}

export default UserSettingsController