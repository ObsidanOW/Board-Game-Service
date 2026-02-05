import { UserSettingsView } from "./views/UserSettingsView.mjs";
import { PostUser, DeleteUser } from "./api_service.mjs";

const pageContainer = document.getElementById("pagecontainer");

customElements.define("user-settings-view", UserSettingsView)

const UserSettings = new UserSettingsView(); 

const viewmap = {
    "home": null, 
"userSettings": UserSettings,
}

//TODO NavigateTo
Load();

function Load(){
    NavigateTo("userSettings");

}

pageContainer.addEventListener("CreateUserEvent", async function(evt){

PostUser(evt.detail);
})

pageContainer.addEventListener("EditUserEvent", async function(evt){
console.log("event object: ", evt)
PatchUsers(evt.detail);
})

pageContainer.addEventListener("DeleteUserEvent", async function(evt){
console.log("detected DeleteUserEvent")
DeleteUser(evt.detail);
})

function NavigateTo(view, push){
if(view){
    pageContainer.innerHTML = ""
    pageContainer.appendChild(viewmap[view])
}
}