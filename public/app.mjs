import BoardgameListController from "./controller/BoardgameListController.mjs";
import { BoardgameDetailController } from "./controller/BoardgameDetailController.mjs";
import UserSettingsController from "./controller/UserSettingsController.mjs";
import { PostUserCreate, PostUserLogin, PatchUser, DeleteUser, GetUserPage, GetGames, GetGame, GetLanguage } from "./modules/API/requests.mjs";
import { getStorage, setStorage } from "./modules/localStorage.mjs";


export let HTMLInner = undefined;
export let Token = null;
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
