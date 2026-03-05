function sanitizeString(req,res,next){
    const RegularExpression = /[^a-zA-Z0-9]/g
    switch(req){
        case query.search:

const Lowercase = req.query.search.toLowerCase();
const NormalCharacters = Lowercase.replace(RegularExpression, "");

req.Sanitized = NormalCharacters;
break;
case req.body.name:
    
    req.body.name = req.body.name.toLowerCase();
    req.body.name = req.body.name.replace(RegularExpression, "")
    req.body.password = req.body.password.toLowerCase();
    req.body.password = req.body.password.replace(RegularExpression, "")

break;
    }

next();


}

export default sanitizeString