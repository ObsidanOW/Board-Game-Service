import { sendRequest } from "../utils.js";

export async function PostUsers(Form){
    const url = "user/createuser"
    
    const cfg = {
        method: "POST",
        body: Form
    }
    try{
       const data = await sendRequest(url,cfg)
       return;
    }catch{
//TODO errorhandling
    }
}