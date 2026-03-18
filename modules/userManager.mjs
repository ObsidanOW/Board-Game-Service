import { errEnum } from "./languageProvider/messageHandler.mjs";
import { storageManagerInstance } from "./storageProviders/storageManager.mjs";

export let userManagerInstance = null;

class userManager {

    constructor() {
        if (userManagerInstance === null) {
            userManagerInstance = this;
        }
    }


    async LoginUser(user) {
    
        const dbMatch = await storageManagerInstance.matchUser(user)
        if (dbMatch !== null && dbMatch !== undefined) {
            const userMatch = { id: dbMatch.user_id, name: dbMatch.username, psw: dbMatch.password }
            return userMatch
        }
    }

    async FindUser(user){
       return await storageManagerInstance.matchName(user)
    }

    async CreateUser(user) {
        const dbMatch = await storageManagerInstance.matchName(user);
      
        if (!dbMatch) {
            user.id = await generateID()
            await storageManagerInstance.save(user)
        } else {
            throw new Error(errEnum.usernameIsTaken);
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

