import jwt from "jsonwebtoken";
import { userManagerInstance } from "../userManager.mjs";
import user from "../../dataObjects/user.mjs";
import { errEnum } from "../languageProvider/messageHandler.mjs";

async function Authenticate(name, password) {
    const userId = await userManagerInstance.LoginUser(new user(name, password));
    if (userId === null) {
        throw new Error(errEnum.wrongCredentials);
    }
    const token = jwt.sign({ userId }, process.env.SECRET, { expiresIn: '20' });
    return token
}

export default Authenticate