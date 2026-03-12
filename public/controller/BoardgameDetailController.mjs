import loadView from "../viewLoader.mjs";
import find from "../findElement.mjs";

const viewName = "BoardgameDetailView";
let template = null;

export async function BoardgameDetailController(target, game) {
    console.log(viewName);
    template = await loadView(viewName);

    render(target, game)
}

function render(target, game) {
    target.innerHTML = "";
    const gameElement = document.importNode(template.content, true);
    const Header = find("h1", gameElement);
    Header.innerText = game.title


    const HomeButton = find("#Home", gameElement);
    HomeButton.addEventListener("click", () => {
    const GoHome = new CustomEvent("GoHome", {composed: true, bubbles: true});
    target.dispatchEvent(GoHome);
    })

    target.appendChild(gameElement);
}
