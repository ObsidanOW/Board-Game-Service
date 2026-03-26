import find from "../findElement.mjs";
import { HTMLInner } from "../../app.mjs";



function userButton(Element, target) {
    const language = HTMLInner.components;
    const UserButton = find("#User", Element);
    UserButton.innerText = language.user;
    UserButton.addEventListener("click", () => {
        const GoUser = new CustomEvent("GoUser", { composed: true, bubbles: true });
        target.dispatchEvent(GoUser);
    })
}

export default userButton;