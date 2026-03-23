import BoardgameListController from "./controller/BoardgameListController.mjs";
import { BoardgameDetailController } from "./controller/BoardgameDetailController.mjs";
import UserSettingsController from "./controller/UserSettingsController.mjs";
import { PostUserCreate, PostUserLogin, PatchUser, DeleteUser, GetUserPage, GetGames, GetGame, GetLanguage } from "./modules/API/requests.mjs";
import { getStorage, setStorage } from "./modules/LocalStorage.mjs";


export let HTMLInner = undefined;
let Token = null;
loadApp();

async function loadApp() {
  const languageCode = navigator.language || "en";

  HTMLInner = getStorage("HTML" + languageCode)
  if (HTMLInner === undefined || HTMLInner === null) {

    HTMLInner = await GetLanguage();
    setStorage("HTML" + languageCode, HTMLInner);
  }

  Token = getStorage("Token")
  if(Token === null || Token === undefined){
     UserSettingsController(document.body);
  }else{
    const games = await GetGames();
    BoardgameListController(document.body, games);
  }
 
}



document.addEventListener("GoHome", async (evt) => {
  const games = await GetGames();
  BoardgameListController(document.body, games)
})

document.addEventListener("GoUser", async (evt) => {
  console.log("GoUser event")
  UserSettingsController(document.body, Token)
})

document.addEventListener("GoGameDetail", async (evt) => {
  BoardgameDetailController(document.body, evt.detail.game, Token);
})

document.addEventListener("GoUserSettings", async (evt) => {
  UserSettingsController(document.body, Token);
})



document.addEventListener("LoginUserEvent", async (evt) => {
  Token = await PostUserLogin(evt.detail)
  setStorage("Token", Token)
})

document.addEventListener("CreateUserEvent", (evt) => {
  PostUserCreate(evt.detail)
})

document.addEventListener("EditUserEvent", (evt) => {
  PatchUser(evt.detail)
})

document.addEventListener("DeleteUserEvent", (evt) => {
  DeleteUser(evt.detail, Token)
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
