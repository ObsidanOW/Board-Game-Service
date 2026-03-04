import { errEnum, serverError } from "./languageProvider/errorMessages.mjs"
import { nonexistentGame, wrongCredentials, usernameIsTaken, wrongCredentials} from "./languageProvider/errorMessages.mjs";

const errorHandler = (err, req, res, next) => {
let errorMessage;

    switch (err.message){
        case errEnum.nonExistentGame:
            errorMessage = nonexistentGame(req.language);
            break;
        case errEnum.serverError:
            res.status(500).render('error', { message: serverError(req.language) ,error: err })
            break;
        case errEnum.usernameIsTaken:
            errorMessage = usernameIsTaken(req.language);
            break;
        case errEnum.wrongCredentials:
            errorMessage = wrongCredentials(req.language);
            break;
        case errEnum.databaseError:
            errorMessage = databaseError(req.language);
             
            break;
        
    }
   
   
   
//TODO: find out what this does:
    /*if (res.headersSent) {
        return next(err)
    }*/
}

export default errorHandler;