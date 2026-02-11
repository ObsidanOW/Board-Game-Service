
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

    console.log("headers: ", headers);

    let response = await fetch(url, headers);

    console.log("response: ", response);
    return response; 

}