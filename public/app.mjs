import UserSettingsController from "./controller/UserSettingsController.mjs";
import { PostUserCreate, PostUserLogin, PatchUser, DeleteUser, GetUserPage } from "./fetchManager.mjs";

const language = await GetUserPage();
new UserSettingsController(document.body, language);



document.addEventListener("LoginUserEvent", (evt) => {
  PostUserLogin(evt.detail)
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
