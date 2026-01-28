import express from "express"
import sanitizeSearch from "../modules/SanitizeSearch.mjs"
const ContentRouter = express.Router()


const BoardGamesForTesting = [
  {id: 1000, Status: 2, BelongsTo: 1, title: "For the King and Me"},
  {id: 1001, Status: 2, BelongsTo: 1, title: "Century: Big box"}
]

ContentRouter.get('/', sanitizeSearch, (req, res, next) => {

  if(req.Sanitized){
    res.status(200);
res.send(req.Sanitized);

  }
 res.send('BoardGameList');
})


ContentRouter.get('/boardgame/:GameId', (req,res,next) => {

   res.send('BoardGameDetailPage');
})

ContentRouter.post('/boardgame/:GameId', (req,res,next) => {

   res.send('BoardGameRatingPost');
})

export default ContentRouter;