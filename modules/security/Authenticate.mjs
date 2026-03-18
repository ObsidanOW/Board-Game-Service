import jwt from "jsonwebtoken";
import { userManagerInstance } from "../userManager.mjs";
import user from "../../dataObjects/user.mjs";
import { errEnum } from "../languageProvider/messageHandler.mjs";

async function Authenticate(name, password) {
    const username = await userManagerInstance.LoginUser(new user(name, password));
    console.log("loginStorageManager response: ", username);
    if (username === null) {
        throw new Error(errEnum.wrongCredentials);
    }
    const token = jwt.sign({ username }, process.env.SECRET);
    return token
}

export default Authenticate