import express from "express";
import userRouter from "./routes/user.mjs";

const port = 8080
const app = express()
app.use(express.static('public'));

app.use("/user", userRouter)

app.listen(port, () => {

})





