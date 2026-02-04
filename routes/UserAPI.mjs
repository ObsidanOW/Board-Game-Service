import express from "express"
import { generateUserID, deleteUser, storeUser } from "../dataObjects/user.mjs";
import user from "../dataObjects/user.mjs";
import securityAudit from "../modules/security.mjs";


const userRouter = express.Router()

userRouter.use(express.json());


userRouter.post('/login', (req, res, next) => {
    //TODO check name and password
    res.send('LoggedIn');
})

userRouter.post('/createuser',securityAudit, (req, res, next) => {
    console.log("POST endpoint")
    if (req.query.ToS !== "true") {
        res.send('Did not consent');
    } else {
        if (req.token) {
            let newUser = user();
            newUser.id = generateUserID();

            newUser.name = req.body.name;
            newUser.psw = req.token.psw;
            storeUser(newUser);
            res.send('createUser with id and psw');
        } 
        res.send('no valid userinfo' )
    }
})

userRouter.delete('/deleteuser', securityAudit, (req, res, next) => {

    if(deleteUser(req.body.name, req.token.psw) === false){
  //TODO wrong input user error 300
    }
    res.send('user deleted');
    //TODO status OK
})


export default userRouter;