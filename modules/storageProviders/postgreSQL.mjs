import { Pool, Client } from "pg";
import 'dotenv/config'

export async function postgreSQLSave(pool, user){
    try{
const User = await pool.query(
    'INSERT INTO "User" (user_id, username, password) VALUES ($1, $2, $3) RETURNING *',
    [user.id, user.name, user.psw]
);
    }catch(err){
        throw new Error(err);
    }
}

export async function postgreSQLMatch(pool, user){
    try{
        const userData = await pool.query(
            'SELECT user_id,username,password FROM "User" WHERE username = $1 AND password = $2', 
            [user.name,user.psw]
        )
        if(userData.rows[0]){
return userData.rows[0];
        }else{
            console.log("no match")
        }
        
        
    }catch(err){
        throw new Error(err);
    }
}