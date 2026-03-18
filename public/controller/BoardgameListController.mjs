import loadView from "../viewLoader.mjs";
import find from "../findElement.mjs";
import userButton from "../modules/userButton.mjs";

let viewName = "BoardgameListView";
let viewItemName = "BoardgameListItem";

let template = null;
let itemTemplate = null;

async function BoardgameListController(target, games) {
    template = await loadView(viewName);
    itemTemplate = await loadView(viewItemName);
    const __target = target;
    render(__target, games)
}

function render(target, games) {
    target.innerHTML = ""

    const GameListElement = document.importNode(template.content, true);
    
userButton(GameListElement, null)

    const list = find("ul", GameListElement);

    for (const game of games) {

        const gameElement = document.importNode(itemTemplate.content, true);
        find("h3", gameElement).innerText = game.title;

        const gameButton = find("button", gameElement);
        gameButton.addEventListener("click", () => {
            const GoGameDetail = new CustomEvent("GoGameDetail", { composed: true, bubbles: true, detail: { game: game } })
            target.dispatchEvent(GoGameDetail);
        })
        list.appendChild(gameElement);
    }
    target.appendChild(GameListElement);
}

export default BoardgameListController;