import find from "../findElement.mjs"

const errorFieldController = () => {
    const toast = find("#toast", document);
    toast.addEventListener("erroreventcustom", (evt) => {
const error = evt.detail.error;
toast.innerText = error;
toast.className = "show";
setTimeout(() => {
    toast.className = "";
}, 3000)
    })
}

export default errorFieldController;