import { LanguageProviders } from "./errorMessages.mjs";



function getLanguage(req, res, next){
    console.log("run getlanguage")
 const languageCode = req.headers['accept-language'].split(',')[0].trim().substring(0, 2);
 switch(languageCode){
    case "en":
        req.language = LanguageProviders.ENGLISH;
    break;
    case "no":
        req.language = LanguageProviders.NORWEGIAN;
    break;
 }
  
next();
}

export default getLanguage;