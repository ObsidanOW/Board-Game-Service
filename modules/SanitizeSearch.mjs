function SanitizeSearch(req,res,next){
const Lowercase = req.query.search.ToLowercase();

const RegularExpression = /[^a-zA-Z0-9]/
const NormalCharacters = Lowercase.replace(RegularExpression, "");

req.Sanitized = NormalCharacters;
next();
}

export default SanitizeSearch