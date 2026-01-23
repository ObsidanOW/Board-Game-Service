import express from "express"
import SanitizeSearch from "../modules/SanitizeSearch.mjs"
const UserRouter = express.Router()


const BoardGamesForTesting = [
  {id: 1000, Status: 2, BelongsTo: 1, title: "For the King and Me"},
  {id: 1001, Status: 2, BelongsTo: 1, title: "Century: Big box"}
]

UserRouter.get('/', SanitizeSearch, (req, res, next) => {

  if(req.Sanitized){
    res.status(500);
res.send(req.Sanitized);

  }
 res.send('BoardGameList');
})


UserRouter.get('/boardgame/:GameId', (req,res,next) => {

   res.send('BoardGameDetailPage');
})

UserRouter.post('/boardgame/:GameId', (req,res,next) => {

   res.send('BoardGameRatingPost');
})



export default UserRouter;