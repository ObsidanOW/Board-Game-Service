import { GoUserSettings } from "../ViewHandling.mjs";

export function errorFallback(errorCode) {

    switch (errorCode) {
        case 401:
           GoUserSettings();
            break;
    }
}