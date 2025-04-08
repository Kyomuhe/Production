'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9ad51e8b1408ae5c2116a4f6d9bf060a",
".git/config": "131814f9d72d4bef200c2274edee9ad7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6120782906be1f42cb47032ae36ab292",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aea3845f0317a4f6c9ee83593f669685",
".git/logs/refs/heads/main": "f2dec19087979e909e89b461d1cf9387",
".git/logs/refs/remotes/origin/main": "69b378f4c5c134e3eaf449f59da30471",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "e5622d4fe905158fe30674d082391f49",
".git/objects/01/9f5ead734a5459b9af03119eb383ffa16ce710": "f1b737fa51df7233caca649a1e3dbca9",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "8886bd37f74b03a076a67c4a16e9d600",
".git/objects/04/5aaaae2cb54c0dcd2556c37b3ffe1ebd320610": "86c71a036724cc8dc1018e6401f6cc35",
".git/objects/08/66c36ad831e37b09013a6eb12df331b24e6fd0": "6738fc9bc42e0b23a85ada9020b7d0ac",
".git/objects/0a/315591e9829b5b0b9340acfeb14f48e2b0c884": "a4ad159d719c357f6af451bd5821cbc2",
".git/objects/12/c776f9e6143bef6918cd8f11652f64ba08e2cc": "732ccd8f1b617379e169076857161a7b",
".git/objects/18/1f58d80265b830561240fa816e590561375bc9": "0d88ff494ebfddc0e6e7fad51f1bfac9",
".git/objects/1a/c40d878399760f2cad78b911fafde6fa6b7c70": "c8e48bb173c3772b6e633fbc043e2522",
".git/objects/1f/66572f52c8a5475a35bf5911d9d72da160ca8b": "0368accf984435e527a26abeb139dda6",
".git/objects/2a/0e019b863053ccd0cd41b510f768910c13541f": "da2fbe4690247d39b7829875666ddf0a",
".git/objects/2d/2419fab8cef9812fcab64305766382745faef7": "a873e5d18f26e5ebbffc5764d8513915",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "904dbfaa9146b5dd076611b84fc2bfaa",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "c399d83dbed7d3c64776e057cac51659",
".git/objects/35/c70ee21618e68bfa51501dcaa60bed22d92775": "221b0a82b55299ae008e8e601f735fbd",
".git/objects/3b/b8ce13c46b597c2ae70f4138410ec89cdc88a4": "b68eef4b55f6988db054ba2d7f3f9ccd",
".git/objects/40/0e2770f7495597792452707cdcca13367bd72a": "fda667e14abce8d17cbadcad2549fa75",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "a5de474bfeae6792c016eee85ba4cb0f",
".git/objects/4a/9131b2c7b8f18f020f36d799cab46e1b859bf5": "71ca3a2ea701f3564975f1d315c53483",
".git/objects/4c/b9d4608627a128153e66548fabc860629f18a5": "0de1906750b0a6c596cb4cc9adf9ecce",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "a4e7f24dec218df791973958cb81888f",
".git/objects/52/4af83d8a331b3c92bdf506831f5a656028d630": "cc9a64033e8e89f20e13a9c2abd139ae",
".git/objects/52/cb3ff46e2b4ddd1085d9507459326729266d0e": "489c965fd1106f188ba32b28716ca3cf",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "1f701f1008c805bc3fbe95409e6f4a68",
".git/objects/59/ff35d181951782c4d75767e6fc87ba6c23cc09": "4c3522e809dda0b883ae5441961f791d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "639f13477afee64b657908889b8c43ef",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "39fec1410f1ea535dd7b03dd97a0c331",
".git/objects/66/b5e226391786edfc2f6048c85c011faa8abc26": "ae67eb0eda2307c6a49a46340d7a42bb",
".git/objects/67/99b35659f45a5ec8e114a1323cd97971514fb8": "c8c55ef5c9b873c4361021a9cbfa3128",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "8396b2991afceeaf686f438a8354ad40",
".git/objects/6b/d0a56d9e8175ffb391852a6d91f1c64ac361f4": "d4d6e0536eb7bf06f2aae84a2d18627b",
".git/objects/71/ae6fb2c0a75a920e2a87c0c6cacef3ebd1fc93": "7d9bba59e94d94214bb4923d186143dc",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "413c5e648a63f731379c49765fe69139",
".git/objects/75/1e836c98e12df9ac372c3b3d3d94cfd2fc3524": "06d650846d55308ad25a9b49301583ad",
".git/objects/76/a42e0a4cdbe2c9c07ad4e185d84659d2a881e9": "b91476f22f5b9359a18efb9b25272938",
".git/objects/7f/6df5e1c6ee8b70adf69c71542ff68540d1ba4c": "aa05b9c3bf0db2d4aad69b4472edf917",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
".git/objects/8a/374c7e825d96445b069d479840ef2e68340557": "fff046cc25c709552970b0679f864091",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "8ff03b66e6578f0acc0b5ae59eed89fd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "1fb7215494576ebeea4b4559ae6ce39c",
".git/objects/95/5c5f68a88b7ffe7427718749fbaebd1d4aaf23": "cec5189dd57c28b3d952cea060e39fbf",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "4f7f5b37c5c162544fb3266dd6167865",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "08d5d3e0710d025e60cb7518fc709366",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "4a1877ebea9fc192619cea7a4b8086fa",
".git/objects/aa/ebef04c4114492e7e948a09bcf8482e668ba90": "cfe997f5ec0a4a1e1a07bf5825e2c212",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "062a2c4a1a4f1156b9ff03f1cf2dc858",
".git/objects/e1/4b701936c3436df6fb219515ee30013b9cc360": "2fe0549e03340281b18ca15c5e988189",
".git/objects/e5/7520149658af4048f60afa13c9da06e3a61b1f": "e7f4fac63753ddad0f8b065c32553f6a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
".git/objects/ef/21ed702581be15865d1cdb0cfde549cac47636": "3d40324df88bcee8bd9fa24f80cc106d",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "741938af9aab4b7591e325fa23353747",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "a79f2113af9ec38ee1c71886164a383c",
".git/objects/f6/5ba339863858b86147f722e1ab14f566728839": "c173c3a85174125e969e5c4b25c7981c",
".git/objects/fc/f917a9f7ae789066dd50c2bad09643b0ea63e8": "c754482e47c2ea17af48486cfc1c9e76",
".git/refs/heads/main": "95f35a2b36e99a104536d3feb6e311a2",
".git/refs/remotes/origin/main": "95f35a2b36e99a104536d3feb6e311a2",
"assets/AssetManifest.bin": "7e2789b8bfa4057897c703c1ae509f98",
"assets/AssetManifest.bin.json": "628a43a52c91fabda42be2c5754b7352",
"assets/AssetManifest.json": "bd3070e2079dc85963177f9f72a2847e",
"assets/assets/app.png": "8c5bf946f6ff60f7deac753f6d884a8f",
"assets/assets/cal.png": "fcd9881732b846eae0a85c9529d6808a",
"assets/assets/care.png": "8a0e6ed2ad19573c64ff91ac4f408b5e",
"assets/assets/condition.png": "c84bb0fbf15ca85e174a06f03bb8279f",
"assets/assets/diabetes.png": "895b88bcb2020a5cd5a6222d71f63604",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/home.png": "c644bb473f9996f72d3b96f4a7e17f17",
"assets/assets/joint.png": "408e04d12f89ddaf7d2a6a9400988eb6",
"assets/assets/lab.png": "8915258be22c45bf46ae207e2d8ddb8d",
"assets/assets/nurse.png": "90910ede676a0718278604de218bc08a",
"assets/assets/pain.png": "a8ffe392cdab4a3d4c76c08f679a198b",
"assets/assets/precious.png": "d1ad57cce7fe9211b02ee3157700ed78",
"assets/assets/product1.PNG": "62b60bafd1889ca9fef8cd775c293f02",
"assets/assets/product11.PNG": "b22e9ab6d7a24c11bd11d02246f21bd5",
"assets/assets/product12.PNG": "6516d8bf3d6973819ecab20cf082ecba",
"assets/assets/product2.PNG": "516f312aa617bf1beb90d3851b3319dc",
"assets/assets/product21.PNG": "cca39b0be29655e3dc2042b797c5f81e",
"assets/assets/product22.PNG": "415a8cd52f6e23ae05e59e20103d1f2d",
"assets/assets/product3.PNG": "5183db78d7f620161dcb0ad2150aea63",
"assets/assets/product31.PNG": "f93e6f73a89e581c1977e5079ae12ec0",
"assets/assets/product32.PNG": "48ba12e5b2859f435ed75dd63ce902cc",
"assets/assets/product4.PNG": "76707de195cc4f96d20ff5cf6fead305",
"assets/assets/product41.PNG": "6aaba13a06c86cd9770b91f742052766",
"assets/assets/product42.PNG": "305f1e73b98cb318f89b72bb6d651cf5",
"assets/assets/profile.png": "39bdfd0dd6a2cc3ee04edf1ceae8fdd0",
"assets/assets/surgeon.png": "eb72ce8d1bf93be22eea90ebda2d03e3",
"assets/assets/swipper1.png": "788e35fcfd1e21f2ee3a63ce86a5ad99",
"assets/FontManifest.json": "e3b16034a50ec3f5e39f7a3192a39f81",
"assets/fonts/MaterialIcons-Regular.otf": "72d9fbc9e35f1001f4903107199359a3",
"assets/NOTICES": "f094b8008ea8cd8951a0e191e9fe2492",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ddd690437a8435b7eb5aa9d17e68b8de",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "81b81ad7503437efef540872e3e47114",
"/": "81b81ad7503437efef540872e3e47114",
"main.dart.js": "55a2d6f5dc7d74d9b011752d4e5cf50c",
"manifest.json": "3fe6a0ca1461d174bb78c5c690aaafb3",
"version.json": "cc3cdbb4ed692ac51d65ac5271d7b009"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
