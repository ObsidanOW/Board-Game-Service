import fs from "node:fs"

export const errEnum = {
    wrongCredentials: "wrongCredentials",
    nonExistentGame: "nonExistentGame",
    usernameIsTaken: "usernameIsTaken",
    serverError: "serverError",
    databaseError: "databaseError",
}

export const i18n = {

}

export const Languages = {
    ENGLISH: "en",
    NORWEGIAN: "no",
}

const path = `./modules/languageProvider/languages`
let files = fs.readdirSync(`./${path}`);
for (let file of files) {
    let id = file.replace(".json", "");
    let content = JSON.parse(fs.readFileSync(`./${path}/${file}`, "utf8"));
    i18n[id] = content;
}


