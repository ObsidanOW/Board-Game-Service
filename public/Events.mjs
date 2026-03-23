import { GoHome, GoUser,GoGameDetail, GoUserSettings, LoginUser, DeletingUser } from "./ViewHandling.mjs";

document.addEventListener("GoHome", async (evt) => {
 GoHome();
})

document.addEventListener("GoUser", async (evt) => {
  GoUser();
})

document.addEventListener("GoGameDetail", async (evt) => {
  GoGameDetail(evt.detail.game);
})

document.addEventListener("GoUserSettings", async (evt) => {
  GoUserSettings();
})

document.addEventListener("LoginUserEvent", async (evt) => {
  LoginUser(evt.detail);
})

document.addEventListener("CreateUserEvent", (evt) => {
  CreateUser(evt.detail);
})

document.addEventListener("EditUserEvent", (evt) => {
  EditUser(evt.detail);
  
})

document.addEventListener("DeleteUserEvent", (evt) => {
  DeletingUser(evt.detail)
})
