// Function to open IndexedDB
export async function openDB() {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('CardDB', 1);

        request.onerror = function (event) {
            console.error('IndexedDB error:', event.target.errorCode);
            reject(event.target.errorCode);
        };

        request.onsuccess = function (event) {
            const db = event.target.result;
            resolve(db);
        };

        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('cards')) {
                const objectStore = db.createObjectStore('cards', { keyPath: 'id' });
                objectStore.createIndex('posX', 'posX', { unique: false });
                objectStore.createIndex('posY', 'posY', { unique: false });
            }
        };
    });
}