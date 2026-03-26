import { Languages } from "../languageProvider/messageHandler.mjs";



function getLanguage(req, res, next){

 const languageCode = req.headers['accept-language'].split(',')[0].trim().substring(0, 2);
 switch(languageCode){
    case "en":
        req.language = Languages.ENGLISH;
    break;
    case "nb": 
    case "nn":
        req.language = Languages.NORWEGIAN;
    break;
    default:
    req.language = Languages.ENGLISH;
    break;
 }
  
next();
}

export default getLanguage;