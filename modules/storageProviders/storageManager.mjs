
import { Pool, Client } from "pg";
import storageProvider from "./storageProvider.mjs";
import postgeSQL from "./postgreSQL.mjs";
import 'dotenv/config'

export let storageManagerInstance = null;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

export const StorageProviders = {
    POSTGRESQL: "POSTGRESQL",
    CSV: "CSV"
}

export class StorageManager {
    providerEnum;
    constructor() {
        if (storageManagerInstance == null) {
            storageManagerInstance = this
            this.providerEnum = process.env.PROVIDER;
            this.provider = storageProvider;
        } else {
            
        }

        switch (this.providerEnum) {
            case StorageProviders.POSTGRESQL:
                this.provider = postgeSQL;
                break;
        }
    }

    async matchUser(data) {
       return storageProvider.matchUser(data, pool);
    }

    async matchName(data) {
        return storageProvider.matchName(data, pool);
    }

    async matchId(data) {
        return storageProvider.matchID(data, pool);
    }

    async save(data) {
        return storageProvider.save(data, pool);
    }






    delete(data) {

    }


}

new StorageManager()

