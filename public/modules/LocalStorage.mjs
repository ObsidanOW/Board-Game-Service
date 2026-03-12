export function getStorage(key) {
    localStorage.getItem(key);
}

export function setStorage(key, value, overwrite = true) {
    if (!overwrite) {
        if (localStorage.getItem(key) === undefined) {
            localStorage.setItem(key, value)
        }
    } else {
        localStorage.setItem(key, value)
    }

}