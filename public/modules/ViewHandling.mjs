import { getToken, setToken } from "../app.mjs";
import { PostUserCreate, PostUserLogin, PatchUser, DeleteUser, GetUserPage, GetGames, GetGame, GetLanguage } from "./API/requests.mjs";
import BoardgameListController from "../controller/BoardgameListController.mjs";
import UserSettingsController from "../controller/UserSettingsController.mjs";
import { BoardgameDetailController } from "../controller/BoardgameDetailController.mjs";

export async function GoHome() {
  const games = await GetGames();
  BoardgameListController(document.body, games)
}

export async function GoUser() {
UserSettingsController(document.body);
}

export async function GoGameDetail(game) {
  BoardgameDetailController(document.body, game);
}


export async function LoginUser(login) {
  const response = await PostUserLogin(login)
 
  setToken(response.token);
}

export async function CreateUser(user) {
  PostUserCreate(user);
}

export async function EditUser(user) {
  PatchUser(user);
}

export async function DeletingUser(user) {
  DeleteUser(user);
}
