import express from "express"
import sanitizeString from "../modules/middleware/SanitizeString.mjs"
import { storageManagerInstance } from "../modules/storage/storageManager.mjs"
import getLanguage from "../modules/middleware/getLanguage.mjs"
import { i18n } from "../modules/languageProvider/messageHandler.mjs"

const ContentRouter = express.Router()

ContentRouter.use(express.json());

ContentRouter.get('/connection', async (req, res, next) => {
   res.status(200).json({ok: true});
})

ContentRouter.get('/language', getLanguage, async (req, res, next) => {
   try {
      res.status(200).json(i18n[req.language]?.HTML);
   } catch (err) {
      console.error(err)
   }
})

ContentRouter.get('/home', sanitizeString, async (req, res, next) => {
   try {
      const games = await storageManagerInstance.games();
      res.status(200).json(games);
   } catch (err) {
      next(err)
   }
})


ContentRouter.post('/boardgame/rate/:GameId', (req, res, next) => {

   res.send('BoardGameRatingPost');
})

export default ContentRouter;