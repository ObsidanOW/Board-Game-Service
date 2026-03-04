function consentCheckbox(req, res, next) {
    try {
        if (TOS === "on") {
            next()
        } else {
            throw new Error("412")
        }
    } catch {
        throw new Error("404")
    }
}

export default consentCheckbox