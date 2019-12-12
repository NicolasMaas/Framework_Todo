// New sw.js
self.addEventListener('install', (event) => {
    event.waitUntil(async function() {
      const cache = await caches.open('todo-app');
      await cache.addAll([
        '/css',
        'index.html'
      ]);
    }());
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(async function() {
      const cache = await caches.open('todo-app');
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) return cachedResponse;
      const networkResponse = await fetch(event.request);
      event.waitUntil(
        cache.put(event.request, networkResponse.clone())
      );
      return networkResponse;
    }());
  });