import find from "../findElement.mjs";

function homeButton(Element, target, Language) {
    const HomeButton = find("#Home", Element);
    HomeButton.addEventListener("click", () => {
        const GoHome = new CustomEvent("GoHome", { composed: true, bubbles: true });
        target.dispatchEvent(GoHome);
    })
}

export default homeButton;