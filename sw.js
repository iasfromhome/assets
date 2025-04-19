const CACHE_NAME = 'trial-cache-v0a';

// जरूरी फाइलें जो offline काम करें
const urlsToCache = [
  'https://iasfromhome.blogspot.com/p/home.html', // home tab
  'https://iasfromhome.blogspot.com/p/current-samachar.html', // current tab
  'https://iasfromhome.blogspot.com/p/courses-library.html', // course tab
  'https://iasfromhome.blogspot.com/p/static-general.html', // static tab
  'https://iasfromhome.blogspot.com/p/practice-daily.html', // practice tab
  'https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQk6YvM.woff2', // Roboto Condensed
  'https://fonts.gstatic.com/s/anekdevanagari/v14/jVyo7nP0CGrUsxB-QiRgw0NlLaVt_QUAkYxLRoCL23mlh20ZVHOMAWbgHLDtkt9hHEwpjo7FA7Q.woff2', // Anek Devanagari
  'https://fonts.gstatic.com/s/mukta/v16/iJWHBXyXfDDVXbF6iGmc8WD07oB-98o.woff2', // Mukta
];

// Install Event: cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate Event: cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch Event: serve cached files if available
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      return (
        cached ||
        fetch(event.request).then(response => {
          // Cache the fetched file for future
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        }).catch(() => caches.match('/p/home.html')) // offline fallback
      );
    })
  );
});
