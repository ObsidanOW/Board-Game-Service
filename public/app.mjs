import UserSettingsController from "./controller/UserSettingsController.mjs";
import { PostUser, PatchUser, DeleteUser } from "./fetchManager.mjs";

const userSettings = new UserSettingsController(document.body);

document.addEventListener("CreateUserEvent", (evt) =>{
    PostUser(evt.detail)
})

document.addEventListener("EditUserEvent", (evt) =>{
    PatchUser(evt.detail)
})

document.addEventListener("DeleteUserEvent", (evt) =>{
    DeleteUser(evt.detail)
})