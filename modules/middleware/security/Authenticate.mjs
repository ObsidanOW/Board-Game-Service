import jwt from "jsonwebtoken";
import { userManagerInstance } from "../../userManager.mjs";
import user from "../../../dataObjects/user.mjs";
import { errEnum } from "../../languageProvider/messageHandler.mjs";

async function Authenticate(req, res, next) {
    let userId = null;
    try {
        userId = await userManagerInstance.LoginUser(new user(req.body.username, req.psw));
        if (userId === null || userId === undefined) {
            throw new Error(errEnum.wrongCredentials);
        }
    } catch (err) {
        console.error(err)
        throw new Error(errEnum.wrongCredentials);
    }
try{
    const token = jwt.sign({ userId }, process.env.SECRET, { expiresIn: '2m' });
    req.token = token;
}catch(err){
    console.error(err);
    throw new Error(errEnum.wrongCredentials);
}
    
    next();
}

export default Authenticate