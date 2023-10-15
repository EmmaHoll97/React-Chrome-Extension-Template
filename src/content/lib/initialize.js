import { m } from '../../shared'

export const initialize = async () => {
    console.log(`Hello from the content script!! `);
    m.send(m.DOCUMENT_LOADED);
}