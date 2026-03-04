import { userManagerInstance } from "./userManager.mjs"
import user from "../dataObjects/user.mjs";

async function Authenticate(req, res, next) {
    try {
        const Login = new user(req.body.name, req.psw);
        console.log("Login userobject: ", Login);
        const token = await userManagerInstance.LoginUser(Login);
        console.log("token: ", token);
        req.token = token;
        console.log("got token in auth: ", token)
        next();
    } catch (err) {
       
    }
}

export default Authenticate