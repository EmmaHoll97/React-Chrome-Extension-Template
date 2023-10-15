// background.js
import { 
    onDocumentLoaded 
} from "./listeners";
import { m } from '../shared';
export const onBackgroundMessage = ({type, payload = {}}, {tab, url}, sendResponse) => {
   (async() => {
      const actions = {
          [m.DOCUMENT_LOADED]: async () => onDocumentLoaded(payload), 
      }
      if(type in actions) {
        const response = await actions[type]();
        return sendResponse(response);
      }
   })();
   return true;
}

chrome.runtime.onMessage.addListener(onBackgroundMessage);
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed or updated.');
});




