import { errEnum } from "../languageProvider/messageHandler.mjs"
import 'dotenv/config'

let postgreSQL = {


    save: async (user, pool) => {
        try {
            if (pool === undefined || user === undefined) {
                throw new Error(errEnum.serverError);
            }
            const User = await pool.query(
                'INSERT INTO "User" (user_id, username, password) VALUES ($1, $2, $3) RETURNING *',
                [user.id, user.name, user.psw]
            );
        } catch (err) {
throw err
        }
    },


    matchID: async (user, pool) => {
        try {
            if (pool === undefined || user === undefined) {
                throw new Error(errEnum.serverError);
            }
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
throw err
        }
    },


    matchName: async (user, pool) => {

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
throw err
        }
    },

    matchUser: async (user, pool) => {
        try {
            const userData = await pool.query(
                'SELECT user_id,username,password FROM "User" WHERE username = $1 AND password = $2',
                [user.name, user.psw]
            )
            if (userData.rows[0]) {
                return userData.rows[0].username;
            } else {

            }
        } catch (err) {
throw err
        }
    },
    games: async (pool) => {
        try {
            const gameData = await pool.query(
                'SELECT id, status, belongs_to,title FROM boardgames'
            )
            if (gameData.rows[0]) {
                return gameData.rows
            } else {

            }
        } catch (err) {

        }
    },

    deleteUser: async (user, pool) => {

    }
}
export default postgreSQL