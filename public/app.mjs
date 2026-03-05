import UserSettingsController from "./controller/UserSettingsController.mjs";
import { PostUserCreate, PostUserLogin ,PatchUser, DeleteUser } from "./fetchManager.mjs";

const userSettings = new UserSettingsController(document.body);

document.addEventListener("LoginUserEvent", (evt) =>{
    PostUserLogin(evt.detail)
})

document.addEventListener("CreateUserEvent", (evt) =>{
    PostUserCreate(evt.detail)
})

document.addEventListener("EditUserEvent", (evt) =>{
    PatchUser(evt.detail)
})

document.addEventListener("DeleteUserEvent", (evt) =>{
    DeleteUser(evt.detail)
})


      if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker
            .register("/sw.js")
            .then((registration) => {
              console.log("Service worker registered:", registration);
            })
            .catch((error) => {
              console.error("Service worker registration failed:", error);
            });
        });
      }
