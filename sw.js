const CACHE_NAME = "zodiac-v1";
const FILES_TO_CACHE = [
  "/zodiac.html",
  "/solar-time.html",
  "/zodiac_app/css/common.css",
  "/zodiac_app/css/hatizi.css",
  "/zodiac_app/css/ress.min.css",
  "/zodiac_app/css/solar-time.css",
  "/zodiac_app/js/analytics.js",
  "/zodiac_app/js/fix.js",
  "/zodiac_app/js/koyomi.js",
  "/zodiac_app/js/main.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    }),
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    }),
  );
});
