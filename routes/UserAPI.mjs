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
    console.log("POST endpoint TOS: ", req.body.TOS)


    if (req.body.TOS === "on" && req.token) {
        console.log("TOS consent")
        const newUser = user();
        newUser.id = generateUserID();

        newUser.name = req.body.name;
        newUser.psw = req.token.psw;
        storeUser(newUser);
        res.send('createUser with id and psw');
    } else {
        console.log("did not consent to ToS")
        res.send('did not consent to ToS')
    }
})

userRouter.patch('/edituser', securityAudit, (req, res, next) => {
 try{
        let userId = findUser(req.body.name, req.token.psw);
        if(!userId){
            throw new Error("404");
        }
         editUser(userId, req.body.newname, req.body.newpassword);
        res.send('user edited');
    }
 catch(err){next(err)}
       
    })

userRouter.delete('/deleteuser', securityAudit, (req, res, next) => {
    const userId = findUser(req.body.name, req.token.psw)
    if (userId) {
        deleteUser(userId)
        res.send('user deleted');
    } else {
        //TODO wrong input user error 300
    }

})


export default userRouter;