import { createHmac } from 'node:crypto';
import 'dotenv/config'
import { errEnum } from '../languageProvider/messageHandler.mjs';

export function securityAudit(req, res, next) {
    if(req.body.username === "" || req.body.password === ""){
        throw new Error(errEnum.wrongCredentials);
    }
    if (req.method === "POST" || req.method === "DELETE") {
        if (req.body.password) {
            let psw = req.body.password;
            req.body.password = "";

            let securityToken = createSecurePassToken(psw, process.env.SECRET);
            req.psw = securityToken;
        }
    } else if (req.method === "PATCH") {
        if (req.body.password) {
            let psw = req.body.password;
            req.body.password = "";
            let newPsw = req.body.newpassword;
            req.body.newpassword = "";

            let securityToken = createSecurePassToken(psw, process.env.SECRET);
            req.psw = securityToken;
            let newSecurityToken = createSecurePassToken(newPsw, process.env.SECRET);
            req.newPsw = newSecurityToken
        }
    }
    next();
}

function createSecurePassToken(psw, secret) {
    return hashPassword(psw, secret)
    
}

function hashPassword(psw, secret) {
    const hmac = createHmac("sha256", secret);
    hmac.update(psw);
    return hmac.digest("hex");
}

export default securityAudit;