import { storageManagerInstance } from "../modules/storageProviders/storageManager.mjs";
import { userManagerInstance } from "../modules/userManager.mjs";

function user(id, password, ...context) {

return {
        id: null,
        psw: null,
        name: null,
    };
}

const token = await userManagerInstance.LoginUser("placeholder")

console.log("LoginAtempt: ", token);

export default user;