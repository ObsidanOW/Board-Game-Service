import find from "../findElement.mjs";
import { HTMLInner } from "../../app.mjs";



function homeButton(Element, target) {
    const language = HTMLInner.components;
    const HomeButton = find("#Home", Element);
    console.log(language);
    HomeButton.innerText = language.home
    HomeButton.addEventListener("click", () => {
        const GoHome = new CustomEvent("GoHome", { composed: true, bubbles: true });
        target.dispatchEvent(GoHome);
    })
}

export default homeButton;