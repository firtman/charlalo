// SW Chárlalo v.2

const CACHE_NAME = "charlalo";
const urlsToCache = ["/", "styles.css", "scripts/camera.js", "scripts/charlalo.js", "scripts/recognition.js", 
    "scripts/synthesis.js", "/pictogramas.json", "imagenes/charlalo_titulo.svg", "imagenes/icono.png"];

self.addEventListener("install", event => {
    // Pre-cache archivos para offline y performance; los pictogramas los dejamos para la primera carga
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache).then( async () => {
                const response = await fetch("/pictogramas.json");
                const json = await response.json();
                const pictogramas = json.map(p => "/imagenes/pictogramas/" + p.archivo);
                return cache.addAll(pictogramas);
            });
        })
    );
});

// Cache First Policy
self.addEventListener("fetch", event => {
  event.respondWith(
      caches.match(event.request)  
          .then(function(response) {
              if (response) {  // CACHE HIT
                  return response;
              } else {    // CACHE MISS
                  return fetch(event.request);
              }
          })
  );
});

