import { sendRequest } from "../utils.js";

export async function PostUsers(Form){
    const url = "user/createuser"
    const stringifyForm = JSON.stringify(Form);
    console.log("API service: ", stringifyForm);
    
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