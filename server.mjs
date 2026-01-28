import express from "express";
import ContentRouter from "./routes/Content.mjs";
import UserRouter from "./routes/User.mjs";

const port = 8080
const app = express()
app.use(express.static('public'));

app.use("/content", ContentRouter)
app.use("/user", UserRouter)

app.listen(port, () => {

})





