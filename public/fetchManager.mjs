import { sendRequest } from "./utils.js";
import HTTP from "./https.mjs";

export async function get(url, contentType){
    try{
        const data = await sendRequest("GET", url, null , contentType);
        return data;
    }catch{

    }
}

export async function PostUser(Form){
    const url = "/user/createuser"

    try{
       const data = await sendRequest("POST", url, JSON.stringify(Form), HTTP.contentTypes.application.json);
       console.log("response", data);
       return;
    }catch{
//TODO errorhandling
    }
}

export async function PatchUser(Form){
 const url = "/user/edituser"
    const cfg= {
        method: "PATCH",
        headers: {
    "Content-Type": "application/json"
  },
        body: JSON.stringify(Form)
    }

     try{
       const data = await sendRequest(url,cfg)
       console.log("response", data);
       return;
    }catch{
//TODO errorhandling
    }
}

export async function DeleteUser(Form){
    const url = "/user/deleteuser"
    const cfg= {
        method: "DELETE",
        headers: {
    "Content-Type": "application/json"
  },
        body: JSON.stringify(Form)
    }

     try{
       const data = await sendRequest(url,cfg)
       console.log("response", data);
       return;
    }catch{
//TODO errorhandling
    }
}