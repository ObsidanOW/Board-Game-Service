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
            console.error(err);
            throw err
        }
    },


    matchID: async (id, pool) => {
        try {
            if (pool === undefined || id === undefined) {
                throw new Error(errEnum.serverError);
            }
            const userData = await pool.query(
                'SELECT user_id,username,password FROM "User" WHERE user_id = $1',
                [id]
            )
            if (userData.rows[0]) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.error(err);
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
            console.error(err);
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
                return userData.rows[0];
            } else {
                return null;
            }
        } catch (err) {
            console.error(err);
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
            console.error(err);
            throw err
        }
    },

    editUser: async (id, user, pool) => {
        console.log("user " ,user);
        try {
            const userData = await pool.query(
                'UPDATE "User" SET username = $1, password = $2 WHERE user_id = $3;',
                [user.name, user.psw, id]
            )
            if (userData.rows[0]) {
                return userData.rows[0]
            }
        }catch(err){
            console.error(err);
            throw Error(errEnum.databaseError);
        }
    },

    deleteUser: async (id, pool) => {
        try {
            const userData = await pool.query(
                'DELETE from "User" WHERE user_id = $1 RETURNING *',
                [id]
            )
            if (userData.rows[0]) {
                return userData.rows[0];
            } else {
                throw new Error("user not found");
            }
        } catch (err) {
            console.error(err);
            throw Error(errEnum.databaseError);
        }
    }
}
export default postgreSQL