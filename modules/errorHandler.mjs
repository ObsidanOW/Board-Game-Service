import { errEnum, serverError } from "./languageProvider/errorMessages.mjs"
import { nonexistentGame, wrongCredentials, usernameIsTaken, databaseError, } from "./languageProvider/errorMessages.mjs";

const errorHandler = (err, req, res, next) => {
console.log(err.message);
    switch (err.message){
        case errEnum.nonExistentGame:
            res.status(500).json({ error: nonexistentGame(req.language)})
            break;
        case errEnum.serverError:
            res.status(500).json({ error: serverError(req.language)})
            break;
        case errEnum.usernameIsTaken:
            res.status(500).json({ error: usernameIsTaken(req.language)})
            break;
        case errEnum.wrongCredentials:
            res.status(500).json({ error: wrongCredentials(req.language)})
            break;
        case errEnum.databaseError:
            res.status(500).json({ error: databaseError(req.language)})
             
            break;
    }
console.log("switched through err.message: ", err.message)
}

export default errorHandler;