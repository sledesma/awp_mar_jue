const CACHE_VERSION = "1";
(VENDOR_CACHE_NAME = "SL_INMUTABLE_CACHE_V" + CACHE_VERSION),
	(VENDOR_CACHE_FILES = [
		"/vendor/css/materialize.min.css",
		"/vendor/js/materialize.min.js",
		"/vendor/css/material-icons.css",
		"/vendor/css/fuente.woff2",
	]),
	(SITE_CACHE_NAME = "SL_SITE_CACHE_V" + CACHE_VERSION),
	(SITE_CACHE_FILES = [
		"/",
		"/sw.js",
		"/index.html",
		"/manifest.json",
		"/resources/css/styles.css",
		"/resources/js/main.js",
		"/resources/icons/cart_192.png",
	]),
	(DINAMICA_CACHE_NAME = "SL_DINAMICA_V" + CACHE_VERSION);

self.addEventListener("install", (e) => {
	const promesaCache = async function () {
		const vendorCache = await caches.open(VENDOR_CACHE_NAME);
		const sitioCache = await caches.open(SITE_CACHE_NAME);
		const promCaches = Promise.all([
			vendorCache.addAll(VENDOR_CACHE_FILES),
			sitioCache.addAll(SITE_CACHE_FILES),
		]);

		console.log("Copiando archivos a la cache...");

		return promCaches;
	};

	e.waitUntil(promesaCache());
});

self.addEventListener("activate", (e) => {});

self.addEventListener("fetch", (e) => {
	/*
	const promRes = async function () {
		const res = await caches.match(e.request);

		if (res) {
			console.log("[SW] Respondiendo desde la cache");
			return res;
		} else {
			const resFetch = await fetch(e.request);

			const cacheDin = await caches.open(DINAMICA_CACHE_NAME);

			cacheDin.put(e.request, resFetch);

			return resFetch;
		}
	};

	promRes().then((res) => {
		e.preventDefault();
		e.respondWith(res);
	});*/


	e.respondWith(
		caches.match(e.request).then(res => {
			if(res) {
				console.log("[SW] Respondiendo desde la cache");
				return res;				
			} else {
				return fetch(e.request).then(fetchRes => {
					caches.open(DINAMICA_CACHE_NAME).then(cacheDin => {
						cacheDin.put(e.request, fetchRes);
					});
					return fetchRes;
				})
			}
		})
	);

});
