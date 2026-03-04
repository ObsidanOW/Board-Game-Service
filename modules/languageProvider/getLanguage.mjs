import { LanguageProviders } from "./errorMessages.mjs";



function getLanguage(req, res, next){

 const languageCode = req.headers['accept-language'].split(',')[0].trim().substring(0, 2);
 switch(languageCode){
    case "en":
        req.language = LanguageProviders.ENGLISH;
    break;
    case "nb": 
    case "nn":
        req.language = LanguageProviders.NORWEGIAN;
    break;
    default:
    console.log("language: "  + languageCode +  " did not match switch, using default")
    req.language = LanguageProviders.ENGLISH;
    break;
 }
  
next();
}

export default getLanguage;