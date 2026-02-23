import express from "express"
import { generateUserID, deleteUser, storeUser, findUser, editUser } from "../dataObjects/user.mjs";
import user from "../dataObjects/user.mjs";
import securityAudit from "../modules/security.mjs";


const userRouter = express.Router()

userRouter.use(express.json());


userRouter.post('/login', (req, res, next) => {
    //TODO check name and password
    res.send('LoggedIn');
})

userRouter.post('/createuser', securityAudit, (req, res, next) => {
    try {
        const newUser = user(req.body.name, req.token.psw);
        storeUser(newUser);
        res.json(JSON.stringify(newUser));
    } catch {

    }


})

userRouter.patch('/edituser', securityAudit, (req, res, next) => {
    try {
        let userId = user(req.body.name, req.token.psw);
        editUser(userId, req.body.newname, req.newToken.psw);

    }
    catch (err) { next(err) }

})

userRouter.delete('/deleteuser', securityAudit, (req, res, next) => {


    try {
        const userId = user(req.body.name, req.token.psw)
        res.json(JSON.stringify(userId));

    }
    catch (err) { next(err) }


})


export default userRouter;