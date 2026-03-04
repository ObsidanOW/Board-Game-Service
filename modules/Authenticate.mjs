import { userManagerInstance } from "./userManager.mjs"
import user from "../dataObjects/user.mjs";
import { errEnum } from "./languageProvider/errorMessages.mjs";

async function Authenticate(req, res, next) {
    try {
         throw new Error(errEnum.wrongCredentials);
        const Login = new user(req.body.name, req.psw);
        const token = await userManagerInstance.LoginUser(Login);
        req.token = token;
        next();
    } catch (err) {
       throw new Error(errEnum.wrongCredentials);
    }
}

export default Authenticate