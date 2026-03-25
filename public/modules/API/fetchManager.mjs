
export async function sendRequest(method, url, data, contentType, Token) {

    let headers = null;

    if (Token === null || undefined) {
        headers = {
            method,
            headers: {
                'Content-Type': contentType,
            }
        };
    } else {
        headers = {
            method,
            headers: {
                'Content-Type': contentType,
                'Authorization': `bearer ${Token}`,
            }
        };
    }

    if (data) {
        headers.body = JSON.stringify(data)
    }

    let response = await fetch(url, headers);
    return response;

}