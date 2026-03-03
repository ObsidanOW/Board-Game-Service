export let LanguageManagerInstance = null;

export const LanguageProviders = {
    ENGLISH,
    NORWEGIAN,
}

class LanguageManager {
    constructor() {
        if (instance === null) {
            this = instance
        }
    }


    WrongCredentials() {
        switch (LanguageProviders) {
            case ENGLISH:

                break;
            case NORWEGIAN:

                break;
        }
    }

    NonexsistentGame() {
        switch (LanguageProviders) {
            case ENGLISH:

                break;
            case NORWEGIAN:

                break;
        }
    }


}

const languageManager = new LanguageManager