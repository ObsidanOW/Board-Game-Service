
export async function sendRequest(method, url, data, contentType){
        const headers = {
        method,
        headers: {
            'Content-Type': contentType,
        }
    };

    if(data){
        headers.body = JSON.stringify(data)
    }

    let response = await fetch(url, headers);
    return response; 

}