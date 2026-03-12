import BoardgameListController from "./controller/BoardgameListController.mjs";
import { BoardgameDetailController } from "./controller/BoardgameDetailController.mjs";
import UserSettingsController from "./controller/UserSettingsController.mjs";
import { PostUserCreate, PostUserLogin, PatchUser, DeleteUser, GetUserPage, GetGames, GetGame } from "./fetchManager.mjs";
import { getStorage, setStorage } from "./modules/LocalStorage.mjs";

const languageCode = navigator.language || "en";

let HTMLInner = localStorage.getItem("HTML" + languageCode)
if(HTMLInner === undefined){
  HTMLInner = await GetLanguage();
}
const games = await GetGames();
console.log("games(app): ", games);
BoardgameListController(document.body, games)

document.addEventListener("GoHome", async (evt) => {
  const games = await GetGames();
  BoardgameListController(document.body, games)
})

document.addEventListener("GoGameDetail", async (evt) => {
  //const game = await GetGame();
  BoardgameDetailController(document.body, evt.detail.game);
})

document.addEventListener("GoUserSettings", async (evt) => {
  console.log("GoUserEvent");
  const language = await GetUserPage();
  UserSettingsController(document.body, language);
})



document.addEventListener("LoginUserEvent", (evt) => {
  const Token = PostUserLogin(evt.detail)
})

document.addEventListener("CreateUserEvent", (evt) => {
  PostUserCreate(evt.detail)
})

document.addEventListener("EditUserEvent", (evt) => {
  PatchUser(evt.detail)
})

document.addEventListener("DeleteUserEvent", (evt) => {
  DeleteUser(evt.detail)
})




if ("serviceWorker" in navigator) {
  if (document.readyState === "complete") {
    registerServiceWorker();
  } else {
    window.addEventListener("load", () => registerServiceWorker());
  }
}
function registerServiceWorker() {
  navigator.serviceWorker
    .register("/serviceWorker.mjs")
    .then((registration) => {
      console.log("Service worker registered:", registration);
    })
    .catch((error) => {
      console.error("Service worker registration failed:", error);
    });
}
