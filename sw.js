// connec+a Console — Service Worker
// 目的: PWA として機能させ、オフライン時に最低限のキャッシュを返す
// 戦略: Network First (常に最新を取得し、失敗時のみキャッシュ)

const CACHE_NAME = 'connecta-console-v1';
const STATIC_RESOURCES = [
  './',
  './index.html',
];

// インストール: 静的リソースをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_RESOURCES)).catch(()=>{})
  );
  self.skipWaiting();
});

// アクティベート: 古いキャッシュを削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// フェッチ: GET のみ Network First
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // GAS / 外部 API はそのままネットワーク (キャッシュしない)
  const url = new URL(event.request.url);
  if (url.hostname.includes('script.google.com') || url.hostname.includes('googleapis.com')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 正常レスポンスをキャッシュに入れる (HTML と CDN のみ)
        if (response && response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)).catch(()=>{});
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
