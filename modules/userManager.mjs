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

    async DeleteUser(id) {
        try {
            const dbMatch = await storageManagerInstance.matchId(id);
            if (dbMatch) {
                const deletedUser = await storageManagerInstance.deleteUser(id);
                return deletedUser;
            } else {
                throw new Error("user not found");
            }
        } catch (err) {
            throw err
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

