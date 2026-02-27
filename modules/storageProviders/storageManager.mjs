import storageProvider from "./storageProvider.mjs";
import { Pool, Client } from "pg";
import { postgreSQLSave, postgreSQLMatch } from "./postgreSQL.mjs";
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
   
    match(data) {
        console.log("looking for match");
        switch(this.providerEnum){
            case StorageProviders.POSTGRESQL:
              return postgreSQLMatch(pool, data)
        }
    }

    save(data) {
        switch (this.providerEnum) {
            case StorageProviders.POSTGRESQL:
            postgreSQLSave(pool, data);
                break;
        }
    }

    delete(data) {

    }


}

new StorageManager()

