
export async function sendRequest(url, cfg){

    try{
        
        const response = await fetch(url, cfg);
        const data = await response.json();

        if(!response.ok){
            throw new Error("Error in fetch")
        }

        return Promise.resolve(data);

       
    } catch(error){

        return Promise.reject(error);
    }
}