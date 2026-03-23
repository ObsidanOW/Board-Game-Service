import find from "../findElement.mjs";

function homeButton(Element, target, Language) {
    const HomeButton = find("#Home", Element);
    HomeButton.addEventListener("click", () => {
           console.log("homebutton function")
        const GoHome = new CustomEvent("GoHome", { composed: true, bubbles: true });
        target.dispatchEvent(GoHome);
        //TODO add home text to language files and change button innerText
    })
}

export default homeButton;