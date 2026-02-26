import { Pool, Client } from "pg";
import 'dotenv/config'

export async function postgreSQLSave(pool){
const Client = await pool.connect();
console.log(Client);
}