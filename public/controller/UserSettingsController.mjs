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
    console.log(template.content);
    const FormElement = document.importNode(template.content, true);
    console.log("does form element exist: ", FormElement)



    const createBtn = find("#createbtn", FormElement);
    createBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        const CreateUserEvent = new CustomEvent("CreateUserEvent", { bubbles: true, composed: true, detail: { name: createName, psw: createPassword,  TOS: tosCheckbox} })
            target.dispatchEvent(CreateUserEvent)
        
    })

    const editBtn = find("#editbtn", FormElement);
    editBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        console.log("editbtn")
    })

    const deleteBtn = find("#deletebtn", FormElement);
    deleteBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        console.log("deletebtn")
    })

    //submit function parameters


    const createName = find("#createname", FormElement).value;
    const createPassword = find("#createpassword", FormElement).value;
    const tosCheckbox = find("#tosagree", FormElement).value;

    const oldName = find("#oldname", FormElement).value;
    const oldPassword = find("#oldpassword", FormElement).value;
    const editName = find("#newname", FormElement).value
    const editPassword = find("#newname", FormElement).value

    const deleteName = find("#deletename", FormElement).value
    const deletePassword = find("#deletepassword", FormElement).value

    target.appendChild(FormElement)
}

export default UserSettingsController