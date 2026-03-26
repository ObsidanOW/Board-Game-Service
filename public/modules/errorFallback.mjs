import { GoUser, GoOffline } from "./ViewHandling.mjs";

export function errorFallback(errorCode) {

    switch (errorCode) {
        case 401:
            GoUser();
            break;
        case 502:
        case 503:

            break;
    }
}