import { GoHome, GoUser, GoGameDetail, LoginUser, DeletingUser, CreateUser, EditUser } from "./ViewHandling.mjs";

console.log("events runs")

document.addEventListener("GoHome", async (evt) => {
 GoHome();
})

document.addEventListener("GoUser", async (evt) => {
  GoUser();
})

document.addEventListener("GoGameDetail", async (evt) => {
  GoGameDetail(evt.detail.game);
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
