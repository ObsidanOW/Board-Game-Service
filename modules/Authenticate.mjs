import { userManagerInstance } from "./userManager.mjs"
import user from "../dataObjects/user.mjs";
import { errEnum } from "./languageProvider/errorMessages.mjs";

async function Authenticate(req, res, next) {
    try {
        
        const token = await userManagerInstance.LoginUser(new user(req.body.name, req.psw));
        req.token = token;
        next();
    } catch (err) {
       throw err;
    }
}

export default Authenticate