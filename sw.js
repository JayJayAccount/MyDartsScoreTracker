// Service Worker for Darts Score Tracker PWA
const CACHE_NAME = 'darts-tracker-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './dartboard.svg'
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        console.log('Caching critical assets...');
        
        // Cache critical local assets
        await cache.addAll([
          './index.html',
          './manifest.json',
          './dartboard.svg'
        ]);
        
        // Try to cache external CDN assets (non-critical)
        cache.addAll([
          'https://cdn.tailwindcss.com',
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        ]).catch(err => console.log('CDN assets not cached (ok for offline)'));
        
        console.log('Critical assets cached successfully');
      } catch (err) {
        console.error('Cache during install failed:', err);
      }
    })()
  );
  
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Claim all clients immediately
  self.clients.claim();
});

// Fetch event - network first with offline fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle navigation requests (document)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response.ok) {
            const cache = caches.open(CACHE_NAME);
            cache.then(c => c.put(request, response.clone()));
          }
          return response;
        })
        .catch(() => {
          // Fallback to cached version or offline page
          return caches.match(request).then((response) => {
            return response || caches.match('./index.html');
          });
        })
    );
    return;
  }

  // Network first strategy for CSS, JS, fonts, images
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const cache = caches.open(CACHE_NAME);
          cache.then(c => c.put(request, response.clone()));
        }
        return response;
      })
      .catch(() => {
        // Fall back to cache
        return caches.match(request).then((response) => {
          if (response) {
            return response;
          }
          
          // Return appropriate fallback based on request type
          if (request.destination === 'image') {
            return new Response('', { status: 404 });
          }
          
          return new Response('Offline - resource not available', { 
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
      })
  );
});

// Handle messages from the app (for skip waiting)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Background sync for future features
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-stats') {
    event.waitUntil(
      // Sync logic will be implemented here in future
      Promise.resolve()
    );
  }
});

