import express from "express"
import sanitizeString from "../modules/InputCleanup/SanitizeString.mjs"
import { storageManagerInstance } from "../modules/storageProviders/storageManager.mjs"

const ContentRouter = express.Router()


const BoardGamesForTesting = [
  {id: 1000, Status: 2, BelongsTo: 1, title: "For the King and Me"},
  {id: 1001, Status: 2, BelongsTo: 1, title: "Century: Big box"}
]

ContentRouter.get('/home', sanitizeString, (req, res, next) => {
try{
   const games = storageManagerInstance.
   res.status(200).json();
}catch(err){

}
})


ContentRouter.get('/boardgame/:GameId', (req,res,next) => {

   res.send('BoardGameDetailPage');
})

ContentRouter.post('/boardgame/rate/:GameId', (req,res,next) => {
  
   res.send('BoardGameRatingPost');
})

export default ContentRouter;