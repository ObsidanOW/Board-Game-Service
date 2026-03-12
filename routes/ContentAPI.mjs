import express from "express"
import sanitizeString from "../modules/InputCleanup/SanitizeString.mjs"
import { storageManagerInstance } from "../modules/storageProviders/storageManager.mjs"
import getLanguage from "../modules/languageProvider/getLanguage.mjs"

const ContentRouter = express.Router()

ContentRouter.use(express.json());
ContentRouter.use(getLanguage);

ContentRouter.get('/home', sanitizeString, async (req, res, next) => {
try{
   const games = await storageManagerInstance.games();
   res.status(200).json(games);
}catch(err){
next(err)
}
})


ContentRouter.get('/boardgame/:GameId', (req,res,next) => {

   res.send('BoardGameDetailPage');
})

ContentRouter.post('/boardgame/rate/:GameId', (req,res,next) => {
  
   res.send('BoardGameRatingPost');
})

export default ContentRouter;