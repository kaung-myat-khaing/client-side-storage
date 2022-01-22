self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('video-store').then(function(cache) {
        return cache.addAll([
          '/client-side-storage/indexedDB-Service_worker-video/',
          '/client-side-storage/indexedDB-Service_worker-video/index.html',
          '/client-side-storage/indexedDB-Service_worker-video/index.js',
          '/client-side-storage/indexedDB-Service_worker-video/style.css'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });