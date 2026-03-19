
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
        if (storageManagerInstance !== null) {
            return storageManagerInstance
        } else {
            this.providerEnum = process.env.PROVIDER;
            this.provider = storageProvider;

            switch (this.providerEnum) {
                case StorageProviders.POSTGRESQL:
                    this.provider = postgeSQL;
                    break;
            }
            storageManagerInstance = this
        }

    }
    async matchUser(data) {
        return this.provider.matchUser(data, pool);
    }

    async matchName(data) {
        return this.provider.matchName(data, pool);
    }

    async matchId(data) {
        return this.provider.matchID(data, pool);
    }

    async save(data) {
        return this.provider.save(data, pool);
    }

    async games(data) {
        return this.provider.games(pool);
    }

    deleteUser(data) {
        return this.provider.deleteUser(data, pool);
    }

}






new StorageManager()

