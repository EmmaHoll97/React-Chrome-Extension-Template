import { m } from "../shared";
import {
    onDocumentLoaded
} from "./listeners";
import { initialize } from "./lib";

export const onForegroundMessage = (event) => {
    (async () => {
        const actions = {
            [m.DOCUMENT_LOADED]: async () => onDocumentLoaded(event),
        }
        //check tab messages
        if (event.type && event.type in actions) {
            await actions[event.type]();
        }
        //check frame messages
        if (event.data && event.data.type in actions) {
            await actions[event.data.type]();
        }
    })();
    return true;
}

chrome.runtime.onMessage.addListener(onForegroundMessage);
window.addEventListener('message', onForegroundMessage);
initialize();