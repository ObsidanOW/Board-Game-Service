import loadView from "../viewLoader.mjs";
import find from "../findElement.mjs";

let viewName = "BoardgameListView";
let viewItemName = "BoardgameListItem";

let template = null;
let itemTemplate = null;

async function BoardgameListController(target, games = []) {
    template = await loadView(viewName);
    itemTemplate = await loadView(viewItemName);
    const __target = target;

    games.onDetail = (id) => {
        //TOOD navigation event that does a get with the appropriate id
    }


    render(__target, games)
}

function render(target, games) {
    target.innerHTML = ""

    for (const game of games) {
        const gameElement = document.importNode(itemTemplate.content, true);
        find("h3", gameElement).value = game.title;
        

        gameButton = find("button", gameElement);
        gameButton.addEventListener("click", () => {
            onDetail(game.id)
        })
    }
}

export default BoardgameListController;