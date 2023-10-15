import { Messages } from "./messages";

class Send extends Messages {
    constructor() {
        super();
    }

    async send(type, payload = {}) {
        chrome.runtime.sendMessage({
            type, payload
        })
    }
    
    async tabMessage(type, payload = {}) {
        // Get the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                const activeTab = tabs[0];
                // Send the payload to the active tab
                chrome.tabs.sendMessage(activeTab.id, { type, ...payload }, (response) => {
                    if (chrome.runtime.lastError) return;
                    // Handle the response from the active tab if needed
                    console.log(`Payload sent to the active tab`);
                    if (response) {
                        console.log(`Response from the active tab:`, response);
                    }
                });
            }
        });
    }

    async postMessage(doc, type, payload = {}) {
        if (!doc || typeof doc.postMessage !== 'function') {
            console.error('Invalid document provided.');
            return;
        }
        doc.postMessage({type, ...payload}, "*");
    }
}

export const m = new Send();