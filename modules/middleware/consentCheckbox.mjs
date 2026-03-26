function consentCheckbox(req, res, next) {
    if (req.body.TOS !== undefined) {
        next()
    } else {
        throw new Error("412")
    }
}

export default consentCheckbox