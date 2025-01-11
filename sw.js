/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6fd2a76dbac51547f749b9440bddd9c1"],["/about/index.html","c065afbbc36825b06b3f4d39c886b5ed"],["/album/BH3.html","e58be837b3af16d9741c1e3fd818377d"],["/album/collegiate.html","c49b884665815c3d8447f5605cc4664f"],["/album/index.html","5712882745d0f18c554ed01b00751ad0"],["/archives/2023/12/index.html","fc2c4f60ce49920399d010f6fdec0d84"],["/archives/2023/index.html","ff68ac4a7ca78075ae76859cb649078a"],["/archives/2024/01/index.html","64bc7433f867657dc921e9f48b141783"],["/archives/2024/01/page/2/index.html","0212c2a24d2e6fd85d0336cb4395cef9"],["/archives/2024/01/page/3/index.html","1d55c650ae32f97444ef3cdc79449a25"],["/archives/2024/01/page/4/index.html","350dfbe8c77e889fde85b3bf622781f4"],["/archives/2024/01/page/5/index.html","0da878111a6bacb9086461a0884be7c1"],["/archives/2024/02/index.html","159ef10d7084d6f3fdc57acca19dd5ad"],["/archives/2024/03/index.html","d0edf2270395f549c2b58fbdd4cf7760"],["/archives/2024/05/index.html","cf4f8c43bd22abab4ad5ef94c7d34b88"],["/archives/2024/06/index.html","1b459c19f106e76edb496d43009d59ef"],["/archives/2024/07/index.html","1ae510e701ab24a844558cd7bb01a19f"],["/archives/2024/08/index.html","7fe7c2152c8c47321c642a3eaf2b0035"],["/archives/2024/index.html","3d6cd11df468d98447c6b48fe2223c52"],["/archives/2024/page/2/index.html","e598a31a5079d4b99f8c28dcb13fced4"],["/archives/2024/page/3/index.html","eef5d29c4a66af55910a6fe96ba25de2"],["/archives/2024/page/4/index.html","a5f837dab39f607071a48e05bec0bff2"],["/archives/2024/page/5/index.html","d25f3eac37a2a1221efcc4621c0b1d15"],["/archives/2024/page/6/index.html","80bd0c75da28d077e530b50825d77ebf"],["/archives/2024/page/7/index.html","80c9f959a1ef4119b0d2d7f07899e455"],["/archives/2025/01/index.html","ff124c3d78736b3b10668f31076c9c33"],["/archives/2025/index.html","9afaec9da0a798aaa33a532de1ef7334"],["/archives/index.html","409031d49118b622fea6c2a5693112df"],["/archives/page/2/index.html","09ff7e94ce3ba798b907c1e2ba542046"],["/archives/page/3/index.html","4000c32edb590324907bc5f2426a61ab"],["/archives/page/4/index.html","33ee30f5442c9e1466b38a21054762d9"],["/archives/page/5/index.html","f6f94ed2613d8899a2e94305f1e618e0"],["/archives/page/6/index.html","8e8d7bd251284a6e05e70c76e855355e"],["/archives/page/7/index.html","a07e3757b81cecfa9e14566d0d733a19"],["/archives/page/8/index.html","db8f651fce910a547bee0d8ad23df05f"],["/archives/page/9/index.html","8860f48fcbbabedaf8875ec07c001551"],["/categories/AI/index.html","e0c8078e28404d97c8bb1078a9280d01"],["/categories/hexo/index.html","8189c9fe7b89de7103e602b01bc30356"],["/categories/index.html","b1d1b4527e8d59f43c778ac632cb8a51"],["/categories/动漫推荐/index.html","bfb8ceaf5faa78e3e9c6dd93cc5fc162"],["/categories/每日一练/index.html","2928c0a6a5bb82af97a77491683bd9b0"],["/categories/每日一练/page/2/index.html","5d770a935379af68b73d6ad728227313"],["/categories/知识/Typora/index.html","be2f59ba051d7ad78551472536de2344"],["/categories/知识/index.html","7deb1bf9171a6fdcca4018276c3b041d"],["/categories/网络文学/index.html","dbe8167dce536ceac25a9e8a5c3f55b8"],["/categories/网络文学/page/2/index.html","52e5149ef98b56b21a97378f75ee89a6"],["/categories/网络文学/page/3/index.html","aaac0f65a4b0e284fc02fbf44271c0d4"],["/categories/网络文学/page/4/index.html","d0c386c3aa0b14989f569b5f0139dd7f"],["/categories/网络文学/page/5/index.html","4a80067affa0eebfb6882e9924a29829"],["/categories/购物/index.html","6546f55ba58ad4d2905b05dfb8606732"],["/categories/随笔/index.html","0fb6a5747357d770729d356e0b1e6adb"],["/comments/index.html","aff891e27f555c62ab3cbae3e418e3d5"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","7eb32b41627ae34b4ef4d0c50b0cff17"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","563bc32506cab6c7f97952d5ffe6df03"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d2f25785e37c9541c6d5a8d069326934"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","b0955ca629fba8d4559e0a27b5ebb6e1"],["/page/2/index.html","6f103a036de275d2db7a470a4a09e07f"],["/page/3/index.html","4ce6a271656cb92777495175efa1d226"],["/page/4/index.html","ca1d507219bd062f33c81c48b3880aed"],["/page/5/index.html","fbbeb1dd5718bb29bf51070777b00b38"],["/page/6/index.html","6033e8c7685e1e246677974d912bb310"],["/page/7/index.html","a286a9961b9107a1235f77b91ac9a93c"],["/page/8/index.html","bbe668883855313ac9d204254c3ac057"],["/page/9/index.html","829d3ca0efcc9330fd74f6d8cf6e9ab2"],["/plan/index.html","75d5021b50be49efa25eff7e36b6f052"],["/posts/0.html","28095a96b87bf6992df383907370b41c"],["/posts/10a3.html","33ef9ab5ce78dbd06b322abd38cedaa2"],["/posts/16107.html","8e518406bfb27a04f65b9c33566fe197"],["/posts/19dd.html","2f1d8f77a8c0dda2655833cd0913765e"],["/posts/20040.html","341c9cb0b27a6f14d1b93118b9a707d3"],["/posts/203c.html","49099c98ae75786b2b4f5ae56c3d0a9e"],["/posts/22034.html","c4bab1680c1967862fe55967ea7d4e96"],["/posts/22f1.html","e7f6ad2308a7a1dd606a8a866f305f59"],["/posts/23777.html","bd6097721727a67bc5ee306d47670242"],["/posts/27400.html","7d1db2ed337ea02b17ff7aee7ff24ade"],["/posts/28045.html","9231d03e317494a31eb927f2fb03cabb"],["/posts/29243.html","c868128fa39a2270361d63c2afd667e0"],["/posts/29668.html","4d58854846703f110fff6a03d13527c1"],["/posts/29695.html","6c84e12f6b08c12fd4edc458ffdb5600"],["/posts/2ff.html","3081a8f8d96cc1059bd6f59c8d0eb572"],["/posts/3078.html","440cabeb44709676ca6fb477cee03baf"],["/posts/33a9.html","f1076817d1733bb68057a5caab68709c"],["/posts/3417.html","7054e98ac432c4ff570ef4d55db03eca"],["/posts/3429.html","630efe620c4448e1a1f02d00158e13cc"],["/posts/34434.html","028bcc8cf8e6684d0a7a7a5c7cdd60aa"],["/posts/3569.html","7e71e0e4b9fc6e9f90200401dc354b40"],["/posts/3ee4.html","807b48cee54185995ad9849d6d0c820e"],["/posts/40776.html","67c42224ec66110877fbcd4e436d2084"],["/posts/409d.html","c8e5d800bda7b91d3759482e776a918c"],["/posts/4134.html","3c94602fdd394a0ebc4c9d78837d983d"],["/posts/43378.html","51dd9439500313156e958c0acad87391"],["/posts/47e2.html","bbf6fefebc536edfc21e9609952e7696"],["/posts/49318.html","b903c2f5a722098a95363961c8f1a1d3"],["/posts/4ff3.html","9ca11537b2e7abb8b3642470336b5020"],["/posts/5068.html","57852ee1e7151bf22932e2964f6130b1"],["/posts/51833.html","9da0ecad94fc906b068139521a0f7f99"],["/posts/53de.html","59003fb953844e3909cb26330e1c0a33"],["/posts/57116.html","8d3581bc773d3680105d58dc4f2a29a9"],["/posts/5be1.html","d8e71a9246a75c8e9756384c64b66583"],["/posts/5f25.html","8aa3bf87d247d49f68b207d8857b30d6"],["/posts/6044.html","527b57aefb0a968124327f1a3580616c"],["/posts/62819.html","31fa72a3cac0ac51c6555fb0eb26a7aa"],["/posts/6581.html","09d5d6b6b88ddeafb3030e0744049cf0"],["/posts/6780.html","3eddaf163597bde413f359adc9a287c9"],["/posts/6b6e.html","1781d8c3bddd9a30dd3d63389ae4d13e"],["/posts/73a2.html","f13408b3cdc2cc88c087fdc9c5057c61"],["/posts/73b7.html","93f5583574637442fcc4356c4d0cf570"],["/posts/78e8.html","b333afd12ce1515fe13b99715622be9d"],["/posts/7967.html","7d6272e15367685dc79cb8d123aa578c"],["/posts/7a27.html","99ff6464a1d54591615b0a991766268d"],["/posts/7a68.html","f16ca2d967bfb22904d94e6d11f85bee"],["/posts/7d63.html","9c1d69ecbf7e1a7cccb65d120a1ec677"],["/posts/7db9.html","026d5b90858c5f7c033274729f510043"],["/posts/7f36.html","8d50b7967ddc9a8043c4bffb20700991"],["/posts/8192.html","1d65858fda0c03bbaaf9548d0eea5e2e"],["/posts/83fa.html","3b8ab99cc61ee0e409bbe4cfd43d3993"],["/posts/9241.html","2d4bc1324fba76d9f027791d16333f7d"],["/posts/952f.html","dfab8e1465c6943f96dfa2ad4f17e5d2"],["/posts/97b2.html","d771d402bbc3af1d69cb42614c10a1c2"],["/posts/98f6.html","bf69c625ded9b223340f2a58455323ca"],["/posts/99d3.html","8d4e76088112832305114649722d17b9"],["/posts/9e51.html","ed47c4b01c41c28f1f4de2ab5be213f8"],["/posts/9eb9.html","6fd971f9038c88571856febfbec9f062"],["/posts/a2b3.html","5343810127a07f8a59c86663d3c25f7a"],["/posts/a6ba.html","4692fda8b23b4da31867c29b80e9728f"],["/posts/ae47.html","9854f1fff8f75bbaa05f1e313252b456"],["/posts/b179.html","89edbe6b00e40d2db60839b49baacdf3"],["/posts/b60.html","0939c59ac0dfb657f0fda37c06f2503b"],["/posts/b78a.html","d7602fee942ed950f3ba912ba99dbcfc"],["/posts/bbf7.html","8cd4f66237c06198cdd6026b5b19bcba"],["/posts/bfa4.html","4426a88d711738b056dc9f8b068a5813"],["/posts/c8b9.html","2044a2ce9f3d586c5398f604d40f886c"],["/posts/c9af.html","bba0bc82cd86e69178b50fd04b7d384a"],["/posts/ccf6.html","b8a389bc4b6e9e0d3a89999f67ce5efc"],["/posts/ce61.html","6d034a730904332121f893cd3d159a7b"],["/posts/dad6.html","b28b494ecd76d8a8026d75dc328230e7"],["/posts/db65.html","79b23c5b1dd38d7a65ccda16f0796bd1"],["/posts/dc53.html","7ba760ed57bf2f2a1315c5335c754731"],["/posts/e279.html","1e1255e2412f0214a8861970b12eb433"],["/posts/e56d.html","d80395829256eddb8a86639b6a1f7ef6"],["/posts/e672.html","7b6453fcf7f678e3e60959c589f7b936"],["/posts/e6e.html","0a9fee4ad69e25392908ca093dae7e58"],["/posts/e8d2.html","2222acad898e12aaba5389eca2c519c4"],["/posts/e9e4.html","cc2f50080300e1944970c6df5274bb8e"],["/posts/ee98.html","18c9e03ec6e9d090f322c52c6a587585"],["/posts/eede.html","d9a6dd4920b88277453bb0185d0d315f"],["/posts/f85.html","bb52fda065c23215b0a0174a97127841"],["/posts/fdf4.html","eb985d54b4096dd9028de746e24f626e"],["/search.xml","b2c44acbc34bd836f1b94c88b0cdd57b"],["/sw-register.js","3841f7c2e0dff76731a6209b2bbc01d6"],["/tags/AI绘画/index.html","fcec91f7aa1d05449f7650a3c37a9901"],["/tags/AI软件/index.html","8abe46ac64677f0dde45952756dcaf4b"],["/tags/OVERLORD/index.html","a1bbd4b1bbc2b62bfe77e29a0be76cdd"],["/tags/OVERLORD/page/2/index.html","112e53a9fcde62cebeb02d85a6c4eeb8"],["/tags/TYPE-MOON/index.html","89c6f795c792a50433ff7a9fabe056f6"],["/tags/TYPE-MOON/page/2/index.html","eec35ead20ce8518274ed14e33f4662b"],["/tags/Typora/index.html","c04736e6c1ba7e2351742742de61b942"],["/tags/hexo/index.html","367cf2ebfae684aa27b67cae48ca65d6"],["/tags/index.html","2fa0128dacef94efe2ec5c9432b2b6e5"],["/tags/live2d/index.html","227f019528cdc4fab695bdefa64c6a35"],["/tags/shell/index.html","1d5e60113600952ea668bcff3ec39905"],["/tags/shell/page/2/index.html","834bb3ce945abd6c6f5defd573680d74"],["/tags/同人二创/index.html","5c770cc395468a27d941c0d32e775ea9"],["/tags/小说/index.html","9f6157f2efc1130d9147fd9d935f15b0"],["/tags/扮演/index.html","688fcc5c46971272f5d16107630146cd"],["/tags/桌面运维/index.html","f898f67fd606bb440c6a9fd058c082f5"],["/tags/知识/index.html","6648844c34ab4e049b897038accd5110"],["/tags/知识/page/2/index.html","7bc08c7e9d969c5c2392c20853a71b51"],["/tags/神秘学/index.html","8b0aa10f73b0394879a6be349e4a0a8f"],["/tags/老番/index.html","39580f7387bfbe645c09b2fe8599c115"],["/tags/购物/index.html","20184fa6eb507fa788c3c0d45d3c8078"],["/tags/资料/index.html","2c8b162e88475eeb9903df0f1709df05"],["/tags/资源网站/index.html","f54a36fe776486e7112075d58ef86c45"],["/tags/闲聊/index.html","bc3f0d36341989dbc5cd6641e03e98c8"],["/tags/音乐说明/index.html","c1644454c47a85126a592890997df0b9"],["/website/index.html","bb4d0b0ef7cd192f4b74b82c220f045b"]];
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
