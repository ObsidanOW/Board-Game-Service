import { errorCustomEvent } from "./errorCustomEvent.mjs";
import { GoUser, GoOffline } from "./ViewHandling.mjs";

export function errorFallback(response) {
console.log(response);
    switch (response.status) {
        case 401:
            GoUser();
            break;
        case 502:
        case 503:
            GoOffline();
            break;
    }

    if (!response.ok) {
        errorCustomEvent(response);
    }
}