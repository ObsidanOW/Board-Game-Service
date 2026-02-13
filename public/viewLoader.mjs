import {get} from "./fetchManager.mjs"
import HTTP from "./https.mjs"

async function loadView(name){
   const viewTemplateRaw = await get(`./views/${name}.html`, HTTP.contentTypes.text.html);
   console.log("viewTemplateRaw: ", viewTemplateRaw);
const template = document.createElement("template");
template.innerHTML = await viewTemplateRaw.text();
return template;
}

export default loadView