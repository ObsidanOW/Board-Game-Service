import express from "express"
import user from "../dataObjects/user.mjs";
import securityAudit from "../modules/middleware/security/passwordSecurity.mjs";
import Authenticate from "../modules/middleware/security/Authenticate.mjs";
import Authorization from "../modules/middleware/security/Authorization.mjs";
import { userManagerInstance } from "../modules/userManager.mjs";
import getLanguage from "../modules/middleware/getLanguage.mjs";
import errorHandler from "../modules/middleware/errorHandler.mjs";
import { i18n } from "../modules/languageProvider/messageHandler.mjs";
import consentCheckbox from "../modules/middleware/consentCheckbox.mjs";




const userRouter = express.Router()

userRouter.use(express.json());

userRouter.post('/login', securityAudit, Authenticate, async (req, res, next) => {
    try {
        const token = req.token;
        res.status(200).send({ token })
    } catch (err) {
        next(err);
    }

})

userRouter.post('/createuser', consentCheckbox, securityAudit, async (req, res, next) => {
    try {
        await userManagerInstance.CreateUser(user(req.body.username, req.psw))
        res.status(200).json({ result: "created user" });
    } catch (err) {
        next(err);
    }


})

userRouter.patch('/edituser', securityAudit, Authorization, async (req, res, next) => {
    try {
        const id = req.id;
        await userManagerInstance.EditUser(id, user(req.body.username, req.psw));
    }
    catch (err) {
console.error(err);
        next(err)
    }
})

userRouter.delete('/deleteuser', securityAudit, Authorization, async (req, res, next) => {
    try {
        const deletedUser = await userManagerInstance.DeleteUser(req.id);
        res.status(200).json({ result: "User " + deletedUser.username + " was deleted" })
    }
    catch (err) {
        console.error("deleteuser failed", err);
        next(err)
    }


})

userRouter.use(errorHandler);

export default userRouter;