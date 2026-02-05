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

userRouter.post('/createuser', securityAudit, (req, res, next) => {
    console.log("POST endpoint TOS: ", req.body.TOS)
 

    if (req.body.TOS === "on" && req.token) {
        console.log("TOS consent")
        let newUser = user();
        newUser.id = generateUserID();

        newUser.name = req.body.name;
        newUser.psw = req.token.psw;
        storeUser(newUser);
        res.send('createUser with id and psw');
    }else{
        console.log("did not consent to ToS")
        res.send('did not consent to ToS')
    }
})

userRouter.delete('/deleteuser', securityAudit, (req, res, next) => {
console.log("Delete endpoint reached");
    if (deleteUser(req.body.name, req.token.psw)) {
      
          res.send('user deleted');
    }else{
          //TODO wrong input user error 300
    }
  
})


export default userRouter;