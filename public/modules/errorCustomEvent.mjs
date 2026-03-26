export function errorCustomEvent(error) {
    const errorCustomEvent = new CustomEvent("errorCustomEvent", {
        composed: true, bubbles: true, detail: { error: error}});
        document.dispatchEvent(errorCustomEvent);
}