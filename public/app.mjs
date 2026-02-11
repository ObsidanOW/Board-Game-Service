import UserSettingsController from "./controller/UserSettingsController.mjs";
import { PostUser } from "./fetchManager.mjs";

const userSettings = new UserSettingsController(document.body);

document.addEventListener("CreateUserEvent", (evt) =>{
    console.log(evt)
    PostUser(evt.detail)
})