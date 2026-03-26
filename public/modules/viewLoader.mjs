import {get} from "./API/requests.mjs"
import HTTP from "./API/https.mjs"

async function loadView(name){
   const viewTemplateRaw = await get(`./views/${name}.html`, HTTP.contentTypes.text.html);
const template = document.createElement("template");
template.innerHTML = await viewTemplateRaw.text();
return template;
}

export default loadView