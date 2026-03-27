const CACHE_NAME = "cache";
const cacheFiles = [
  '/',
  '/index.html',
  '/app.css',
  '/app.mjs',
  '/modules/localStorage.mjs',
  '/modules/API/fetchManager.mjs',
  '/modules/ViewHandling.mjs',
  '/controller/BoardgameDetailController.mjs',
  '/controller/BoardgameListController.mjs',
  '/controller/OfflineController.mjs',
  '/controller/UserSettingsController.mjs',
  '/views/BoardgameDetailView.html',
  '/views/BoardgameListView.html',
  '/views/BoardgameListItem.html',
    '/views/OfflineView.html',
  '/views/UserSettingsView.html',
  '/modules/findElement.mjs',
  '/modules/componentControllers/userButton.mjs',
  '/modules/componentControllers/homeButton.mjs',
  '/modules/viewLoader.mjs',
  '/modules/Events.mjs',
  '/modules/API/requests.mjs',
  '/modules/API/https.mjs',
  '/modules/errorCustomEvent.mjs',
  '/modules/errorFallback.mjs',
  '/modules/componentControllers/errorFieldController.mjs'
]


self.addEventListener('install', event => {
  try {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => cache.addAll(cacheFiles)).catch(() => {
          throw new Error("failed setting up static cache");
        })


    )
  } catch (err) { console.error("cache failed: ", err) }
});

self.addEventListener('fetch', event => {

  event.respondWith((async () => {

    try {
      const cache = await caches.match(event.request)
      if (cache) {
        return cache
      }else{
        return await fetch(event.request)
      }



    } catch (err) {
      console.error(err);
      return new Response("", { status: 503});
    }

  }
  )())
})
