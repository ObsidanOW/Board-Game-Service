import loadView from "../modules/viewLoader.mjs";

let viewName = "OfflineView";


let template = null;

async function OfflineController(target) {
    template = await loadView(viewName);
    const __target = target;
    render(__target)
}

function render(target) {
    target.innerHTML = ""

    const OfflineElement = document.importNode(template.content, true);
    target.appendChild(OfflineElement);


}

export default OfflineController;