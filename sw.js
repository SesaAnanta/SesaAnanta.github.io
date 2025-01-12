/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","60c795bc57b5c959b6bbfee15f3df9ac"],["/about/index.html","d179ec230731893ba90c23506f6d7ee5"],["/album/BH3.html","4cea4441f847c0844d600192be63a7ab"],["/album/collegiate.html","c66ac372e38a50b20cda36cd010e809c"],["/album/index.html","9b9204e1f01fb654643e15b4f245726a"],["/archives/2023/12/index.html","fb8d4a38629c4d59a917aac3ef50599d"],["/archives/2023/index.html","171d9372c4e096cd8afacdde3dbe65a9"],["/archives/2024/01/index.html","f15cd2b1830e5d409b504bdb21cea5e8"],["/archives/2024/01/page/2/index.html","15667842aa8b07d82f7cdd4c4147950e"],["/archives/2024/01/page/3/index.html","9ccf016bcdefa6a5fc2e20ddffd32ac8"],["/archives/2024/01/page/4/index.html","3af81437d431c13a6f03eba946b6db60"],["/archives/2024/01/page/5/index.html","c9bd26e23674cb819189ebecad530e1a"],["/archives/2024/02/index.html","b64cfc714b31091bf8b9286ff9a9035c"],["/archives/2024/03/index.html","f5c188c930aed81af10e11e9179cb6fc"],["/archives/2024/05/index.html","745025ffa2873f36f1fc3a165fb5cefa"],["/archives/2024/06/index.html","5a3712c3c4c4933abf425571c0d98b84"],["/archives/2024/07/index.html","a1ed014de3efb63a819717b244fea187"],["/archives/2024/08/index.html","fb6cebb7c24ad6769c6b81c900712c57"],["/archives/2024/index.html","dbd0253531b7d7e38a56fee0789d0988"],["/archives/2024/page/2/index.html","a0be82a1a858c6a36058b8d39b5eaac8"],["/archives/2024/page/3/index.html","ec9c9514938939d7b5d85725ace72ca4"],["/archives/2024/page/4/index.html","74b2d063e2a14e85f3a949bd5192a059"],["/archives/2024/page/5/index.html","659a024d14935002133fd07541bfb069"],["/archives/2024/page/6/index.html","2cd3031032907b6a8b5acebb2ef8a25c"],["/archives/2024/page/7/index.html","c8014fdab8cdf39cacafa9d06caedea8"],["/archives/2025/01/index.html","f03decb99fc3d112f46615530e95adeb"],["/archives/2025/01/page/2/index.html","ff71dda39121037ec35aab69c2e51a94"],["/archives/2025/index.html","85e0007017f038754cd8a5a4721fc900"],["/archives/2025/page/2/index.html","238cede54ad72d712bc2206089d135c0"],["/archives/index.html","d7482d619289f532f57111e18e2aa92f"],["/archives/page/10/index.html","1dd8fe3492e7b82d8fb22c3804f02d1f"],["/archives/page/2/index.html","675916b5481eceb5269666027fa096d1"],["/archives/page/3/index.html","fd2ff8202a499452b10c0f1fb3d100d1"],["/archives/page/4/index.html","2b548d8fef8fd0c4806a3bb12d383cd6"],["/archives/page/5/index.html","b9930f702e390b25805817c590422763"],["/archives/page/6/index.html","58fb303a29356c03e7962a57ad862e2b"],["/archives/page/7/index.html","3327a7246ec6d62eac14a89f7dc87de3"],["/archives/page/8/index.html","1533f7a2676c4cd966728d612027f7bc"],["/archives/page/9/index.html","0b174deb7b2b05d8ecd948cbd455a9ef"],["/categories/AI/index.html","1bffa963b637bf1045bb8444922ef19f"],["/categories/hexo/index.html","c703dcef79588dd5943d26d366861697"],["/categories/index.html","92bf4850f81966ddfd1719bcd2126f41"],["/categories/动漫推荐/index.html","419a58d620a7eb3d6f8f10d6df6ade12"],["/categories/每日一练/index.html","4c03af8ef21c07cced647dfa53bd07cc"],["/categories/每日一练/page/2/index.html","6ea649ddf3f0b5e64aede95a569f330a"],["/categories/知识/Typora/index.html","c0c70e5104d43afc3207b03b28d6a761"],["/categories/知识/index.html","db8e1a32a2814427dcdbe5fb8416dca0"],["/categories/网络文学/index.html","7dbdab1787d98b2fce18fed1d961911a"],["/categories/网络文学/page/2/index.html","1807b542eb4cc0d762b1a49e0d781880"],["/categories/网络文学/page/3/index.html","74e0a3669a3350f16d4913ff13168691"],["/categories/网络文学/page/4/index.html","dd0b771be3ae27cd90ae286d094b7cad"],["/categories/网络文学/page/5/index.html","72771fac00fd5896e80f395a01c42a7d"],["/categories/网络文学/page/6/index.html","967ce0f0bd2d099f12cb6a0a5666d736"],["/categories/购物/index.html","be0b2cbc8bb0372158028ae7c6c480f2"],["/categories/随笔/index.html","f84a0be72d5219d2e9d0cdf05667f4d7"],["/comments/index.html","b4c94bb236d29fecc80b5f1a54d5932d"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","f79a8bcc6ac87ba186617e7108c18006"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","3f575eb43f22a1e31f5cf97e79e5fb2f"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","86b2fb59a5ec80527d8773c490300410"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","feacb1209e5926f0de5b462a3efbefdd"],["/page/10/index.html","46853336deaf025bc4e202b007075de5"],["/page/2/index.html","847715eb362d1d4e09760842fb293968"],["/page/3/index.html","1beee63189f4c25bc7c5e8b0d03f1bc1"],["/page/4/index.html","6894507681e6b674d12dd1ad2d89c310"],["/page/5/index.html","f1def7c563e9276437ce0bd225bdd9af"],["/page/6/index.html","2afca74c3201b0aa2a631372d73900a3"],["/page/7/index.html","54d9831e7088d1b92cf4dcd9c93fc241"],["/page/8/index.html","9f4ac7929d9338292608c6f4e7ff65cb"],["/page/9/index.html","0c0ff0fb2c4c815639479a5d7f901480"],["/plan/index.html","7990fe3c5cee16d0db58486db32744b3"],["/posts/0.html","7f88c4cb16a8bf662cbadcf8203a9f9e"],["/posts/10a3.html","98396e542a76c0f041c634edfea5533c"],["/posts/16107.html","254b62da1c78d8615373370df60d3733"],["/posts/19dd.html","028cdb484c22973e77faa9bc0beb7eb6"],["/posts/20040.html","7cd56cf973d11a1f4ae3e21d6a4e23a3"],["/posts/203c.html","4dbfcadfc5e758604702cdb7bc156416"],["/posts/22034.html","1bd250e29f8e50d30d6fc87caff05861"],["/posts/22f1.html","4e6dc2b58515f0ee37ddd3e84ef14559"],["/posts/23777.html","cb39e5f00632cc90c662425c2110aa25"],["/posts/27400.html","c63491ba9486818a7fbb275780e4cbc3"],["/posts/28045.html","fad8c7b4b354d09ea49e2f07bc549bf2"],["/posts/29243.html","11a7289e7f6d3cae47f6ac0f5913adcd"],["/posts/29668.html","bfa6cb444c0de91445ceff526170b365"],["/posts/29695.html","afa4bb66a81267603fcd65fcc68a977b"],["/posts/2ff.html","11ca80eb620d3d57d1824dfac32d0ddb"],["/posts/3078.html","e9c8a5fa4a5c129e0f164b182038676a"],["/posts/33a9.html","a6b37d4e3af4de557d5b3e4a6060db59"],["/posts/3417.html","a50e44fbdbd28fcb414ef7bee01e3a10"],["/posts/3429.html","54b98fe2b91855477295ce0615b5b7e7"],["/posts/34434.html","2e41199a0e9deb6f33511e4f0059d6f1"],["/posts/3569.html","3a78faea1127cb6a531d3d3928b3293f"],["/posts/3ee4.html","21a7649778fedc778b18241490be80f8"],["/posts/40776.html","c969569e313769a0ea650a223485b63a"],["/posts/409d.html","6684a30e8de41bcf5576e70efa63c547"],["/posts/4134.html","d1d693c02df8f89c3e158518f3a81523"],["/posts/43378.html","092a5e2ab1e002ee06cdfba174f78b30"],["/posts/47e2.html","f29f3476b69337b08c7bba6b1f12da8c"],["/posts/49318.html","e507cda619a464f90254e6659871e84b"],["/posts/4ff3.html","0f50da299aeb8a91c63bbee84958e1a6"],["/posts/5068.html","144eb9961eca5300dae47cc049033f9e"],["/posts/51833.html","3cae587ab19874891cde35ed7ffa336e"],["/posts/53de.html","6d8a75a20d64a658d3d342b2aee16cfd"],["/posts/57116.html","6e2c769fab0869514fb3fc2c28ca3911"],["/posts/5be1.html","4732d52cd3ae061a7a94bff14b1c6c9b"],["/posts/5f25.html","627e014c681e149539207d98e6ff2d63"],["/posts/6044.html","72b66fdc7da77ab80f8d32a3af32f990"],["/posts/62819.html","7ed07b4e3c1caad3fa29dd48b0fe0831"],["/posts/6581.html","275411b0dc2049b1d2f02d94a966a3d1"],["/posts/6780.html","0eb1ed3f1cce3a4dd5bb950675875a55"],["/posts/67c.html","4c9f6fd1ad5bcf6ce263875cb5985a35"],["/posts/6b6e.html","5c1c31cff3e8023861d4dc18f51b746f"],["/posts/72ce.html","437cf8e7acd5d8f57784e706d2d16667"],["/posts/73a2.html","b33188a4b9f06b33f18a68c930ec0e95"],["/posts/73b7.html","f36ffc1b1779f3ae03ade73de16b957d"],["/posts/78e8.html","2f36b22990c37861e882a4cc086c33d4"],["/posts/7967.html","f7fd81eea531ce4835369c3246135d77"],["/posts/7a27.html","4a70c2bb64e70502d3b1121f1ce2c589"],["/posts/7a68.html","1f9ba2ff48382af34a2b3877ab80683d"],["/posts/7d63.html","27c341447d3534488ad30a56a4080350"],["/posts/7db9.html","6777ebb391b89b4e23eb950e3505a944"],["/posts/7eb7.html","29065633482d02d26a60bafe839eec51"],["/posts/7f36.html","3429298100e06f6aecda9e41e04e4556"],["/posts/8192.html","d95e1c0ee65fd41a624dcd978f4c2a5b"],["/posts/83fa.html","1a3da25d8157c947126451ba28d29691"],["/posts/8a76.html","136feac09dac19953c8c7a0b75d501ab"],["/posts/9102.html","e1905c2a26aee7e0de30947c75eacd7b"],["/posts/9241.html","31cf57ef503f49a537d583e585cc5b77"],["/posts/952f.html","fb30398263e6e2d362e88d1cc0f2ca20"],["/posts/97b2.html","b4eb152d4d86c0317393a80cbb77b76f"],["/posts/98f6.html","962bb4964b22892a547afe8dfe93d976"],["/posts/999a.html","863751ff3a70d69a9b8c2c9ba9b62a3a"],["/posts/99d3.html","25ed67281fe744197b56ed88c1b8b21a"],["/posts/9e51.html","86607d47b294b42a1605dbae0caa5f30"],["/posts/9eb9.html","f0b281038dfa21e52530ccd17ea8e87c"],["/posts/a2b3.html","670a680a8cbc5486bb5cf079a32e9e82"],["/posts/a6ba.html","9acb860a1f2d5e0e3f5a8d227394e8ed"],["/posts/ae47.html","f1d477dbadab1d09300778cdc45ebbd7"],["/posts/b179.html","b22dd4718f2b596f3b49200b0588cc8e"],["/posts/b60.html","e924e0ee0895752549956dd5cbd72d0e"],["/posts/b78a.html","ffba12fa060f89f0915270139a32f938"],["/posts/bbf7.html","967917c3acca70bb9b19865e03db821a"],["/posts/bfa4.html","a1e07b91522c819f6acb40d2bb0cad48"],["/posts/c8b9.html","8a3aadd3b177508195fa406c515cebb7"],["/posts/c9af.html","f53bfa85b14e25777e9b3b14f939518c"],["/posts/ccf6.html","0e7762177eb7928fdd84ef6fd17b901c"],["/posts/ce61.html","d4151bbd2a171dbb3b48bca094b5eb26"],["/posts/dad6.html","2f19e24b63f78e89892f5e0368078ac9"],["/posts/db65.html","9c205a4e7b1eae36026c5dd3530b9723"],["/posts/dc53.html","f0a8004c2c088fe9f7c4ce932c0a2445"],["/posts/e279.html","a65216776d613a1b5759d07626229176"],["/posts/e2b4.html","d8b8344290346b26167b24f624597aaa"],["/posts/e56d.html","d95953df5ab000018115f9f9be1ac613"],["/posts/e672.html","a753cbe1d8d13a92479b1fc2a22691a5"],["/posts/e6e.html","0b75b37e24d0f662c6b9b5e96e33e23d"],["/posts/e8d2.html","52b7ac45d0d98a3450f3def40fea1a2e"],["/posts/e9e4.html","b2c76eb85cfc9287b2307493c95bf94f"],["/posts/ee98.html","be0f89e66b32240fbdf0f9f70cf36224"],["/posts/eede.html","8324e00afae1b299628fb892271e95e0"],["/posts/f85.html","2395e2af3eb5ef245024802a358cfdd1"],["/posts/fdf4.html","863026e4d0f9e6287242fa793d155a3a"],["/search.xml","ad44640ee9b6e9cfcea13c82ca159fcd"],["/sw-register.js","a05e0c92e20a4e206a96f0888771413e"],["/tags/AI绘画/index.html","77f09d704e094a142d33e198f57140b0"],["/tags/AI软件/index.html","8eba638c1eeb2134dee586005b74d37a"],["/tags/OVERLORD/index.html","a17d7ab5a543444880a8092e9ac9621e"],["/tags/OVERLORD/page/2/index.html","831b23d3e06bdf64b232cde3b620484b"],["/tags/OVERLORD/page/3/index.html","e76ce2285e76e27bc52a4097db3cb61d"],["/tags/TYPE-MOON/index.html","433b1495f0ee5be25fc429ac32aed3b8"],["/tags/TYPE-MOON/page/2/index.html","7d612b27ef53696529c895428bcd8cc6"],["/tags/TYPE-MOON/page/3/index.html","c31eb505826aedd9136c71690cc8362c"],["/tags/Typora/index.html","4221e2d86d1ad3c89fd647347c93eb8b"],["/tags/hexo/index.html","15a827df29c3c84c04a5fb4d3e1b0bcb"],["/tags/index.html","c1641343c1d9c785b8220180e172053a"],["/tags/live2d/index.html","5a32168e33ac4edc90a687f5ac64d3c8"],["/tags/shell/index.html","c233b47e6587f07ce8218159cafce211"],["/tags/shell/page/2/index.html","7b32c6883e12f34da0614dd4c3202b8f"],["/tags/同人二创/index.html","8e7007d4811ef19b4b7ddfb37bce0974"],["/tags/小说/index.html","1df084f75c494c8706a8744952abc77e"],["/tags/扮演/index.html","7310d4755549b06d26a220d657cab01a"],["/tags/桌面运维/index.html","efdd04ccff5dd1430dfc7a701367c92a"],["/tags/知识/index.html","03ce3600bf61921e88eefe99f2895630"],["/tags/知识/page/2/index.html","1549ed8a3ded244ff746b121053d8b37"],["/tags/知识/page/3/index.html","8603f7382d494806ec93dfd25802593f"],["/tags/神秘学/index.html","66658aff2f8f1fc7fd38a12f7ca32bc9"],["/tags/老番/index.html","8b152e95a8fc1ea16ae134b4562c3020"],["/tags/购物/index.html","1b2b7f06c77a41bada908cdf307869c5"],["/tags/资料/index.html","d133991ee5f8f1507ad1e750d504123e"],["/tags/资源网站/index.html","8fbe71771ef5da10f7764f7be8e273f2"],["/tags/闲聊/index.html","5e9233d38cf684d0ebe3573df67ffb5a"],["/tags/音乐说明/index.html","fec18afc75d7548e97317bee83bb284a"],["/website/index.html","0a1bb9def2c69636dbb30cd9ddc2360f"]];
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
