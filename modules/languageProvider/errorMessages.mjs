import EnglishMessages from "./EnglishMessages.mjs";
import NorwegianMessages from "./NorwegianMessages.mjs";

export const errEnum = {
    wrongCredentials: "wrongCredentials",
    nonExistentGame: "nonExistentGame",
    usernameIsTaken: "usernameIsTaken",
    serverError: "serverError",
    databaseError: "databaseError",
}

export const LanguageProviders = {
    ENGLISH,
    NORWEGIAN,
}

export function wrongCredentials(languageEnum) {
    switch (languageEnum) {
        case LanguageProviders.ENGLISH:
            return EnglishMessages.wrongCredentials();
        case LanguageProviders.NORWEGIAN:
            return NorwegianMessages.wrongCredentials();
    }

}

export function nonexistentGame() {
    switch (languageEnum) {
        case LanguageProviders.ENGLISH:
            return EnglishMessages.nonExistentGame();
        case LanguageProviders.NORWEGIAN:
            return NorwegianMessages.nonExistentGame();
    }

}

export function  usernameIsTaken(){
   switch (languageEnum) {
        case LanguageProviders.ENGLISH:
            return EnglishMessages.usernameIsTaken();
        case LanguageProviders.NORWEGIAN:
            return NorwegianMessages.usernameIsTaken();
    }  
}

export function serverError() {
    switch (languageEnum) {
        case LanguageProviders.ENGLISH:
            return EnglishMessages.serverError();
        case LanguageProviders.NORWEGIAN:
            return NorwegianMessages.serverError();
    }
}