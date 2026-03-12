import find from "../findElement.mjs";

function userButton(Element, Language) {
    const UserButton = find("#User", Element);
    UserButton.addEventListener("click", () => {
        const GoUser = new CustomEvent("GoUser", { composed: true, bubbles: true });
        Element.dispatchEvent(GoUser);
        //TODO add home text to language files and change button innerText
    })
}

export default userButton;