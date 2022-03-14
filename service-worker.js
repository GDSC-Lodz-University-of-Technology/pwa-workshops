const CACHE_NAME = 'pic-li-v1';
const URLS_TO_CACHE = [
  '/',
  '/styles/style.css',
  '/styles/shared-style.css',
  '/src/index.js',
  '/src/App.js',
  '/src/NewPictureItemForm.js',
  '/src/PictureItem.js',
  '/src/PicturesList.js'
];

self.addEventListener('install', (e) => {
  console.log('ServiceWorker installation completed 😎');
  e.waitUntil(caches.open(CACHE_NAME)
    .then((cache) => {
      console.log('ServiceWorker opened cache 📀');
      const result = cache.addAll(URLS_TO_CACHE);
      console.log('ServiceWorker cached all specified files 💽');
      return result;
    })
    .catch(error => {
      console.error(`ServiceWorker couldn't open cache: `, error);
    })
  )
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request)
    .then((response) => {
      if (response) {
        return response;
      }

      return fetch(e.request).then((newResponse) => {
        if (!newResponse || newResponse.status !== 200 || newResponse.type === 'basic') {
          return newResponse;
        }
        const responseToCache = newResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, responseToCache)
            .then(() => {
              console.log('New resource cached: ', e.request.url);
            })
            .catch((error) => {
              console.error(`Couldn't cache new resource: `, error);
            })
        })
      });
    }));
});