import { userManagerInstance } from "./userManager.mjs"
import user from "../dataObjects/user.mjs";
import { errEnum } from "./languageProvider/messageHandler.mjs";
import jwt from "jsonwebtoken";

async function Authenticate(req, res, next) {
    try {
        const token = req.headers.authorization.replace("bearer ", "");
        
        await jwt.verify(token, process.env.SECRET)

        const tokenUser = await jvt.decode(token, process.env.SECRET)
        req.user = userManagerInstance.FindUser(tokenUser);
        console.log("User matching token: ", req.user)
        if(req.user === null){
            throw new Error(errEnum.wrongCredentials)
        }
        next()
    } catch (err) {
       throw err;
    }
}

export default Authenticate