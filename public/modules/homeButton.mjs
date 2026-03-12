import find from "../findElement.mjs";

function homeButton(Element, Language) {
    const HomeButton = find("#Home", Element);
    HomeButton.addEventListener("click", () => {
        const GoHome = new CustomEvent("GoHome", { composed: true, bubbles: true });
        Element.dispatchEvent(GoHome);
        //TODO add home text to language files and change button innerText
    })
}

export default homeButton;