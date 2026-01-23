**USER API**
GET ("/")is used for a boardgamelist, it will change it's response depending on if it's fed a URL search query.

GET ("/boardgame/:GameId") changes it's response depending on the parameter "GameId", each gameId corresponds to a different game that is sent back.

POST ("/boardgame/:GameId") posts a rating for the boardgame that corresponds to the GameId parameter.