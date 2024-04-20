import {openDB} from './../database/dbconnect.js'
export async function handleDelete(){
    const db = await openDB();
    let toBeDeletedCard =  this.closest('.card');
    let cardUuid = toBeDeletedCard.dataset.id;

    const transaction = db.transaction(['cards'], 'readwrite');
    const objectStore = transaction.objectStore('cards');
    if(objectStore.delete(cardUuid)){
        toBeDeletedCard.remove();
    }

}