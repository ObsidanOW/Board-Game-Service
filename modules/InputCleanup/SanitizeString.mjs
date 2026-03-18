function sanitizeString(req, res, next) {
    const RegularExpression = /[^a-zA-Z0-9]/g
try{
if (req?.query?.search) {
        const Lowercase = req.query.search.toLowerCase();
        const NormalCharacters = Lowercase.replace(RegularExpression, "");

        req.Sanitized = NormalCharacters;
    }


    if (req?.body?.name && req?.body?.password) {
        req.body.username = req.body.name.toLowerCase();
        req.body.username = req.body.name.replace(RegularExpression, "")
        req.body.password = req.body.password.toLowerCase();
        req.body.password = req.body.password.replace(RegularExpression, "")
    }
    next();
}catch(err){
throw err
}
    
}






export default sanitizeString