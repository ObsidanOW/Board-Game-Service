import express from "express"

import user from "../dataObjects/user.mjs";
import securityAudit from "../modules/security.mjs";
import Authenticate from "../modules/Authenticate.mjs";
import { userManagerInstance } from "../modules/userManager.mjs";
import getLanguage from "../modules/languageProvider/getLanguage.mjs";
import errorHandler from "../modules/errorHandler.mjs";
import { errEnum } from "../modules/languageProvider/messageHandler.mjs";
import { i18n } from "../modules/languageProvider/messageHandler.mjs";




const userRouter = express.Router()

userRouter.use(express.json());
userRouter.use(getLanguage);

userRouter.get('/', (req, res, next) => {
    try {
        res.status(200).json(i18n[req.language]?.HTML.user)
    } catch (err) {
        next(err)
    }
})

userRouter.post('/login', securityAudit, Authenticate, (req, res, next) => {
    try {
        if (req.token) {
            res.status(200).json(req.token);
        } else {
            throw new Error(errEnum.wrongCredentials);
        }
    } catch (err) {
        next(err);
    }

})

userRouter.post('/createuser', securityAudit, async (req, res, next) => {
    try {
        await userManagerInstance.CreateUser(user(req.body.name, req.psw))
        res.status(200).json({ result: "created user" });
    } catch (err) {
        next(err);
    }


})

userRouter.patch('/edituser', securityAudit, (req, res, next) => {
    try {

    }
    catch (err) { next(err) }

})

userRouter.delete('/deleteuser', securityAudit, Authenticate, (req, res, next) => {
    try {
        console.log("auth token in deleteuser: ", req.token)
        res.json((req.token));
    }
    catch (err) {
        console.log("deleteuser failed", err);
        next(err)
    }


})

userRouter.use(errorHandler);

export default userRouter;