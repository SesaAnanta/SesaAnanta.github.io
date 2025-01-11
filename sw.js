/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","19d6ac41b7662dedfb6980e304007f44"],["/about/index.html","0b27a1a43fda34fbad2c889c357d670e"],["/album/BH3.html","6a278049569166e01e6ec821df784aed"],["/album/collegiate.html","369b6fcc204fce7ba7a0cb20ad2be26a"],["/album/index.html","15b373b171bdc9c90463698bbee5191e"],["/archives/2023/12/index.html","e980495c10ecd5ca01a3e81e3a184f63"],["/archives/2023/index.html","16bd1f888982e548e92913b9281ee6af"],["/archives/2024/01/index.html","b07ec145cd478071241807d29244407e"],["/archives/2024/01/page/2/index.html","0f906545aa0f4856e83920601ff07c3c"],["/archives/2024/01/page/3/index.html","58e5f0f2bfee0bbbbe9ca7187297a8fe"],["/archives/2024/01/page/4/index.html","a098345982a8e89a3b7b7aede227cc04"],["/archives/2024/01/page/5/index.html","398d01a71fced3606f1c9b8c0483c09c"],["/archives/2024/02/index.html","d06919d434f4ba959a17f6e8a53ef0f3"],["/archives/2024/03/index.html","83551b740200ed56ea3189fa93871143"],["/archives/2024/05/index.html","d1559b29506af5c871fbf5816a4b7c95"],["/archives/2024/06/index.html","55bd970e16feac5b0d52523ebcf75f85"],["/archives/2024/07/index.html","152d6fb9badd4d455b77cb376133bef0"],["/archives/2024/08/index.html","b14537143b8c07123f48713608b02a28"],["/archives/2024/index.html","0217f9232cb62b0c51b8e3356b9e4f59"],["/archives/2024/page/2/index.html","01d55faf5b764960edf2eafc6ea081b5"],["/archives/2024/page/3/index.html","c75ceba66a9a037a7c0a45152b50eaed"],["/archives/2024/page/4/index.html","8adb10cf456c84fef7d1d398a5fdd04a"],["/archives/2024/page/5/index.html","8f9179e38fc9ff50ebf15e7e8061f407"],["/archives/2024/page/6/index.html","de0f40ea946571a3bf638082a02e3b99"],["/archives/2024/page/7/index.html","00ad616be57a4f2fdec0b7ac281ee558"],["/archives/2025/01/index.html","781355f404701d51ecf6aa928cc21530"],["/archives/2025/01/page/2/index.html","860fe57787e8bbb1ca1b644573c61480"],["/archives/2025/index.html","5fd1388b093db9bb688d24585be9a580"],["/archives/2025/page/2/index.html","9135075db9a75f54ccf11ed4b534b3fe"],["/archives/index.html","f526e9f097fecd077df7f20caaf6a452"],["/archives/page/2/index.html","f4057d0b4d814351a779a785f009db0d"],["/archives/page/3/index.html","e12a11aa7f1170cefd6e9520a2cb02bd"],["/archives/page/4/index.html","5254d4cd3209bfc54c6c17f02b7442c0"],["/archives/page/5/index.html","d47ed294965b0b2dbb65fece95c57482"],["/archives/page/6/index.html","ecff510c8a59ab0abcaf4f958132ceb3"],["/archives/page/7/index.html","49ef74c0c90ab793f6a0f0fefa9eb648"],["/archives/page/8/index.html","2054568e79ab7cba4103ce0da151e952"],["/archives/page/9/index.html","b9a71e6372c48cab42fcb88adfbb4e13"],["/categories/AI/index.html","ed6f2e577124509c1ef3c70720632170"],["/categories/hexo/index.html","3853e7e87171e260ed9e84a6087190af"],["/categories/index.html","1b2449ed806b323c5f7404c53023a520"],["/categories/动漫推荐/index.html","3cfb9b55156826e13823de399fc2c63c"],["/categories/每日一练/index.html","7b09b6aaa32de266c599e05fb9ac3e2e"],["/categories/每日一练/page/2/index.html","989e8355d26f5a832cdf49c3439f1c33"],["/categories/知识/Typora/index.html","b21cbf7a110bdd6a2fa81cbf7491e06a"],["/categories/知识/index.html","89b2e6752101be865b038306b67075ef"],["/categories/网络文学/index.html","a1bc87d6a9fe0755e984e74afd43e1ee"],["/categories/网络文学/page/2/index.html","bd64d87c503b1ede0f385056587c346e"],["/categories/网络文学/page/3/index.html","fc0d14f5deae312d4cce360175600ff8"],["/categories/网络文学/page/4/index.html","b3bcca843625b3d7e31019bffa0bacab"],["/categories/网络文学/page/5/index.html","186ee270bc0d83b35d925a2797ebb4e8"],["/categories/网络文学/page/6/index.html","9018442c7d26b0da99d5c2222d1fc3c6"],["/categories/购物/index.html","3af827bbd8901940bf27071302fbb9c6"],["/categories/随笔/index.html","16beb31ab583a33452b360ab66dd1f02"],["/comments/index.html","7ec00938df7dbb726c636695cd40f426"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","d4d0a620b44c43be97c57621c2f88043"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","5101bb6c28f0a1fedf62b666c6047c25"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","e82cf1bd7c6c085a13e30fa05247a963"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","3c0c52be5961a18b047a6ed22c02a680"],["/page/2/index.html","226626fa28e8a31ad555859c23fd1136"],["/page/3/index.html","fc01cf4f3d897a11231c5291ccbc5466"],["/page/4/index.html","51abb3c66b4f3b7a36bb5f9b5fd4d25d"],["/page/5/index.html","d7252c9127171ee42959ed85c6358289"],["/page/6/index.html","b8b98f62f09e5c7f73a08600e27e159b"],["/page/7/index.html","76b9c49b7ea1b198d3f800003fd6ba95"],["/page/8/index.html","818f9f9d8438c3441cabf08218b42d71"],["/page/9/index.html","b2cd97131d23da99d4e82452f80edce9"],["/plan/index.html","6a59cff638cb26daa98fb58c054cd117"],["/posts/0.html","6f9377bdda93c0c8c0efa08a4fbe2d92"],["/posts/10a3.html","d2cee6cbc90269a5854a333155b3d529"],["/posts/16107.html","635d3ab10218064b4f6cba59b8f4811f"],["/posts/19dd.html","bd89a50cc4a727eec80533aed849bf52"],["/posts/20040.html","3456140b90bf81a850df344d55f01580"],["/posts/203c.html","d36dc4b2f5742f6ecc9c20b4cee27448"],["/posts/22034.html","90aec16ab2b55aa9039ba25c8d7449e6"],["/posts/22f1.html","58e4f68db2bcff928f25e54d575db107"],["/posts/23777.html","4d14a2eeb99b96f50bfaf5a878b3bb85"],["/posts/27400.html","f4b7de59cd55bf7ab0e9966feaf4ab9f"],["/posts/28045.html","d743f5fbdd231f4b93dfba98410afb0e"],["/posts/29243.html","a86f97c1ae840fd08053b2d3d1b5ffab"],["/posts/29668.html","1abd89857141ec81835aa05261726253"],["/posts/29695.html","6ba30e118d1976851e66c21121f585ca"],["/posts/2ff.html","859223386030164dd67a9ce62a52fda8"],["/posts/3078.html","dec22c2657b44cbd25c5dad0bcabdae6"],["/posts/33a9.html","33f7f3084392ac5db952c1b396ce1261"],["/posts/3417.html","cbceaba5dd4b692ba1c21752270f9902"],["/posts/3429.html","bb5aaaeb34e17e747b404d69dc65eef1"],["/posts/34434.html","46190f6c9983fb6fb1264b3f8c5af9e0"],["/posts/3569.html","635eb24db7d2cfb3061640f2a87957ee"],["/posts/3ee4.html","0eb1c13607bfac21ac3dad2434961c1b"],["/posts/40776.html","192696aa56da68f048e9163f936ccd91"],["/posts/409d.html","06f3148a527f595b9a740de4620f4ac4"],["/posts/4134.html","fb341edbee309e5ec3030e1e4416d29f"],["/posts/43378.html","9a5304e0370e4a521cc8dccdd056d5c8"],["/posts/47e2.html","4948ca027c8c03a2a4a0430c64c38891"],["/posts/49318.html","03478f262b394970f3ac36b8ea587227"],["/posts/4ff3.html","bdcd618e5ca48951c8aa34f217d9e232"],["/posts/5068.html","839cb13c1c1957cdb941026a5cd63ed4"],["/posts/51833.html","16f9eec5e3df5e74377240d807ff64cd"],["/posts/53de.html","0034b1cb6fce63110c2c315a1a330f83"],["/posts/57116.html","406fd49a734304fa08fb170ca4a89ada"],["/posts/5be1.html","b70e1204b39fa4347c598ef3b9a43e60"],["/posts/5f25.html","ac76dd877678be4861f7888640486fa9"],["/posts/6044.html","ef63d23d34acbfc00f4ac011df0e2ef6"],["/posts/62819.html","5976ee45b7896f51cf72ea01bb0f998f"],["/posts/6581.html","ea0ce38bfce0a0974452385d0e8e70fd"],["/posts/6780.html","1bf75785b84676f01c5902bdb53e5895"],["/posts/67c.html","9a556685a2486b0425280c00e7859e19"],["/posts/6b6e.html","8a09745e9abd09ae63b1ec61f7dba262"],["/posts/72ce.html","c43593ecd8115944a8deab5fa643b846"],["/posts/73a2.html","4f14dfd06651ce9d10998f3a13a1a268"],["/posts/73b7.html","3cf818b8ead22639a94e2f3ff747f5aa"],["/posts/78e8.html","cc94587b2e082571a2c22091f8a243fe"],["/posts/7967.html","502d08dbb8510ad92a5c860fde99e751"],["/posts/7a27.html","ac279e2445038211cc99aa16e00c11b8"],["/posts/7a68.html","158fa7fcd4eb8607ccda3a3ed3711c99"],["/posts/7d63.html","be598ff314615595cdea57f6953d3072"],["/posts/7db9.html","6a6fda3d5be97cf0bd4e95ab726e391d"],["/posts/7eb7.html","02f9a2dff74fcd3f4a449828909ce826"],["/posts/7f36.html","30ce354ba96f61e497468ca29cf7ff85"],["/posts/8192.html","eac91a445b030f7d2f8565a528d98fce"],["/posts/83fa.html","976d0ce0985ad62dadcf1acc1194f952"],["/posts/8a76.html","814eff58cf1f6b01c3f122402655ecd4"],["/posts/9241.html","b916db2f82402d5d26ac0014c7bf27d4"],["/posts/952f.html","55952e6f82faada51f333d48201b6d21"],["/posts/97b2.html","c66371d2c09eb621899ab94986881c9a"],["/posts/98f6.html","8896218b236430fa59fcb9ace541633e"],["/posts/999a.html","c0827773b7584a67680b9ad1ad3ac634"],["/posts/99d3.html","c15620f6b30d8b7335094c311ae4c892"],["/posts/9e51.html","570fe605457f1aeb6ff48846ed00680a"],["/posts/9eb9.html","f6cffd3b33f897391232ed4d91db744b"],["/posts/a2b3.html","d8bd7adf3eda47c9a6029de021ead850"],["/posts/a6ba.html","b2ebc305c49578c108968951de4f9889"],["/posts/ae47.html","700cbd1b9b312c97e5635e87ed4db70f"],["/posts/b179.html","4e89272c33ba3161d0e6076d6e607455"],["/posts/b60.html","73fe0f0d68ba914668e253b4cad501e8"],["/posts/b78a.html","c14ec488322a80a6c6626e43ac10e6a3"],["/posts/bbf7.html","f8058b79515c5aee0a90ba4825f59ec4"],["/posts/bfa4.html","8c499b4924d510faffef810adea418c4"],["/posts/c8b9.html","7219d2abd1a4ce8e1a9dd35cad1a06c1"],["/posts/c9af.html","d7ab23610c36950eda6629bdcf0fe494"],["/posts/ccf6.html","abcc429af515b72cc6983c53bef0dc70"],["/posts/ce61.html","10b14dab5e800019857d396ac61ad378"],["/posts/dad6.html","07f51ec872850f16a6c6d27916de551e"],["/posts/db65.html","6b51922ec6cb98d00bd842a4c89413a9"],["/posts/dc53.html","3d26de9833a8f3d2c5a416b4c0649d32"],["/posts/e279.html","434d8de5b66223014805b16bdec4fc29"],["/posts/e2b4.html","b226138b46f682e9bdecba2f45734a51"],["/posts/e56d.html","5e8894206b6dae027242f42a10098ee2"],["/posts/e672.html","7c21be1cb195ead96b6c13e8ea10d29c"],["/posts/e6e.html","4ad2de40285badb9424da92ed2db0331"],["/posts/e8d2.html","e68fe094433b9b96e764f0bccfafe9fe"],["/posts/e9e4.html","81becfbbea92c436d9bf67bd07c4f94a"],["/posts/ee98.html","2b6512584ae578bdce5f4614999843e1"],["/posts/eede.html","91ee65b56b75f7afda4720d6392bddfb"],["/posts/f85.html","99e4def57ff63d9cbccda81edc7c970b"],["/posts/fdf4.html","e96bdfa088aed4b3f6ca79a0816fd25a"],["/search.xml","8327b57b173829305184c31c51e1a0b7"],["/sw-register.js","eb497eecbfa271299a1f9fed1d81c2bd"],["/tags/AI绘画/index.html","d729fab85d6781c5bf24f7f9348afcaf"],["/tags/AI软件/index.html","e87bd65d0de4c22b131ad5b0fcbcfc9b"],["/tags/OVERLORD/index.html","1995b051775c27744e6f594324f1e93f"],["/tags/OVERLORD/page/2/index.html","2795d25ba6ec7ed8cff05ade221cab1b"],["/tags/TYPE-MOON/index.html","787f52f3fe172c4e79435eb44591afb5"],["/tags/TYPE-MOON/page/2/index.html","1d095fa28c1275b204028539a9c6cd4c"],["/tags/TYPE-MOON/page/3/index.html","a1d2fbbec3cf5a42a050a9497e2d31a2"],["/tags/Typora/index.html","d19416513b988b4f82b9381e11fced55"],["/tags/hexo/index.html","0c6b5bc32a7203379f3fe0a8a39ec645"],["/tags/index.html","82f80694f5c9480aa63c38256219a6e8"],["/tags/live2d/index.html","49e2cf59db422c20fbbfdf4c9e09b456"],["/tags/shell/index.html","8ccf2935c9ab02fdb3524ed3f12bb828"],["/tags/shell/page/2/index.html","6075cf750a0724772a733ef06ba57330"],["/tags/同人二创/index.html","fa77f040a1694ae661022de5a25bb728"],["/tags/小说/index.html","636a6da0610f53bd42c2a8110f764f62"],["/tags/扮演/index.html","1974b6245b673bd686f3719917291a2f"],["/tags/桌面运维/index.html","d67cd116374bbd428aaa19822be95d27"],["/tags/知识/index.html","6f9896dcf8fee1f9dd5711ffbc787ea0"],["/tags/知识/page/2/index.html","5f1c21de76983301c92a9c9e52464767"],["/tags/知识/page/3/index.html","d79af286d4e22dc9ba24fcafeb520794"],["/tags/神秘学/index.html","3b75c6ff3c674c4f15e4b78b9643df6b"],["/tags/老番/index.html","56d04928ff76b166e6e044ec257f90b4"],["/tags/购物/index.html","3266110aa7b7c8b3a138c159504c8ed6"],["/tags/资料/index.html","2e5e9ad52f1ab7fcfbfc868fa6ac26dc"],["/tags/资源网站/index.html","08343a62247c87d4482ec26e0d6d45dd"],["/tags/闲聊/index.html","63d41620e05b7e99570363dca29c1c47"],["/tags/音乐说明/index.html","6ccd23bc2351dcfc507f0e8d498680d6"],["/website/index.html","89451f9da7b811bd1b70d842c9f3a69b"]];
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
