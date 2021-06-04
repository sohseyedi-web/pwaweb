const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
const ASSETS_CACHE = [
    '/',
    '/auth.html',
    '/about.html',
    '/img/bars.png',
    '/css/auth.css',
    '/css/style.css',
    '/css/Shabnam.css',
    '/js/auth.js',
    '/js/serverApi.js',
    '/js/app.js',
    '/js/script.js',
]

self.addEventListener('install', (e) => {
    console.log('[SW] is install', e);
    e.waitUntil(
        caches.open(STATIC_CACHE).then((chache) => {
            chache.addAll(ASSETS_CACHE)
        })
    )
})
self.addEventListener('activate', (e) => {
    console.log('[SW] is activated', e);
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== DYNAMIC_CACHE && key !== STATIC_CACHE) {
                    return caches.delete(key)
                }
            }))
        })
    )
})
self.addEventListener('fetch', (e) => {
    console.log('[SW] is fetching', e);
    const request = e.request;

    e.respondWith(
        caches.match(request).then((response) => {
            return response || fetch(request).then((res) => {
                caches.open(DYNAMIC_CACHE).then((chache) => chache.put(request, res))
                return res.clone()
            })
        })
    )
})