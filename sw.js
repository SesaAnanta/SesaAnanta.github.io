/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b58f71212f38efd8d33e4791b5e98138"],["/about/index.html","4f29ae51c5ce6af48ed6b6355e15dcc8"],["/album/BH3.html","6b3987e7349a56315cbdda99176ae6cc"],["/album/collegiate.html","232173b653f5ba836de703a8ea9fd351"],["/album/index.html","63a9965673034608ffc71baa6a19b95b"],["/archives/2023/12/index.html","1ab67727e1a6e0ffa5b22ae20fcb83b5"],["/archives/2023/index.html","2c73bb259d5073cc5cb88b07527c86da"],["/archives/2024/01/index.html","53bd863fcf87723f8d35f27f968347fe"],["/archives/2024/01/page/2/index.html","da301c000d69d9e796f213c9941919cc"],["/archives/2024/01/page/3/index.html","6cdc8f6460ba654d0c89f99fbc28b7ee"],["/archives/2024/01/page/4/index.html","8bab15e3c0f7a283a215c3844c94a820"],["/archives/2024/01/page/5/index.html","96afdf6aaa36499d8ca4ed7e7d269847"],["/archives/2024/02/index.html","1274e3ca141d42879e5eb381dfb1fe50"],["/archives/2024/03/index.html","bda90c8a0b2a698eb3848e8cc93faf99"],["/archives/2024/05/index.html","f9445835b86c6a8291f360405c05fe76"],["/archives/2024/06/index.html","64c13cc8b135d1670b525dcf41f67144"],["/archives/2024/07/index.html","6b0ac317cff29fa701cbe400d66efadd"],["/archives/2024/index.html","34e5a3be1cc644558ebe7a47e9ab6941"],["/archives/2024/page/2/index.html","f664f3b40d631a6bf76b3eaf9f67465d"],["/archives/2024/page/3/index.html","b24216b27e81bb9cfd3499c42634c09f"],["/archives/2024/page/4/index.html","aa66a17be1e405810da21cc82e0dd510"],["/archives/2024/page/5/index.html","7a1d8488dc849f7e5bd57675af87625a"],["/archives/2024/page/6/index.html","4f9518ccd48d3ead90faa5542f1875a7"],["/archives/2024/page/7/index.html","1b4e4ec9c2b213146c5c2d872ccd0e14"],["/archives/index.html","1cb480aaa1e07676a860b5a4cc590603"],["/archives/page/2/index.html","ec38450ce3107924801e3225e059a496"],["/archives/page/3/index.html","3a7ef7d6fe6ab733db4c6df01fc26339"],["/archives/page/4/index.html","53b3cbb1fa4a0437893d1efcd94a27e0"],["/archives/page/5/index.html","bb26f3b62a7f1dfb81192c0025a27216"],["/archives/page/6/index.html","36b30f9a6368f3aff3774c10c4a4fb61"],["/archives/page/7/index.html","8cb5d3b8f813d1f1979827b24c914dbc"],["/archives/page/8/index.html","b52bb47986827433426a267f4cb787b5"],["/categories/AI/index.html","413f62592e1af2610bd6e68dab23003b"],["/categories/hexo/index.html","e62cbc02eb0020cbf58b52e80e92b0ec"],["/categories/index.html","88b7876ea6207ef21e08fb553f508b7a"],["/categories/动漫推荐/index.html","231db8fa1c405b519a6e15761817939e"],["/categories/每日一练/index.html","d4b2a6c073a34e2d1800f14cdefb12db"],["/categories/每日一练/page/2/index.html","c5acac2c600a1c13a93132a6fc1845d8"],["/categories/知识/Typora/index.html","e47e821b2588f1eac3e9006cb5920404"],["/categories/知识/index.html","24e5d9530bcc1cb90dd67b062dd30915"],["/categories/网络文学/index.html","0b3f20d1edae3e959b6632bd3f1b8833"],["/categories/网络文学/page/2/index.html","bac62f3d0d4b3e4d15e580b7343fb22e"],["/categories/网络文学/page/3/index.html","841cb7282b4fd2369b5386a9ce08dd1b"],["/categories/网络文学/page/4/index.html","008b1c22c389f85d88a6dfd9734b1fd6"],["/categories/购物/index.html","217b52bf37a87433ed00579634513df4"],["/categories/随笔/index.html","4f332db9d218e846f45a063799abe23c"],["/comments/index.html","ae14343df8c68123882dae64064dbd91"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","4fcd1a17816a5a86807dd50320cd393f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","ddfa2170bb6592b086bd5a8333c93dae"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","87815f4e0794055e3064a83690b92783"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","9defcf1d4a00bd76d20c4ec84f038bd5"],["/page/2/index.html","fad5b02221b2987f5f76304180db8056"],["/page/3/index.html","9f9e889d8bd58658abe7e02df593676c"],["/page/4/index.html","accba88eff08527f032a135c527ccfac"],["/page/5/index.html","705e777c8aa57209a5af1874b4b208f2"],["/page/6/index.html","b02aba074a66536be9d8da628fb417d3"],["/page/7/index.html","87aef19e43a6da59ff64349c97b504b3"],["/page/8/index.html","569b5ed2369e2c22af3f2be297b65a86"],["/plan/index.html","63dad4084d6f46ff3f4b0f8cbd11931d"],["/posts/0.html","863b12c09490a85ba8cf2b1d50ce0c25"],["/posts/10a3.html","d02cf5e4c19d674903b4bb7f7e8a1efa"],["/posts/16107.html","150cb50801b89e72a1ce1238f0e02aaa"],["/posts/19dd.html","5a834873cb66841dc7459668253c5d11"],["/posts/20040.html","1f2a98d6acd539cbe94217984d388bff"],["/posts/203c.html","c58509d16115b84c2869ac9c2ebd8509"],["/posts/22034.html","38360212cf7e59a6a5f83247f3cce250"],["/posts/22f1.html","473faeed7a61460b8517c1e8ea32d7b6"],["/posts/23777.html","3e3b41250e8f6795f7cfd4eb7910705c"],["/posts/27400.html","4896d96aed5aec8027da9bc54d472ac7"],["/posts/28045.html","3d8593014dc86510d48035ab0f08bfc0"],["/posts/29243.html","273945c716b6f680cde52233432c3053"],["/posts/29668.html","0602b2b162c8f0188ffc7cbe405b259d"],["/posts/29695.html","6c43dd68d03c4dec82524a12eb079bf5"],["/posts/2ff.html","e4c0df0aa7337ac389f85f60b054d044"],["/posts/3078.html","c36245cb2632b45f19fbe79f955e3072"],["/posts/33a9.html","2ba31dfe95d1f9c69e56dc36a0a82869"],["/posts/3417.html","6c1d1bf9b9deae90ea15eb41e9c757f7"],["/posts/3429.html","4a99f6d6e121ea6c301cb9e0df2a07c6"],["/posts/34434.html","b3a1ede0bac147c619c9a2cd9e6546e8"],["/posts/3569.html","119a158efcfc31390b34289f829524ba"],["/posts/40776.html","440823fb63c31525610c8fcf2a084717"],["/posts/409d.html","2a97df22059dabcd536a11a10f3cbff6"],["/posts/4134.html","504ca7c1f682cb0e5f6b878fce473e82"],["/posts/43378.html","36e3c19a54a3e805a09b46638e7318ec"],["/posts/49318.html","1b50ae8e402ba8a5c3b4348f3a4129e5"],["/posts/4ff3.html","84b684fa0cf77fdeef39df4f80a9dcd4"],["/posts/5068.html","69b5a0aa063a2ab2221b70c20dfe244a"],["/posts/51833.html","7eb8ab37474b50595372c5668bd78600"],["/posts/53de.html","6ea58c100f0e1ddbd4efdcb41cfa6240"],["/posts/57116.html","9f94b26333f765ab47570e582b0c7d0d"],["/posts/5be1.html","c551d90de773e22d741ea7ab6797a99e"],["/posts/5f25.html","180be09fac7f3960733fe12b9e341a04"],["/posts/6044.html","e86b9d1f57c0370a82dd47d902964df2"],["/posts/62819.html","f0c484c91e4f881bc486baa21e7376bc"],["/posts/6581.html","283e14df80bcd2dc9b45ba09b97aec3e"],["/posts/6780.html","4aecd6e2d2dd3cdf56c443b099c64dfd"],["/posts/6b6e.html","ea8f92226c83ba4b248fb69e15ff9eba"],["/posts/73a2.html","4fb30470b906782bbb5f4877a57a1119"],["/posts/78e8.html","4ff9b8c39c2c201c87a325a62cd9542d"],["/posts/7967.html","359c10600017cee96f1a3bcccb38a11c"],["/posts/7a27.html","de7753a5a73e808d038fc90f1ededdbf"],["/posts/7a68.html","3babe5ff8c480c8f0ed84d671b9ca0ed"],["/posts/7d63.html","6cea25b737ecaf350f0c906212589d81"],["/posts/7db9.html","80e3597ee245e713ab62f8d0a6818fe8"],["/posts/7f36.html","b145c99cc9c1ca6b1f548a4c1cfa39a8"],["/posts/8192.html","6cee90ccedd674f9af7a79b86bbdf64d"],["/posts/83fa.html","6b6e6048f14060166a5711f234e7424a"],["/posts/9241.html","bd33491207cae5fa231947f3af161e75"],["/posts/952f.html","ec69986198344337931c01dd465ef6e9"],["/posts/97b2.html","674b879798063ac70f33ef6b052f2326"],["/posts/98f6.html","635800a598c5b9fd1911e4aa2b813467"],["/posts/9eb9.html","ba1f7bc9f4251af73b2d7b121a3cb864"],["/posts/a6ba.html","3a7edea4bb8629cff246bb80b724aea2"],["/posts/b179.html","201396bf50d9539f595508b5080722c3"],["/posts/b78a.html","d8c5ba94f71087c3bd01ba3ed61f1335"],["/posts/bbf7.html","405f3427981d50f89ecb4abfbd0b410f"],["/posts/bfa4.html","1095e41e09f36ec392ee59da7680b42f"],["/posts/c8b9.html","8d455970fc84205094f09cf319fd0068"],["/posts/c9af.html","b4ebc7096d95207d793844969e2574fd"],["/posts/ccf6.html","2a78cbc48687b824319fe66e1782588a"],["/posts/ce61.html","7a4dfcc173150ca3f47ef64bd9664022"],["/posts/dad6.html","606e70139ed763fba2892ebdbbb90c96"],["/posts/db65.html","559eb4ce377fab2008179f9624f3442a"],["/posts/e279.html","9e628a51d283c3201bc6226cbeb7301e"],["/posts/e56d.html","957e0d55d0da81b2da6a2cc499e1cff9"],["/posts/e672.html","0219734a141df86b9caca00185912c38"],["/posts/e6e.html","9a66dfb721cde5c1bc400f27c08a5c48"],["/posts/e8d2.html","2477517c29d59d7ba195d71a4e0137ed"],["/posts/e9e4.html","022b06f832eb7f3a81b7870b7fa4df3d"],["/posts/f85.html","0dc7c5637feb9b1dfa7e470cbf107b53"],["/posts/fdf4.html","d5fabe8406c6ab378672e2b32f0ed8bf"],["/search.xml","5f4fb450b9379e7db676d25efb1f1e98"],["/sw-register.js","0e2063d6e8d6d9a9ab24d3f244b072c5"],["/tags/AI绘画/index.html","f212eb90eeb3bf665c2ff75480b8106f"],["/tags/AI软件/index.html","33e4ddcd83cdf6aa685e60bc13171873"],["/tags/OVERLORD/index.html","da05d6de364ab84d2fdc74f8a7c2253e"],["/tags/OVERLORD/page/2/index.html","66758f54357dbb5c5749404070ce5bc9"],["/tags/TYPE-MOON/index.html","022b411526c1c3633995c446eb8cad47"],["/tags/Typora/index.html","6c422a6e73915226ab746e7ed47ab1b0"],["/tags/hexo/index.html","95b11f707704fe7e239caadc9301c84f"],["/tags/index.html","a08a29b8ae561b75a98a8c7f2fa3f921"],["/tags/live2d/index.html","0fed0b3288589ddf13e008b5f26902a1"],["/tags/shell/index.html","076a06e19199cd7a0429b4e309855ac9"],["/tags/shell/page/2/index.html","ad837dfa7b0efa027002687a4583ccff"],["/tags/同人二创/index.html","fbd172a00e7191c5eb903d37c184882c"],["/tags/小说/index.html","a0022e4829553ad136bfb067d3cf9462"],["/tags/扮演/index.html","fa330bee2ecc4f829c8dbd741344c31a"],["/tags/桌面运维/index.html","57f7c9d47d7faa199a3e3546e2bd0e32"],["/tags/知识/index.html","f82225f5a9c0e8d69ddf07d4f4124f93"],["/tags/神秘学/index.html","a01d988eaad230d67410854f28b4465e"],["/tags/老番/index.html","9c2215ea6a4522f7debc935cd9597708"],["/tags/购物/index.html","bfb975b7ecdaf5fa43b3f374366e188f"],["/tags/资料/index.html","a972d8849258702673bf58a901f63add"],["/tags/资源网站/index.html","3c8d0794483c700c6414f5f49747e4d4"],["/tags/闲聊/index.html","1c834259e925439b08d17c448d87d59a"],["/tags/音乐说明/index.html","32986fde47e5e2246fde067e0f939738"],["/website/index.html","9fc20c5ee4382bfbf9642dbb1ec9d85d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
