import { getToken } from "../../app.mjs";
import { sendRequest } from "./fetchManager.mjs";
import { errorFallback } from "../errorFallback.mjs";
import { errorCustomEvent } from "../errorCustomEvent.mjs";
import HTTP from "./https.mjs";

export async function get(url, contentType) {
    try {
        const data = await sendRequest("GET", url, null, contentType);
        return data;
    } catch(err) {

        throw err;
    }
}

export async function GetConnectionTest() {
    const url = "/content";
    try {
        const data = await sendRequest("GET", url, null, null);
        errorFallback(data)
        return data;
    }
    catch (err) {

        throw err;
    }
}

export async function GetLanguage() {
    const url = "/content/language";
    try {
        const data = await sendRequest("GET", url, null, null);
        errorFallback(data)
        const json = await data.json();
        return json;
    } catch (err) {

        throw err;
    }
}

export async function GetGames() {
    const url = "/content/home";
    try {
        const data = await sendRequest("GET", url, null, null);
        errorFallback(data)
        const json = await data.json();
        return json;
    } catch (err) {

        throw err;
    }
}

export async function GetUserPage() {
    const url = "/user/";
    try {
        const data = await sendRequest("GET", url, null, null);
        errorFallback(data)
        const json = await data.json();
        return json;
    } catch (err) {

        throw err;
    }
}

export async function PostUserCreate(Form) {
    const url = "/user/createuser"
    try {
        const data = await sendRequest("POST", url, Form, HTTP.contentTypes.application.json);
        errorFallback(data)
        const json = await data.json();
        return data;
    } catch (err) {

        throw err;
    }
}

export async function PostUserLogin(Form) {
    const url = "/user/login"
    try {
        const data = await sendRequest("POST", url, Form, HTTP.contentTypes.application.json);
        errorFallback(data)
        const json = await data.json();
        return json;
    } catch (err) {

        throw err;
    }
}

export async function PatchUser(Form) {
    const url = "/user/edituser"

    try {
        const data = await sendRequest("PATCH", url, Form, HTTP.contentTypes.application.json, getToken());
        errorFallback(data)
        return;
    } catch(err) {

        throw err;
    }
}

export async function DeleteUser(Form) {
    const url = "/user/deleteuser"

    try {
        const data = await sendRequest("DELETE", url, Form, HTTP.contentTypes.application.json, getToken());
        errorFallback(data)

        return;
    } catch(err) {

        throw err;
    }
}