import { GoUser } from "../ViewHandling.mjs";

export function errorFallback(errorCode) {

    switch (errorCode) {
        case 401:
            GoUser();
            break;
    }
}