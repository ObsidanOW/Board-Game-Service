import { createHmac } from 'node:crypto';
import 'dotenv/config'
import { errEnum } from '../languageProvider/messageHandler.mjs';

export function securityAudit(req, res, next) {
    if(req.body.username === "" || req.body.password === ""){
        throw new Error(errEnum.wrongCredentials);
    }
    if (req.method === "POST" || req.method === "PATCH") {
        if (req.body.password) {
            let psw = req.body.password;
            req.body.password = "";

            let securityToken = createSecurePassToken(psw, process.env.SECRET);
            req.psw = securityToken;
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