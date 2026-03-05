import EnglishMessages from "./EnglishMessages.mjs";
import NorwegianMessages from "./NorwegianMessages.mjs";

export const errEnum = {
    wrongCredentials: "wrongCredentials",
    nonExistentGame: "nonExistentGame",
    usernameIsTaken: "usernameIsTaken",
    serverError: "serverError",
    databaseError: "databaseError"
}

export const LanguageProviders = {
    ENGLISH: "ENGLISH",
    NORWEGIAN: "NORWEGIAN",
}

export function wrongCredentials(languageEnum) {
    switch (languageEnum) {
        case LanguageProviders.ENGLISH:
            return EnglishMessages.wrongCredentials();
        case LanguageProviders.NORWEGIAN:
            return NorwegianMessages.wrongCredentials();
    }

}

export function nonexistentGame(languageEnum) {
    switch (languageEnum) {
        case LanguageProviders.ENGLISH:
            return EnglishMessages.nonExistentGame();
        case LanguageProviders.NORWEGIAN:
            return NorwegianMessages.nonExistentGame();
    }

}

export function  usernameIsTaken(languageEnum){
   switch (languageEnum) {
        case LanguageProviders.ENGLISH:
            return EnglishMessages.usernameIsTaken();
        case LanguageProviders.NORWEGIAN:
            return NorwegianMessages.usernameIsTaken();
    }  
}

export function serverError(languageEnum) {
    switch (languageEnum) {
        case LanguageProviders.ENGLISH:
            return EnglishMessages.serverError();
        case LanguageProviders.NORWEGIAN:
            return NorwegianMessages.serverError();
    }
}

export function databaseError(languageEnum) {
    console.log(languageEnum);
    switch (languageEnum) {
        case LanguageProviders.ENGLISH:
            return EnglishMessages.databaseError();
        case LanguageProviders.NORWEGIAN:
            return NorwegianMessages.databaseError();
    }
}