import { errEnum } from "./languageProvider/messageHandler.mjs";
import { storageManagerInstance } from "./storage/storageManager.mjs";

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
            return dbMatch.user_id;
        }
    }

    async FindUser(user) {
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

    async EditUser(id, newUserData) {
        try {
             const dbMatchName = await storageManagerInstance.matchName(newUserData);
            if(dbMatchName){
                throw new Error(errEnum.usernameIsTaken);
            }
            const dbMatchID = await storageManagerInstance.matchId(id);
            if (dbMatchID) {
                const editUser = await storageManagerInstance.editUser(id, newUserData);
                return editUser;
            }
        } catch (err) {
            console.error(err);
            throw new Error(errEnum.databaseError)
        }
    }

    async DeleteUser(id) {
            const dbMatch = await storageManagerInstance.matchId(id);
            if (dbMatch) {
                const deletedUser = await storageManagerInstance.deleteUser(id);
                return deletedUser;
            } else {
                throw new Error(errEnum.serverError);
            }
    }
}

async function generateID() {
    let id = null;
    do {
        id = (Math.random() * Number.MAX_SAFE_INTEGER).toString(16);
    } while (await storageManagerInstance.matchId(id));
    return id;
}


new userManager();

