const SL_CACHE_NAME = "SL_CACHE_V1",
	SL_CACHE_FILES = [
		"/",
		"/sw.js",
		"/index.html",
		"/vendor/css/materialize.min.css",
		"/resources/css/styles.css",
		"/vendor/js/materialize.min.js",
		"/resources/js/main.js",
		"/manifest.json",
        "/resources/icons/cart_192.png",
        "/vendor/css/material-icons.css",
        "/vendor/css/fuente.woff2"
	];

self.addEventListener("install", (e) => {
	// Se dispara UNA SOLA VEZ al momento de registrar el SW
	// Sirve para añadir los archivos fijos a la caché
	// y diseñar la estrategia de cacheado

	const promesaCache = async function () {
		const miCache = await caches.open(SL_CACHE_NAME);

		console.log("Copiando archivos a la cache...");

		return miCache.addAll(SL_CACHE_FILES);
	};

	e.waitUntil(promesaCache());
});

self.addEventListener("activate", (e) => {
	// Se dispara cada vez que haya un cambio en este archivo (sw.js)
	// Sirve para actualizar la caché
});
// Lanzar un REQUEST [evento fetch] Recibe un RESPONSE
// La Cache JS es un alamacen OFFLINE de RESPONSE asociados a un REQUEST determinado
/**
 * Cache = [
 *  Request => Response,
 *  Request2 => Response2
 * ]
 */
self.addEventListener("fetch", (e) => {
	e.respondWith(
		caches.open(SL_CACHE_NAME).then((miCache) => {
			return miCache.match(e.request).then((res) => {
				console.log(res);
				return res;
			});
		})
	);
});
