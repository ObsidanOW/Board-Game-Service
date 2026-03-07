import { i18n, errEnum, Languages } from "./languageProvider/messageHandler.mjs";


const errorHandler = (err, req, res, next) => {
    console.log(err.message);
    const message = i18n[req.language]?.errorCodes?.[err.message] || "UNKNOWN ERROR"
    console.log("message: ", message, " i18n[req.language]: ", i18n[req.language]);

    res.status(500).json({ error: message })

    console.log("switched through err.message: ", err.message)
}

export default errorHandler;