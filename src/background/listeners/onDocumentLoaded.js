import { m } from '../../shared';

export const onDocumentLoaded = async () => {
   console.log(`document loaded!`);
   m.tabMessage(m.DOCUMENT_LOADED)
   
}