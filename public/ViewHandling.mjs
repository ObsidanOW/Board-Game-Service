import { getToken, setToken } from "./app.mjs";
import { PostUserCreate, PostUserLogin, PatchUser, DeleteUser, GetUserPage, GetGames, GetGame, GetLanguage } from "./modules/API/requests.mjs";
import BoardgameListController from "./controller/BoardgameListController.mjs";
import UserSettingsController from "./controller/UserSettingsController.mjs";
import { BoardgameDetailController } from "./controller/BoardgameDetailController.mjs";

export async function GoHome() {
  const games = await GetGames();
  console.log("go home function");
  BoardgameListController(document.body, games)
}

export async function GoUser() {
UserSettingsController(document.body);
}

export async function GoGameDetail(game) {
  BoardgameDetailController(document.body, game, Token);
}


export async function LoginUser(login) {
  const Token = await PostUserLogin(login)
  setToken(Token);
}

export async function CreateUser(user) {
  console.log("create event function");
  PostUserCreate(user);
}

export async function EditUser(user) {
  PatchUser(user);
}

export async function DeletingUser(user) {
  DeleteUser(user, getToken());
}

