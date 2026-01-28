import express from "express"
import { generateUserID, deleteUserByID } from "../dataObjects/user.mjs"
import { securityAudit } from "../modules/security.mjs"

const UserRouter = express.Router()


UserRouter.get('/', (req, res, next) => {
    res.send('LoginPage');
})

UserRouter.post('/', (req, res, next) => {
    res.send('LoggedIn?')
})

UserRouter.post('/createuser', securityAudit, (req, res, next) => {
    if (req.token) {
        let newUser = user();
        newUser.id = generateUserID();
        newUser.psw = req.token.psw;
        
         //TODO: Store in database
        res.body.token = req.token.token;

    }
})

UserRouter.delete('/', (req, res, next) => {

    //TODO authenticate and find matching ID
    let id = null;
    deleteUserByID(id)
})


export default UserRouter;