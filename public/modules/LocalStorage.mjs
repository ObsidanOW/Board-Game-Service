export function getStorage(key) {
    const itemString = localStorage.getItem(key);
    if (itemString !== null) {
        const item = JSON.parse(itemString);
        return item;
    }
}

export function setStorage(key, value, overwrite = true) {
    if (!overwrite) {
        if (localStorage.getItem(key) === undefined) {
            const valueString = JSON.stringify(value);
            localStorage.setItem(key, valueString)
        }
    } else {
        const valueString = JSON.stringify(value)
        localStorage.setItem(key, valueString)
    }

}