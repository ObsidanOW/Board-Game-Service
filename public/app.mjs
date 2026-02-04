import { UserSettingsView } from "./views/UserSettingsView.mjs";
import { PostUsers } from "./views/api_service.mjs";

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
console.log("event object: ", evt)
PostUsers(evt.detail);
})

function NavigateTo(view, push){
if(view){
    pageContainer.innerHTML = ""
    pageContainer.appendChild(viewmap[view])
}
}