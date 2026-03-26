import jwt from "jsonwebtoken";
import { errEnum } from "../../languageProvider/messageHandler.mjs";

async function Authorization(req, res, next) {

    const token = req.headers.authorization.split(" ")[1];
    try {
        jwt.verify(token, process.env.SECRET);
    } catch (err) {
        console.error(err);
        throw Error(errEnum.wrongCredentials);
    }

    try {
        const tokenUser = jwt.decode(token, process.env.SECRET);
        console.log(tokenUser);
        req.id = tokenUser.userId;
    } catch (err) {
        console.error(err);
        throw Error(errEnum.wrongCredentials);
    }

    next();
}


export default Authorization