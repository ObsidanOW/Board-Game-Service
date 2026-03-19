import { i18n, errEnum, Languages } from "./languageProvider/messageHandler.mjs";


const errorHandler = (err, req, res, next) => {
    const Message = i18n[req.language]?.errorCodes?.[err.message] || "Internal server error"

    let errorCode = 500;
    switch (err.message) {
        case errEnum.databaseError:
            errorCode = 500;
            break;
        case errEnum.nonExistentGame:
            errorCode = 404;
            break;
        case errEnum.serverError:
            errorCode = 500;
            break;
        case errEnum.usernameIsTaken:
            errorCode = 409;
            break;
        case errEnum.wrongCredentials:
            errorCode = 401;
            break;
            case errEnum.noPermission:
            errorCode = 403;
            break;
        default:
            console.error(err)
            break;

    }


    res.status(errorCode).json({ error: Message })
}

export default errorHandler;