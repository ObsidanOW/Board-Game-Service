import express from "express"
import { generateUserID, deleteUser, storeUser } from "../dataObjects/user.mjs";
import user from "../dataObjects/user.mjs";
import securityAudit from "../modules/security.mjs";


const userRouter = express.Router()

userRouter.use(express.json());

userRouter.get('/', (req, res, next) => {
    res.send('LoginPage');
})

userRouter.post('/', (req, res, next) => {
    //TODO check name and password
    res.send('LoggedIn');
})

userRouter.get('/createuser', (req, res, next) => {
    res.send('Type ?ToS=true as a url querry to consent to Terms of Service https://uiano-my.sharepoint.com/:w:/g/personal/filiplr_uia_no/IQBn1Vdmf0ADRZ1uBCEHCf2GAVkPPTfIIkJqS_yVeX4Mk60?e=qcXocB. data privacy policy: https://uiano-my.sharepoint.com/:w:/g/personal/filiplr_uia_no/IQBsMzg-vnDJT5PATj0V89axAV68zSGsi0uKQboL6lXSX-M?e=bjs04D. Want to retract your consent? Send a DELETE request with your login info in the body, this will delete your account and remove your data')
})

userRouter.post('/createuser', securityAudit, (req, res, next) => {
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
        } else {
            res.send('no valid userinfo');
        }
    }
})

userRouter.delete('/createuser', securityAudit, (req, res, next) => {

    if(deleteUser(req.body.name, req.token.psw) === false){
  //TODO wrong input user error 300
    }
    res.send('user deleted');
    //TODO status OK
})


export default userRouter;