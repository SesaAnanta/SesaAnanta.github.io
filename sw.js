/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c7c6f667453830bd6246f2e6484ab298"],["/about/index.html","589f18366613d1876334d68bcda1f055"],["/album/BH3.html","7678749bde5851cdb5d7acd9a6113794"],["/album/collegiate.html","ff084542d2fd20189c3b3f151b7854ba"],["/album/index.html","1d069a9767ae8e393c4073c208efd898"],["/archives/2023/12/index.html","66fad82bc6fd73155c68ad85c86d80cf"],["/archives/2023/index.html","2f651b79e98f08f03d2959b43e302136"],["/archives/2024/01/index.html","c3aceed8a21e4f34c5f3f8a4a34d596e"],["/archives/2024/01/page/2/index.html","508e21b5205d3e97c6de5d86ee657eb0"],["/archives/2024/01/page/3/index.html","5c5ccecfda52fef3a8baa0218467cb68"],["/archives/2024/01/page/4/index.html","755417dead670562adff3fe3a2f548dd"],["/archives/2024/01/page/5/index.html","66a3ca5b8310ecc42c7c909aa9a9afc8"],["/archives/2024/02/index.html","5059b2383c2626c9efcfad6cbc406164"],["/archives/2024/03/index.html","bc2fbfd44f814195e0778d7373150dcd"],["/archives/2024/05/index.html","bebb4b90c4d566ecc50482f08a932def"],["/archives/2024/06/index.html","f255d6686eeffa3f5bb77b23b9c3f24d"],["/archives/2024/07/index.html","3b34f43de53bb7ca033e2e80e5d56e21"],["/archives/2024/08/index.html","f283da2298d3156fb61ee878a9f06360"],["/archives/2024/index.html","978fa02e8b5dcca3ac775ef4951783a7"],["/archives/2024/page/2/index.html","b1b0421e5650144c77082eb136d666b3"],["/archives/2024/page/3/index.html","8d8f57055aa78223921112fbf03b0f33"],["/archives/2024/page/4/index.html","12eed56f1fd9fdd7872b21c031f29f1d"],["/archives/2024/page/5/index.html","9fef7c1ed30f599c9d00feaa50b421e6"],["/archives/2024/page/6/index.html","ab98bc4cdefcff291d6c1678aec0ebc2"],["/archives/2024/page/7/index.html","2a313f3ff90d9ffc2da93b7198caaffd"],["/archives/2025/01/index.html","180edea4e4c9b313b8d4d84108c6f7f3"],["/archives/2025/index.html","b7f65d0ded27fc511370ddf238d23c4b"],["/archives/index.html","8fa4d25d4bcd8d3d4cd374b2796d3e23"],["/archives/page/2/index.html","76bd354bbab6d47d5ea82e5cbfe33b0c"],["/archives/page/3/index.html","198c145c787d44aa433917595dd75d7f"],["/archives/page/4/index.html","19da5f513b3257e7215d6bfe3c7b8057"],["/archives/page/5/index.html","64fa3f6ef55cd2c4b45d42b4d235c5fc"],["/archives/page/6/index.html","397b6eaadf7b5a009e06467e5eba47ea"],["/archives/page/7/index.html","ad1d271a3d0d752f87f2cabab482a801"],["/archives/page/8/index.html","545318ddd3d8b7668b6c2967e6e3a075"],["/categories/AI/index.html","29ca7ecb4129335e29a44a8079627e37"],["/categories/hexo/index.html","b34c6b72f46adfa07d9f3f6623a8bbe1"],["/categories/index.html","8dfbd953d9d4ecac0455bf48a5bec406"],["/categories/动漫推荐/index.html","983482efbd91e8bcf06e25d0af724e18"],["/categories/每日一练/index.html","7a1567a28ce96bab5f25fceab49d7f2d"],["/categories/每日一练/page/2/index.html","7c3b2b6430e7dde2ca3b1c31a2e0eaf9"],["/categories/知识/Typora/index.html","6131343aa7be33378552b92fe493f988"],["/categories/知识/index.html","80bcb8fbbdb3308cfcd8b3576798de0b"],["/categories/网络文学/index.html","1d0b60f91604d4ca1bb72e0d68e86be5"],["/categories/网络文学/page/2/index.html","9122527e1e736968ca1204c04d0133da"],["/categories/网络文学/page/3/index.html","093e8670ea2c1a7c7e46be4de7e9fce1"],["/categories/网络文学/page/4/index.html","507b17fa10fb65d15f3280bf28a01830"],["/categories/网络文学/page/5/index.html","819bc8c0b8609fb5fff7bf84a9871547"],["/categories/购物/index.html","2f4a275bcd53c142b7cde2e81f926245"],["/categories/随笔/index.html","554b40d259ac373577b7de32c3e6e910"],["/comments/index.html","156b979840528109fcc2dd46f4107d92"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","8a3caa675a6e33c0982636466a699bf5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","91246d9490bf46046dcf63bbdc14cdb0"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d97f2780a99bef3089762ab07e8375a2"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","53ef64018cb30da3b2e9fd47298efdb9"],["/page/2/index.html","c6d6beb74dd138e800fd6ffa6bb68c63"],["/page/3/index.html","9d9e0282cc731343114d0c7ac98a9804"],["/page/4/index.html","bc0c48416dab62a6faa21fd318399ff8"],["/page/5/index.html","fc012e687fee1cf767822fc451a7a8a7"],["/page/6/index.html","932f7d7dbf0590ea3604e0a927b15ed3"],["/page/7/index.html","9bd1b2a5f01eaaccaa37ad950bec7719"],["/page/8/index.html","48cbdf6a3f87aa2e6ed50c9b68ca74ea"],["/plan/index.html","7876c10ce19c5bd723f3fb9115a967e8"],["/posts/0.html","a8ec9ad7d510de169c4355edb41fafe7"],["/posts/10a3.html","16359d771320cc6a0c6bf5df552f0c2a"],["/posts/16107.html","e7e9d83d68a36c8dc3c35adb92fa3739"],["/posts/19dd.html","75948a485de37f879ecddbf81504c86d"],["/posts/20040.html","3afe764de5de00bcc4027b2752957dca"],["/posts/203c.html","200daa57082ae957807777ef40fd0ae9"],["/posts/22034.html","6fbe1973900046f38a2baba3859e16d9"],["/posts/22f1.html","cf840d37bd73609d5e5c2b02732e27ea"],["/posts/23777.html","a912121718b7030d87eb498d803ce5ea"],["/posts/27400.html","eda16b2e157ce1a0a61c8b889c4e43b5"],["/posts/28045.html","e788308d7eb8b8096744c2b91c2c09d3"],["/posts/29243.html","18ab0a6d02701a5a1cfa16f8408c6156"],["/posts/29668.html","b14929da70ebf12b503fbf3258a8de07"],["/posts/29695.html","a6842931b9bd28d75e0e0be03a3cb2ce"],["/posts/2ff.html","e1fef282c272c52685b63253b1ae4a89"],["/posts/3078.html","f9b0cc1a0ffc210e7b129c11a219e430"],["/posts/33a9.html","a05fc29d953b742634882a0a2e328891"],["/posts/3417.html","5502db1662007e69e00b2885e62667fc"],["/posts/3429.html","55a42e472949c9f6da39f4bd12a2f624"],["/posts/34434.html","b72d998e0bb3c5b9bc88236471f4d621"],["/posts/3569.html","bd5184e621e1ba796394ed2b7d0af22f"],["/posts/3ee4.html","80935c22827231c956e6a43f58ac54c7"],["/posts/40776.html","fb5bde2fca49b1c3bf3bff79d38613ba"],["/posts/409d.html","c0216d9def39dbc5b995b4b34868d914"],["/posts/4134.html","dc741c8e78031e02283eaad0b25e0d2d"],["/posts/43378.html","19d0bb4533063656d43b454e9beae8eb"],["/posts/47e2.html","2410e92e7d1158978c144ffbf9b3310c"],["/posts/49318.html","80c28378e3f8cf785c32d05ab121e558"],["/posts/4ff3.html","de660d3d448f55bce47f7892eebd23e9"],["/posts/5068.html","7ec948a1f3dc7cffb440b75979338ad7"],["/posts/51833.html","37a49805cac4cd67388f05049cfa704c"],["/posts/53de.html","e3e61da8b2d4433b7437cf01933c0fb6"],["/posts/57116.html","96a8562b73f36ac00c39a371ebe1a317"],["/posts/5be1.html","6dc1cb83cf91e3d5adfb9da084452524"],["/posts/5f25.html","280684fae9f8005297bced0a1ab1c84a"],["/posts/6044.html","39171b6b3fe784a730f2c1f49ce00b0c"],["/posts/62819.html","78418a6a2e5b0b14971f6a9fbd1b8364"],["/posts/6581.html","10612dca2de2dfcd901ef69d5cda277f"],["/posts/6780.html","1dd4e05c335fc135c711f62d85e77a76"],["/posts/6b6e.html","8abfd57de0baed1d1b508e62d8848341"],["/posts/73a2.html","38351cc398171272cdde930af11e01c9"],["/posts/78e8.html","3d7e893e9e7743426642ac5de6dcc3ec"],["/posts/7967.html","d065e740470a483bf416391e66fcfe86"],["/posts/7a27.html","528e358d0e477cd8bf2c3c3d9bf4cd5a"],["/posts/7a68.html","7a79400680388d3c0899282afdf25968"],["/posts/7d63.html","c2ae4ec212f627eb65a1b63a2981d008"],["/posts/7db9.html","e1b1111e4abbda1b3995607282880829"],["/posts/7f36.html","722a162f09a1e949c06ac91956f54201"],["/posts/8192.html","a73f0724b3f06574b917821723f03179"],["/posts/83fa.html","e80e80fc0f815c37cbf57610be9af5bd"],["/posts/9241.html","6490f8028ad0d90e9a209c393b8644cb"],["/posts/952f.html","828f42a0185bd8c412360dba8e10fd40"],["/posts/97b2.html","7b9b2f2c74153cf3828ea6dde87a4980"],["/posts/98f6.html","14263ebf3da38df11f4cdf709065237b"],["/posts/99d3.html","a66d0b359d23848e4313d17b4e8a1eb1"],["/posts/9e51.html","2cc3fd314be30b1b243afbdb7bef4e02"],["/posts/9eb9.html","b3fb33cc427974cf34866c0caff25f5c"],["/posts/a2b3.html","d7298bbd91ef661032f59f5d05269629"],["/posts/a6ba.html","008d53001457bc88b466e4f416419915"],["/posts/ae47.html","4282a008f6ffe72cb22adfb935c3b7e1"],["/posts/b179.html","6d2bd1253424ce4323596ee6dd1b9c2b"],["/posts/b60.html","bbf5229f5ba8e2c31c573b9bea84faca"],["/posts/b78a.html","fdda1613b63c1f603748fd93d0ac4bb9"],["/posts/bbf7.html","c25080eb52950b7a463d16d056c313c4"],["/posts/bfa4.html","bb088cc1484625914de23a6503bcc3b8"],["/posts/c8b9.html","2052606ac3d1daee057321453350e1d7"],["/posts/c9af.html","a15b586928e70961c12e7b61f1ca5d9c"],["/posts/ccf6.html","6c1bec6272b5ca6bfc61d356b4bfce7f"],["/posts/ce61.html","e0544034ed22cf7e73e7cf0df556c453"],["/posts/dad6.html","333856fc5baa526fa88688a09efd45ea"],["/posts/db65.html","e03814c1d955682e8f4a8534d0b9aab8"],["/posts/e279.html","b823d4b9831f29db2ba7491217809cef"],["/posts/e56d.html","a4b15edf124e1ddd39a46f7d8dae39cd"],["/posts/e672.html","d4eafa83d68dc2960d2aa6e0e2be2ce9"],["/posts/e6e.html","bb07bcc7ee90b8a6934c6532616410ca"],["/posts/e8d2.html","0b4c22956cb7d0e54b055ff23cc5332c"],["/posts/e9e4.html","20b0d4f55c1dab9ee77cd39cd321bf78"],["/posts/f85.html","43cfd0f65cd2fd8c1acf753bb53034c9"],["/posts/fdf4.html","785dae3644717cca11bd1e091b1bc04b"],["/search.xml","55aa11b157dbfcbbf539639465f85109"],["/sw-register.js","19c04e25f0256d534978cea1beb389ae"],["/tags/AI绘画/index.html","d6b3ce4fa2ba369c02501034070412b6"],["/tags/AI软件/index.html","c98f3f9035606d7121fef95b473b6ba3"],["/tags/OVERLORD/index.html","ab8e1e77e23c6e5718d15db31ef3b5b9"],["/tags/OVERLORD/page/2/index.html","240ef756cdc17478ba4af77e049021b2"],["/tags/TYPE-MOON/index.html","9a3f5fbda988f373620b6d8334de3c9e"],["/tags/TYPE-MOON/page/2/index.html","eda7b2a118db0022249f246ee5803249"],["/tags/Typora/index.html","447473303ea6fc60bca591471c3c9fc2"],["/tags/hexo/index.html","e4420a8902b05fb7236ec0db047bb693"],["/tags/index.html","e4201541c08a87c5bb7e1ac0d8554299"],["/tags/live2d/index.html","49485de8a286af06653bb06457e7acc7"],["/tags/shell/index.html","204c7339de3ae2f99a5d925b0f346843"],["/tags/shell/page/2/index.html","2d1f215d6b204ed692c4826c4444e92a"],["/tags/同人二创/index.html","d8e1c227a47e0ff3efe354a877a7b5dc"],["/tags/小说/index.html","99e149e5010705258903ee353df399bc"],["/tags/扮演/index.html","57bccba6a3a4b69742f4d57933e62a84"],["/tags/桌面运维/index.html","e0f3f4f76dd415271029b293c05686fc"],["/tags/知识/index.html","a15ca96c8fca3cc1800b5a7ae9f93090"],["/tags/知识/page/2/index.html","a7a3f21a7a0e6206a3afd4881a8ff4ba"],["/tags/神秘学/index.html","beceb7baa8cdac8d4ca02749bae49f36"],["/tags/老番/index.html","b527756a08da1a98e3749a7e35510c8f"],["/tags/购物/index.html","eea4e93637458f56543c7c85b579a7b4"],["/tags/资料/index.html","277bc9c961657ce3aba8158feeaaabb7"],["/tags/资源网站/index.html","3d6bb1979e441721a92dfc04dfc473a7"],["/tags/闲聊/index.html","4de1a9a55d80794d7fbc7f55af6015af"],["/tags/音乐说明/index.html","a500d660afa5c59d64ff43ed45c04edf"],["/website/index.html","628fb9628f2c0ea377d08bc34bb98df6"]];
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
