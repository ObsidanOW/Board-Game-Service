import loadView from "../viewLoader.mjs";
import find from "../findElement.mjs";

let viewName = "BoardgameList";
let viewItemName = "BoardgameListItem";

const template = await loadView(viewName);
const itemTemplate = await loadView(viewItemName)

function BoardgameListController(target, games = []) {
    const __target = target;

    render(__target, games)
}

function render(target, games) {
target.innerHTML = ""

    for (const game of games) {
const gameElement = document.importNode(itemTemplate.content, true)
gameButton = find("button", gameElement);

gameButton.addEventListener("click", () => {

})
    }
}

export default BoardgameListController;