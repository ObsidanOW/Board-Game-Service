import { storageManagerInstance } from "./storageProviders/storageManager.mjs";

export let userManagerInstance = null;

class userManager {

    constructor() {
        if (userManagerInstance === null) {
            userManagerInstance = this;
        }
    }


    async LoginUser(user) {
        const dbMatch = await storageManagerInstance.match({ name: "filip", psw: "rossland" })
        if(dbMatch !== null && dbMatch !== undefined){
            console.log("give token", dbMatch);
            const token =  {id: dbMatch.user_id, name: dbMatch.username, psw: dbMatch.password}
            return token
        }    
    }

    async CreateUser(){

    }
}

new userManager();

