import storageProvider from "./storageProvider.mjs";
import { Pool, Client } from "pg";
import { postgreSQLSave } from "./postgresSQL.mjs";
import 'dotenv/config'

let instance = null;

class StorageManager {
    providerEnum;
    constructor() {
        if (instance == null) {
            instance = storageProvider;
            this = storageProvider;
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
            case POSTGRESQL:
            postgreSQLSave(pool);
                break;
        }
    }

    delete(data) {

    }
}

export const storageProviders = {
POSTGRESQL: 0,
CSV: 1
}

export function setStorageProvider(aEnum){
    if(instance !== null){
instance.providerEnum = aEnum;
console.log("change providerEnum")
    }else{
        throw Error("500")
    }
}

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});