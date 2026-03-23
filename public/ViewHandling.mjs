import { Token } from "./app.mjs";
import { PostUserCreate, PostUserLogin, PatchUser, DeleteUser, GetUserPage, GetGames, GetGame, GetLanguage } from "./modules/API/requests.mjs";

export async function GoHome(){
 const games = await GetGames();
  BoardgameListController(document.body, games)
}

export async function GoUser(){
 const games = await GetGames();
  BoardgameListController(document.body, games)
}

export async function GoGameDetail(game){
  BoardgameDetailController(document.body, game, Token);
}

export async function GoUserSettings(){
  UserSettingsController(document.body, Token);
}

export async function LoginUser(login){
  Token = await PostUserLogin(login)
  setStorage("Token", Token)
}

export async function CreateUser(user){
  PostUserCreate(user);
}

export async function EditUser(user){
  PatchUser(user);
}

export async function DeletingUser(user){
  DeleteUser(user, Token)
}

