import express from "express";
import ContentRouter from "./routes/ContentAPI.mjs";
import UserRouter from "./routes/UserAPI.mjs"

//import {setUserStorageProvider} from "user"

import { StorageProviders, setStorageProvider} from ".modules/StorageProviders/storageManager";

//Set up persistence of data
setStorageProvider(StorageProviders.POSTGRESQL)

const port = 8080
const app = express()


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/content", ContentRouter)
app.use("/user", UserRouter)
app.listen(port, () => {
})





