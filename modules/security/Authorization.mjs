import { userManagerInstance } from "../userManager.mjs"
import { errEnum } from "../languageProvider/messageHandler.mjs";
import jwt from "jsonwebtoken";

async function Authorization(req, res, next) {
    try {
        const token = req.headers.authorization.replace("bearer ", "");

        const tokenUser = jwt.decode(token, process.env.SECRET, { expiresIn: "3h" });
        req.user = await userManagerInstance.FindUser(tokenUser);
        if (req.user === null) {
            throw new Error(errEnum.noPermission);
        }
        next();
    } catch (err) {
        throw err;
    }
}

export default Authorization