import storageProvider from "./storageProvider.mjs";
import { Pool, Client } from "pg";
import { postgreSQLSaveUser, postgreSQLMatchUserId, postgreSQLMatchUsername} from "./postgreSQL.mjs";
import 'dotenv/config'

export let storageManagerInstance = null;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}
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
        } else {
            //Error
        }
    }
   
    async match(data) {
        switch(this.providerEnum){
            case StorageProviders.POSTGRESQL:
              return await postgreSQLMatchUser(pool, data)
        }
    }

    async matchName(data) {
        switch(this.providerEnum){
            case StorageProviders.POSTGRESQL:
              return await postgreSQLMatchUsername(pool, data)
        }
    }

     async matchId(data) {
        switch(this.providerEnum){
            case StorageProviders.POSTGRESQL:
              return await postgreSQLMatchUserId(pool, data)
        }
    }

    async save(data) {
        switch (this.providerEnum) {
            case StorageProviders.POSTGRESQL:
            await postgreSQLSaveUser(pool, data);
                break;
        }
    }




    delete(data) {

    }


}

new StorageManager()

