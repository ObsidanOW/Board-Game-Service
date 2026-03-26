import { errorCustomEvent } from "./errorCustomEvent.mjs";
import { GoUser, GoOffline } from "./ViewHandling.mjs";

export function errorFallback(response) {

    switch (response.status) {
        case 401:
            GoUser();
            break;
        case 502:
        case 503:

            break;
    }

    if(!response.ok){
errorCustomEvent(response);
    }
}