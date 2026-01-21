import express from "express";

const app = express()
const port = 8080

app.use(express.static('public'))

const  userRouter = require("./routes/user.mjs");

app.use("/User", userRouter)

app.listen(port, () => {

})





