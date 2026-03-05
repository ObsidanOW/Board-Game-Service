const CACHE_NAME = "cache";
const cacheFiles = [
    '/',
    '/index.html',
    'app.mjs',
    'app.css'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(cacheFiles))
  );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request)).catch(() => {
          console.log("offline mode")
        })
    )
})
