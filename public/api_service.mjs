import { sendRequest } from "./utils.js";

export async function PostUser(Form){
    const url = "/user/createuser"
    const cfg = {
        method: "POST",
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

export async function PatchUser(Form){

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