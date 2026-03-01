import { storageManagerInstance } from "./storageProviders/storageManager.mjs";

export let userManagerInstance = null;

class userManager {

    constructor() {
        if (userManagerInstance === null) {
            userManagerInstance = this;
        }
    }


    async LoginUser(user) {
        const dbMatch = await storageManagerInstance.match(user)
        if(dbMatch !== null && dbMatch !== undefined){
            const token =  {id: dbMatch.user_id, name: dbMatch.username, psw: dbMatch.password}
            return token
        }    
    }

    async CreateUser(user){
        const dbMatch = await storageManagerInstance.matchName(user);
        console.log("dbMatch: ", dbMatch)
        if(!dbMatch){
            user.id = await generateID()
            console.log("no match, a new user can be created")
            storageManagerInstance.save(user)
        }else{
            //User already exists
            console.log("user already exists")
        }
    }
}

export async function generateID() {
    let id = null;
    do {
        id = (Math.random() * Number.MAX_SAFE_INTEGER).toString(16);
    } while (await storageManagerInstance.matchId(id));
    return id;
}


new userManager();

