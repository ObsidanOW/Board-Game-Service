import express from "express"

import user from "../dataObjects/user.mjs";
import securityAudit from "../modules/security.mjs";
import Authenticate from "../modules/Authenticate.mjs";
import { storageManagerInstance } from "../modules/storageProviders/storageManager.mjs";
import { userManagerInstance } from "../modules/userManager.mjs";


const userRouter = express.Router()

userRouter.use(express.json());


userRouter.post('/login', securityAudit, Authenticate, (req, res, next) => {
    try{
        console.log("login")
    res.json((req.token));
    }catch(err){
next(err);
    }
   
})

userRouter.post('/createuser', securityAudit, (req, res, next) => {
    try {
        userManagerInstance.CreateUser(user(req.body.name, req.psw))
    } catch(err) {
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
        next(err) }


})


export default userRouter;