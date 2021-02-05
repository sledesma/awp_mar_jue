self.addEventListener('install', e => {
    // Se dispara UNA SOLA VEZ al momento de registrar el SW
    // Sirve para añadir los archivos fijos a la caché
    // y diseñar la estrategia de cacheado
});

self.addEventListener('activate', e => {
    // Se dispara cada vez que haya un cambio en este archivo (sw.js)
    // Sirve para actualizar la caché
});

self.addEventListener('fetch', async e => {
    /**
    http://127.0.0.1:5500/index.html
    https://fonts.googleapis.com/icon?family=Material+Icons
    http://127.0.0.1:5500/vendor/css/materialize.min.css
    http://127.0.0.1:5500/resources/css/styles.css
    http://127.0.0.1:5500/vendor/js/materialize.min.js
    http://127.0.0.1:5500/resources/js/main.js
    https://fonts.gstatic.com/s/materialicons/v76/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2
    http://127.0.0.1:5500/manifest.json
    http://127.0.0.1:5500/resources/icons/cart_192.png
    */
    /*
    console.log(e.request.url);
    if(e.request.url == 'http://127.0.0.1:5500/resources/css/styles.css') {
        e.preventDefault();
        const res = await fetch('resources/css/nuevosEstilos.css')
        e.respondWith(res)
    }
    */
});