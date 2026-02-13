import express from "express"
import sanitizeSearch from "../modules/SanitizeSearch.mjs"
const ContentRouter = express.Router()


ContentRouter.get('/boardgame/:GameId', (req,res,next) => {

   res.send('BoardGameDetailPage');
})

ContentRouter.post('/boardgame/rate/:GameId', (req,res,next) => {
  
   res.send('BoardGameRatingPost');
})

ContentRouter.post('boardgame/rate/:GameId', (req,res,next) => {

  res.send('BoardGameRatingPatch')
})

export default ContentRouter;