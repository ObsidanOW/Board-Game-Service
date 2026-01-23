function SanitizeSearch(req,res,next){
    if(req.query.search){
        console.log("querytype", typeof(req.query.search));
const Lowercase = req.query.search.toLowerCase();

const RegularExpression = /[^a-zA-Z0-9]/g
const NormalCharacters = Lowercase.replace(RegularExpression, "");

req.Sanitized = NormalCharacters;
    }

next();
}

export default SanitizeSearch