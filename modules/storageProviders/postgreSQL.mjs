import storageProvider from './storageProvider.mjs';
import 'dotenv/config'

let postgreSQL = {


    save: async (pool, user) => {
        try {
            const User = await pool.query(
                'INSERT INTO "User" (user_id, username, password) VALUES ($1, $2, $3) RETURNING *',
                [user.id, user.name, user.psw]
            );
        } catch (err) {

        }
    },


    matchID: async (pool, user) => {
        try {
            const userData = await pool.query(
                'SELECT user_id,username,password FROM "User" WHERE user_id = $1',
                [user.id]
            )
            if (userData.rows[0]) {
                return true;
            } else {
                return false;
            }
        } catch (err) {

        }
    },


matchName: async (pool, user) => {

        try {
            const userData = await pool.query(
                'SELECT user_id,username,password FROM "User" WHERE username = $1',
                [user.name]
            )
            if (userData.rows[0]) {
                return true;
            } else {
                return false;
            }
        } catch (err) {

        }
    },

matchUser: async (pool, user) => {
        try {
            const userData = await pool.query(
                'SELECT user_id,username,password FROM "User" WHERE username = $1 AND password = $2',
                [user.name, user.psw]
            )
            if (userData.rows[0]) {
                return userData.rows[0];
            } else {
                console.log("no match")
            }
        } catch (err) {

        }
    },

deleteUser: async (pool, user) => {

    }
}
export default postgreSQL