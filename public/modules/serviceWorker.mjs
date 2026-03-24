const CACHE_NAME = "cache";
const cacheFiles = [
  './',
  './index.html',
  './app.css',
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(cacheFiles)).catch(() => {
        throw new Error("failed setting up static cache");
      })

  )
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request)).catch(() => {
      if (event.request.mode === "navigate") {
        return new Response(null, {status:503, statusText: "can't connect to internet and or server"})
      }
    })
  )
})
