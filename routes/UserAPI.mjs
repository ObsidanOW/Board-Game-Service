import express from "express"
import jwt from "jsonwebtoken";
import user from "../dataObjects/user.mjs";
import securityAudit from "../modules/security/passwordSecurity.mjs";
import Authenticate from "../modules/security/Authenticate.mjs";
import Authorization from "../modules/security/Authorization.mjs";
import { userManagerInstance } from "../modules/userManager.mjs";
import getLanguage from "../modules/languageProvider/getLanguage.mjs";
import errorHandler from "../modules/errorHandler.mjs";
import { errEnum } from "../modules/languageProvider/messageHandler.mjs";
import { i18n } from "../modules/languageProvider/messageHandler.mjs"; 7




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

userRouter.post('/login', securityAudit, Authenticate, async (req, res, next) => {
    try {
        const token = req.token;
        res.status(200).send({ token })
    } catch (err) {
        next(err);
    }

})

userRouter.post('/createuser', securityAudit, async (req, res, next) => {
    try {
        console.log(req.body);
        await userManagerInstance.CreateUser(user(req.body.username, req.psw))
        res.status(200).json({ result: "created user" });
    } catch (err) {
        next(err);
    }


})

userRouter.patch('/edituser', securityAudit, Authorization, (req, res, next) => {
    try {
const id = req.id;

    }
    catch (err) { next(err) }

})

userRouter.delete('/deleteuser', securityAudit, Authorization, async (req, res, next) => {
    try {
        const deletedUser = await userManagerInstance.DeleteUser(req.id);
        res.status(200).json({result: "User " + deletedUser.username + " was deleted"})
    }
    catch (err) {
        console.error("deleteuser failed", err);
        next(err)
    }


})

userRouter.use(errorHandler);

export default userRouter;