import { createHmac } from 'node:crypto';
import 'dotenv/config'

export function securityAudit(req, res, next) {
    if (req.method === "POST" || req.method === "DELETE") {
        if (req.body.password) {
            let psw = req.body.password;
            req.body.password = "";

            let securityToken = createSecurePassToken(psw, process.env.SECRET);
            req.token = securityToken;
        }
    } else if (req.method === "PATCH") {
        if (req.body.password) {
            let psw = req.body.password;
            req.body.password = "";
            let newPsw = req.body.newpassword;
            req.body.newpassword = "";

            let securityToken = createSecurePassToken(psw, process.env.SECRET);
            req.token = securityToken;
            let newSecurityToken = createSecurePassToken(newPsw, process.env.SECRET);
            req.newToken = newSecurityToken
        }
    }
    next();
}

function createSecurePassToken(psw, secret) {
    return {
        psw: hashPassword(psw, secret),
        token: { placeholder: "placeholder" }
    }
}

function hashPassword(psw, secret) {
    const hmac = createHmac("sha256", secret);
    hmac.update(psw);
    return hmac.digest("hex");
}

export default securityAudit;