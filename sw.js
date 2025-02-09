/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","232f49018b808fcc4ff9dafc0f376c8b"],["/about/index.html","f9fab5b4c98f415dcea63cdb7599d5eb"],["/album/BH3.html","7457b44d986aac36b21291fb2f2885b7"],["/album/collegiate.html","8e7f2fd0c8704a065a45c35513cdc3d8"],["/album/index.html","e81d4665eef8c730572f90a738279b64"],["/archives/2023/12/index.html","c240447b5a1d4d46b21addf8998116e0"],["/archives/2023/index.html","223c3437ce742057c65fbc7df91ecfbc"],["/archives/2024/01/index.html","a835e40c259877390e143c5980c236a3"],["/archives/2024/01/page/2/index.html","906a59fdab548c2108cc58d9334b98c9"],["/archives/2024/01/page/3/index.html","974877b2e232968f876225ec61182343"],["/archives/2024/01/page/4/index.html","d0c538ff8b1357b1820b8bca750dd62a"],["/archives/2024/01/page/5/index.html","f8ebe0d89d38296289408f533a9e5793"],["/archives/2024/02/index.html","958350763c80ebd5ddc134cf078c31ec"],["/archives/2024/03/index.html","7ea703291ab7be115958a9c589c8261b"],["/archives/2024/05/index.html","54c11d2311f57074c4b4a84ad80dcad7"],["/archives/2024/06/index.html","a319211904ff0c5a87de0bc9802988fc"],["/archives/2024/07/index.html","5cb180cfce5eb5ba0a2a91ff1f22a9e8"],["/archives/2024/08/index.html","7c7bd27ca2d6feec0e3ff5e6344f7306"],["/archives/2024/index.html","b87e73e563c525bcb68372821648865c"],["/archives/2024/page/2/index.html","85533135bd404f4654a93a14d3010d2a"],["/archives/2024/page/3/index.html","34a2c321f6aecb848ceb828ec458ee57"],["/archives/2024/page/4/index.html","33e61caa169146f8d5c0bb9f041bbbbd"],["/archives/2024/page/5/index.html","f345ee86c6c55f450a2862f8afce81af"],["/archives/2024/page/6/index.html","97422f846dc67f851547ae3e7357bbf7"],["/archives/2024/page/7/index.html","327fc4ce4fdbda1b8453d87f9659c081"],["/archives/2025/01/index.html","672f1016fde75cb2f2843a4d93fa32ba"],["/archives/2025/01/page/2/index.html","9adc83e1cb24b09cc2d2a2385326edba"],["/archives/2025/02/index.html","1bcf610ddb99a78baba5bbab60822a90"],["/archives/2025/index.html","6746734e8ed3e5e7df24e4cb200eeff7"],["/archives/2025/page/2/index.html","1db6e59efa6c4f7bf3a96c7f89e2c06a"],["/archives/2025/page/3/index.html","a9e5632da22bed754dee6b20e4ae7e13"],["/archives/index.html","9c361c2f766dc1845752f3620555ddf9"],["/archives/page/10/index.html","d25f3aaa1b23dce1e439268c8b050c6a"],["/archives/page/2/index.html","589b9831d489f5a35a4ab036d007eac1"],["/archives/page/3/index.html","0c69ab8901d795ad382c42947b562df4"],["/archives/page/4/index.html","30e14f1339877b25ef51a7e609d4e1cb"],["/archives/page/5/index.html","6bbc23ad2dd51864c98cac94ca1bfeb0"],["/archives/page/6/index.html","eb585f8f6d15fe841a14af4407b06512"],["/archives/page/7/index.html","0e1a42afea9bc0e5506ab4cab16f3cf4"],["/archives/page/8/index.html","c57310ffc13a25675be9c7c8c20d1719"],["/archives/page/9/index.html","71debe406231c281f98cd6153c11137c"],["/categories/AI/index.html","dfbaeb3fd3f6717408eef51b76ecbe3c"],["/categories/hexo/index.html","96c6703893f5daccac4734266b01eab4"],["/categories/index.html","cd0715e493c40b5d22b181c122247bc6"],["/categories/动漫推荐/index.html","6ede60c0258a06f9dd4c4efcbac4fa76"],["/categories/每日一练/index.html","4ec921a84f7864d2b964d0b1c33c3f83"],["/categories/每日一练/page/2/index.html","b350ba2feb33da3afc476e455b1cb1c2"],["/categories/知识/Typora/index.html","94e9056941c2b87fc6c88ca4ed850ba6"],["/categories/知识/index.html","3526d4df5d29c9ad51f2efae487cbb04"],["/categories/网络文学/index.html","7906b1d7b7a98d0c2fc8d55f2b51d8f0"],["/categories/网络文学/page/2/index.html","7200a7fd87bfc70f4f80310645d4aaba"],["/categories/网络文学/page/3/index.html","07e1de250a7376710532ad6771a4a10a"],["/categories/网络文学/page/4/index.html","b0e102ea5dbd0013aad7a0b274a5cbf1"],["/categories/网络文学/page/5/index.html","3679a5cde5a1e0b34273b806a7d9fb0d"],["/categories/网络文学/page/6/index.html","e2e1ba38a147f008b8a73bf7e245d99f"],["/categories/购物/index.html","fd060b3b55d7baff202362f6d73056b3"],["/categories/随笔/index.html","7aeb075fafa1eb9ab275c7227033dc86"],["/comments/index.html","c21d5ebe9c1fa5b5d5a7dcfb3b3efb4f"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","097e92e788d808dfafc51d0789a30c0a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","62123793f9e2b9200d8e10ff734084a1"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7ad4ef5bfbe993d40b7cd78ab047cfd2"],["/music/index.html","faea6ab92998c68609edc041b2f678e7"],["/page/10/index.html","08f0163c84bd7c00a53eecabfbbbcfc2"],["/page/2/index.html","cee591ab729e928b88ce0022afa40000"],["/page/3/index.html","25f3b46d68a7aadc0c35948f2cd1521f"],["/page/4/index.html","e3703d351991d5e1fe5fd791e84aff09"],["/page/5/index.html","c5f808a8fd3ad1f794374d6dd011e2d0"],["/page/6/index.html","847b6e9c88ac615526b345cf81b258b1"],["/page/7/index.html","4cb7201e9a02d93d032b5e44199a022b"],["/page/8/index.html","d07d865e49a1912432ba47e4573ad4b6"],["/page/9/index.html","548a81ee5ada65b0b451942170c67ac9"],["/plan/index.html","f4a03a1c0ae02d93946500694519d698"],["/posts/0.html","76bdfc3ea80b1a3c509dd2e1391d6a0d"],["/posts/10a3.html","f4122e3dd242ba5eab080eb41ded978b"],["/posts/16107.html","a1b71298bbd96584d1852e09cb1415c2"],["/posts/19dd.html","1fe7a4edb0fbf3216e02f37b12431122"],["/posts/20040.html","def7766f27e72c1a54d46faada90faf3"],["/posts/203c.html","13a3fc5ed7027cbf13fb9fadd621a278"],["/posts/22034.html","a62bc841d7692cf5a8726ea4b097eecb"],["/posts/22f1.html","f5a81fc49cc31896ba67f7c41a292b7e"],["/posts/23777.html","cbdad5c31176d1f223655f16be185826"],["/posts/27400.html","d4e60033d4be021a2701e8aa0567dc85"],["/posts/28045.html","63904172e5b51d20ac46a08dc4f36ed8"],["/posts/29243.html","6b6f378134e062d8fdec482ed66c455c"],["/posts/29668.html","71d00886e660376c938da6ace82d0f19"],["/posts/29695.html","7179895a20be6b94d9e964b30049342b"],["/posts/2ff.html","1e5f89be7f86654fed737afb8891a818"],["/posts/3078.html","ef5786b6ba6f1322ae315c690d132218"],["/posts/33a9.html","480e23a888bb8a2b997a13c446a0dad8"],["/posts/3417.html","b9758d3de94b53a3e74936496906cacb"],["/posts/3429.html","50112430b7b23705e4031fa0d4eabaed"],["/posts/34434.html","ce7a5834ecd429b8a73e9a10ea9ca544"],["/posts/3569.html","10245f19ee42469ab549f1a49c8bb962"],["/posts/3ee4.html","f5def45f7dcaa1865715d2415ce88aff"],["/posts/40776.html","74404406c27deb33e14b76cd56014712"],["/posts/409d.html","5c5da7a99a085d562f86ca90bd71e507"],["/posts/4134.html","21c20892c8310d0e926786c764101154"],["/posts/43378.html","0d42715217dfb70802a0e23fff744ab9"],["/posts/47e2.html","ca50dbf070b43f4c8554f655b8996f67"],["/posts/49318.html","45ec119edf5acb7a7af05554f0ce2f29"],["/posts/4ff3.html","2090b03e18ef98fa02d5af181a49cb61"],["/posts/5068.html","a2a04251f82b0b4dfb815cd0a257938d"],["/posts/51833.html","f2e95b6645225999a677d85691c0877b"],["/posts/53de.html","b0e2e3dbcd6e6d5d930c21df8dc3cf37"],["/posts/57116.html","fb0cfd745d5935a7048e5f33e4e89de8"],["/posts/5be1.html","3e93f56f767bf93d36400a37097e4388"],["/posts/5f25.html","0e9499832bf6c360b34dff33ab70655c"],["/posts/6044.html","970ece06cb6fc1e92f0b91d99ccc2bd9"],["/posts/62819.html","acd3a2987bc493fc206b4b00c60710bd"],["/posts/6581.html","197227b0d5fbf46c33b6893d2959ae6b"],["/posts/6780.html","6da62afb9bf13ecdcbc43efb7abb3041"],["/posts/67c.html","0622be68aa0c7730230e67b0f8b05dde"],["/posts/6b6e.html","a066c7e88351edceb8ebb2c7f1049913"],["/posts/72ce.html","4748a59ab4c2c8200a9f43e579dde743"],["/posts/73a2.html","50a2c8d291fd5227102c3d30c3371e0d"],["/posts/73b7.html","2eef63449beecdfaa1e95ca2b17347ca"],["/posts/78e8.html","bcf90d76099447aed6a06ed2ba1ff522"],["/posts/7967.html","9b57d6395e61fba846649ca393b00b44"],["/posts/7a27.html","ed2bae4c7682f0f1748b7fa2da62d391"],["/posts/7a68.html","588de403eafe97ce860fdd0ac5a9f11e"],["/posts/7d63.html","17c52c54437c71640113affcf949c9f3"],["/posts/7db9.html","d5aaade6eab06d7facf3b58ea6a2de8f"],["/posts/7eb7.html","c03dc27764ba9baa0f85d7d24ea9e975"],["/posts/7f36.html","8b8676c8ae2bb4220731fd38c473dcc0"],["/posts/8192.html","3e678c69e33097e4f42a28a2e1caded1"],["/posts/83fa.html","d23d6733044dee9f0dc956c524918019"],["/posts/8a76.html","26a6658285fe400435aec6df50078d95"],["/posts/9102.html","b84c2080ccb977414477268433f9d956"],["/posts/9241.html","518d9644fb512763dc8d9da83cef88ce"],["/posts/952f.html","e3ad4d92801d40b741290c16f97acb42"],["/posts/969a.html","c01d3db22a075f0b456942a72f954e6c"],["/posts/97b2.html","407118fd3ac063fd125ce7bf6b63c037"],["/posts/98f6.html","4029747d48471fb880718ab50268fe0d"],["/posts/999a.html","6f003b26ff9e4c0927e785dcadbcb7b2"],["/posts/99d3.html","590ddf4592d88634e20104a90bd9565b"],["/posts/9e51.html","d24c5ed0cc81d3bf3534a438d0f3afa8"],["/posts/9eb9.html","af6939b6de16621771c44896f3db7263"],["/posts/a2b3.html","5cb14a53c28455c3b1d1de0a4f31013b"],["/posts/a6ba.html","723bb8592a72898d4efbd25c0f8f2035"],["/posts/ae47.html","166a137790e69245bb14609943ab8ac3"],["/posts/b179.html","42cb06d69fc8080dc82c7a69520cff51"],["/posts/b1ea.html","ef4790c63f1da2e812b96156eafafad1"],["/posts/b60.html","fee7921617502ffcb2dda338340e2663"],["/posts/b78a.html","b70adf9c2a40709ba8657e8ef1a347a8"],["/posts/bbf7.html","7a4238d4f3dc923ab544212ab70ee01a"],["/posts/bfa4.html","83283da8935595097ed88f53117edea7"],["/posts/c8b9.html","d5063a57ce7376869d9eb514269ab701"],["/posts/c9af.html","95a4fb89c683aa99ea318bc9dc397369"],["/posts/ccf6.html","b8611bef854512b019268e2dd801cfa6"],["/posts/ce61.html","015b4e5915724022d6d51fef177bf381"],["/posts/daad.html","dea3dbe0ee8ae1db1ab7ef39dd419646"],["/posts/dad6.html","90a9999fb53b02fd11cbf3123ca039d2"],["/posts/db65.html","4f22e4ee3638708874fa09a9df705426"],["/posts/dc53.html","2a65c5d814ee7b546a90a5577ad3e5d7"],["/posts/dd5a.html","d2cadd30e0888d02c828d8660c12e798"],["/posts/e279.html","78715372855b9b70086168385629d5cf"],["/posts/e2b4.html","b3dd6f9f8b33c0e012f05c94498eeb22"],["/posts/e56d.html","ae644908a580271f88d7d47eb9798560"],["/posts/e672.html","56512ede49a6ee3d608f1203143540bc"],["/posts/e6e.html","dd53d87e8886dda4842d67d880763288"],["/posts/e8d2.html","da8a61a1288c727dd5a57131441ad04d"],["/posts/e9e4.html","e6132c08d34fa7ecb2c587fb96d4fca9"],["/posts/ee98.html","94a20d1076a557061595df02916c07f3"],["/posts/eede.html","fc13df7f7fb75582a838aa9dd7bb6840"],["/posts/f85.html","00dc30a2d06c3422da312a6c545f5c90"],["/posts/fd8c.html","68c6775452207ff0c6070d59baaaa3ef"],["/posts/fdf4.html","7cd317136d949198a5301809aaa5c053"],["/search.xml","b7b57205c2c0c9320a81c6d6e6a61193"],["/sw-register.js","214ae3d66d9c77a4700bd39dacbdf22f"],["/tags/AI绘画/index.html","01bc8053bdef940eeda5ad6844a92ff1"],["/tags/AI软件/index.html","ff8cc8cb91e8afd124a40fb15237c581"],["/tags/OVERLORD/index.html","7aba78009206913760b41834a29ac697"],["/tags/OVERLORD/page/2/index.html","86abcca16ffdc85d3b13b0771f5217b6"],["/tags/OVERLORD/page/3/index.html","971e56490e0fbf0e4d16e925393a7181"],["/tags/TYPE-MOON/index.html","b359dcedb89bc119b458ee9898761bbf"],["/tags/TYPE-MOON/page/2/index.html","18c5f80a32a8d6614e631adf99e122fc"],["/tags/TYPE-MOON/page/3/index.html","44c9122f24811c7eabdfaae8f68b4500"],["/tags/Typora/index.html","e30f0af4fece65e5c44eb5660f337661"],["/tags/hexo/index.html","0f9c84a03434488f6d64169f2b6d1160"],["/tags/index.html","ccbfd8f489040769f653371ac39fe917"],["/tags/live2d/index.html","575f08507cc7a4d74bda6f1887bc739d"],["/tags/shell/index.html","e194cfbb0e374a80a2657f70474c5ff8"],["/tags/shell/page/2/index.html","4569b252d364d0bebf81303ecfa8cc3e"],["/tags/同人二创/index.html","90f062273fc62987c5e575bb2784710e"],["/tags/小说/index.html","f810200cbb848baca2e8bffc7f0e3987"],["/tags/扮演/index.html","407bf94abe2ce1cb3e70b1a6e158ae23"],["/tags/桌面运维/index.html","30ed63ce0035d5da6e614d83a03222fc"],["/tags/知识/index.html","322bf99e99a33056c345451bd271c78b"],["/tags/知识/page/2/index.html","6fc364f794b5a1787519163bfce270dd"],["/tags/知识/page/3/index.html","71af87c4a7115cfcd034dcf6aedeea79"],["/tags/神秘学/index.html","0a1fd64fd174c43873038ebab4ed718a"],["/tags/老番/index.html","e5d47f48171780e520b898b768ba065b"],["/tags/购物/index.html","f590f9d375f486a7d55861bfcfda9644"],["/tags/资料/index.html","b06a57b953ca636a3c08efb434bc14a0"],["/tags/资源网站/index.html","b1fa88e9b33b41f064702531a3243f67"],["/tags/闲聊/index.html","eef43a4913f032d0b80abead8c3dacaf"],["/tags/音乐说明/index.html","aa3b3948bf1684e3c2af5f64fa3f0b7d"],["/website/index.html","fdc99e3cb60960916cd464d29cf4d549"]];
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
