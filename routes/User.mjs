import express from "express"
import { ToLowercase } from "../modules/SanitizeSearch.mjs"
const UserRouter = express.UserRouter()

UserRouter.get('/', (req, res, next) => {
  res.send('Home page')
})

UserRouter.get(ToLowercase,'/:GameId', (req, res, next) => {
  res.send('BoardGamePage')
})


module.exports = UserRouter;