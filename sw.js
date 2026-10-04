// 설치 조건을 맞추려는 최소 서비스 워커. 아무것도 저장하지 않고 요청은 그대로 네트워크로 간다.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* 네트워크 그대로 */ });
