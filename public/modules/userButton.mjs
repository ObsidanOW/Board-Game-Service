import find from "../findElement.mjs";

function userButton(Element, target) {
    const UserButton = find("#User", Element);
    UserButton.addEventListener("click", () => {
        const GoUser = new CustomEvent("GoUser", { composed: true, bubbles: true });
        target.dispatchEvent(GoUser);
    })
}

export default userButton;