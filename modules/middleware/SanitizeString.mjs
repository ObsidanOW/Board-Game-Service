function sanitizeString(req, res, next) {
    const RegularExpression = /[^a-zA-Z0-9 s]/g
    try {
        if (req?.query?.search) {
            const Lowercase = req.query.search.toLowerCase();
            const NormalCharacters = Lowercase.replace(RegularExpression, "");

            req.Sanitized = NormalCharacters;
        }
        next();
    } catch (err) {
        console.error(err);
        throw err
    }

}






export default sanitizeString