import { sendRequest } from "./utils.js";
import HTTP from "./https.mjs";

export async function get(url, contentType){
    try{
        const data = await sendRequest("GET", url, null , contentType);
        return data;
    }catch{

    }
}


export async function PostUserCreate(Form){
     const url = "/user/createuser"
    try{
       const data = await sendRequest("POST", url, Form, HTTP.contentTypes.application.json);
      
      const json = await data.json();
      console.log(json);
       return data;
    }catch(err){
        console.log("catch error", err);
//TODO errorhandling
    }
}

export async function PostUserLogin(Form){
         const url = "/user/login"
    try{
       const data = await sendRequest("POST", url, Form, HTTP.contentTypes.application.json);
      console.log("response", data.json);
       return data.json;
    }catch(err){
        console.log("catch error", err);
    }
}

export async function PatchUser(Form){
 const url = "/user/edituser"

     try{
       const data = await sendRequest("PATCH", url, Form, HTTP.contentTypes.application.json);
       console.log("response", data);
       return;
    }catch{
//TODO errorhandling
    }
}

export async function DeleteUser(Form){
    const url = "/user/deleteuser"

     try{
       const data = await sendRequest("DELETE", url,Form, HTTP.contentTypes.application.json);
       console.log("response", data);
       return;
    }catch{
//TODO errorhandling
    }
}