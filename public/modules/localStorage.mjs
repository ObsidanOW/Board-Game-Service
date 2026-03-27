export function getStorage(key) {
    const itemString = localStorage.getItem(key);
    if (itemString !== null && itemString !== undefined) {
        const item = JSON.parse(itemString);
        return item;
    }
}

export function setStorage(key, value) {
    if (key !== undefined) {
        const valueString = JSON.stringify(value)
        localStorage.setItem(key, valueString)
    }
}
