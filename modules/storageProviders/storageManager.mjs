import storageProvider from "./storageProvider.mjs";
import { Pool} from "pg";
import { postgreSQLSave } from "./postgreSQL.mjs";
import 'dotenv/config'

let instance = null;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}
});

postgreSQLSave(pool);

class StorageManager {
    providerEnum;
    constructor() {
        if (instance == null) {
            instance = this;
            storageProvider = this;
            this.providerEnum;
        } else {
            //Error
        }
    }
    setProvider(aEnum) {
        this.providerEnum = aEnum;
    }

    save(data) {
        switch (this.providerEnum) {
            case StorageProviders.POSTGRESQL:
            postgreSQLSave(pool);
                break;
        }
    }

    delete(data) {

    }
}

export const StorageProviders = {
POSTGRESQL: 0,
CSV: 1
}

export function setStorageProvider(aEnum){
    if(instance !== null){
instance.providerEnum = aEnum;
console.log("change providerEnum")
    }else{
        //throw Error("500")
    }
}

