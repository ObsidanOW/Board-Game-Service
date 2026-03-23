import loadView from "../modules/viewLoader.mjs";
import find from "../modules/findElement.mjs";
import homeButton from "../modules/componentController/homeButton.mjs";

const viewName = "BoardgameDetailView";
let template = null;

export async function BoardgameDetailController(target, game, Token) {
    template = await loadView(viewName);

    render(target, game)
}

function render(target, game) {
    target.innerHTML = "";
    const gameElement = document.importNode(template.content, true);
    const Header = find("h1", gameElement);
    Header.innerText = game.title

homeButton(gameElement, target, null)
//TODO change to language
  
    target.appendChild(gameElement);
}
