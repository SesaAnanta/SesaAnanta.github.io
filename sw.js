/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b21a69b927503f874607fa67d5f81d18"],["/about/index.html","bddef58170381843a59c7773128a2904"],["/album/BH3.html","7d068398f5c84f0ed7c89823daf4a0eb"],["/album/collegiate.html","ac8516f1da2bd1bd00072d34748c610a"],["/album/index.html","df8c285a43fb5bcdd55f109d04436075"],["/archives/2023/12/index.html","1480e5786cfc4c43524115de08e1f01f"],["/archives/2023/index.html","0ecdb9c63ac579c4196df13b0baccd5e"],["/archives/2024/01/index.html","a2ca09b917c88b7cfd71d0c84832ea79"],["/archives/2024/01/page/2/index.html","cfd3626791488d07bf528ed1f713ff1d"],["/archives/2024/01/page/3/index.html","7bef940b025a631ca62874667c0c5041"],["/archives/2024/01/page/4/index.html","6810e92e738e397f63346c6eb1e2f201"],["/archives/2024/01/page/5/index.html","b2bf1d8e173c9387664ebe0b03f59a71"],["/archives/2024/02/index.html","26c1f1f3ae07da07ad01509c90247b2e"],["/archives/2024/03/index.html","ea6274e91b82a7adb76d534093eac51a"],["/archives/2024/05/index.html","871b3449c05a17dc9d34e6ccc4226233"],["/archives/2024/06/index.html","4b0396ad18ecd4f7bc1c791e807ecd4d"],["/archives/2024/07/index.html","f644df00a2d3c15261b26ed7e42ba1da"],["/archives/2024/08/index.html","27ebfdf82bc9d7703fe8213fdf65c7aa"],["/archives/2024/index.html","6ebdde2453563fceeb1f16d9e357ffcf"],["/archives/2024/page/2/index.html","92beb494d0b4f88f9dbf47eb4c3ba570"],["/archives/2024/page/3/index.html","1a46a725e75e34a8da763c3c189ffa94"],["/archives/2024/page/4/index.html","992a60107658d8797312479cd071382b"],["/archives/2024/page/5/index.html","28212ac0153fceebd6402dab7c6ff2d3"],["/archives/2024/page/6/index.html","544917edb6d0d5040317be27faf410bb"],["/archives/2024/page/7/index.html","fef59b13921a0edd4589c31f29894816"],["/archives/2025/01/index.html","ad3a35415a73af15b23e9d405680db88"],["/archives/2025/01/page/2/index.html","53b9097a6aeaae12b43205d8be9dd2c5"],["/archives/2025/02/index.html","2704fb22fe230c5aa1c20d470aaa1831"],["/archives/2025/index.html","513c065c344ced42a45453cbdcaac0d9"],["/archives/2025/page/2/index.html","6c725ede6df7cfcc9c6da0143551eb48"],["/archives/2025/page/3/index.html","9507b328302150278c08a7b7247cb454"],["/archives/index.html","e43882501dfaebbf03c395bbfd60cd04"],["/archives/page/10/index.html","66aacb5896bcd5490e4046841f40c9db"],["/archives/page/2/index.html","ebe4f9aaad868823c09bdc34478622ea"],["/archives/page/3/index.html","b5dc60bd362235151d471024580b8459"],["/archives/page/4/index.html","edc25c0ccd049d5cd1d37a5bd565131c"],["/archives/page/5/index.html","9a1b0090a19a73b38eefda07e9528019"],["/archives/page/6/index.html","2b41cbf678aa765bce5561385f3f1aaf"],["/archives/page/7/index.html","9004797965aca0482f0ccede4f0a525e"],["/archives/page/8/index.html","61d1330f90489ed89df28b128bf19c61"],["/archives/page/9/index.html","4faf3fe6819c9a7594114fe73685b119"],["/categories/AI/index.html","47959d79813d140b41c946d1a5ae11fb"],["/categories/hexo/index.html","7b108629f9a1b5f380e95d5829d6ba2c"],["/categories/index.html","6fccc2ccb2e32ef256d6869d7dbed39b"],["/categories/动漫推荐/index.html","1a94b451b1c20223df960e25ac77f910"],["/categories/每日一练/index.html","d4b9587904edd912631689dcb9bf1f2a"],["/categories/每日一练/page/2/index.html","5542b1793bf322fb27efcba78c77ab4a"],["/categories/知识/Typora/index.html","203d9f01f16dec08351edacf2065182d"],["/categories/知识/index.html","774a3d82564fdd5f594a6c718f82a417"],["/categories/网络文学/index.html","575cfb60354fa77a49cc801c1a39dcd7"],["/categories/网络文学/page/2/index.html","75d71f8f925ccdc47fd3287149ac54fe"],["/categories/网络文学/page/3/index.html","d7be31ed1f4b68393c5bc024eeb2fd86"],["/categories/网络文学/page/4/index.html","f2fcbf5d6930856f26b86f33b4cbf201"],["/categories/网络文学/page/5/index.html","0a93318fc58174c36b3b02b5c0b11957"],["/categories/网络文学/page/6/index.html","d641644621b5bd9654134ee10ceee321"],["/categories/购物/index.html","579302ff81d26dbd84e0a65c60ebffa7"],["/categories/随笔/index.html","159f081aedc68ee80c6d12378189611e"],["/comments/index.html","f6b219b15ba8ed427873a25a98ae48c8"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","4b3b611969dc46cdf4f0ca8ce6aecd31"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","393c91f5943fe78036432a2437871e32"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","95d241f87a42ea3e91fe087a886e115e"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","5d7613389d49b2eb5cef9b134d01646e"],["/page/10/index.html","5fde398aca3934cfbe925b8839007597"],["/page/2/index.html","41ca7be7cebd03e7a06fb4017294a947"],["/page/3/index.html","d6dcb3fb0719afd5c29fc308f6e1a18b"],["/page/4/index.html","1fdb608a7442ab2e782c9f77723cac1c"],["/page/5/index.html","8dea22f7e3d68f6078bd2bb74d207a8f"],["/page/6/index.html","d71d0dd37d5307435ac7158d6021378f"],["/page/7/index.html","d30295749b5e2e230b18c5b49c8fd154"],["/page/8/index.html","accf014d6aacad8c77572a0168e33377"],["/page/9/index.html","1b244389ffe2903a58d711e213d7b274"],["/plan/index.html","8594761a5b51ccd985d00f9ec869b4f4"],["/posts/0.html","9c3ad5891ce26dc13044e90f65010457"],["/posts/10a3.html","887abbec391458ee4f931f30baf3513a"],["/posts/16107.html","4976e58168f82507ef6e56e4b24a2352"],["/posts/19dd.html","330971ce9992c054248e057fa18114de"],["/posts/20040.html","7f48c63c2ed9e3afa61a8cca9cc60ba4"],["/posts/203c.html","d936574ff5c8f10ff5c93b5dd060563b"],["/posts/22034.html","79af9a919079ad38496468fd3827e307"],["/posts/22f1.html","420dedfdc4eac47c4bbf837c15bb0e70"],["/posts/23777.html","98d373870b560b9c32311234d1789fc6"],["/posts/27400.html","256131d1e63e2f3b3e5feda3f525987e"],["/posts/28045.html","3be755e82483862d4a6f933c8fed80d3"],["/posts/29243.html","f70adfd13c6fbf275194eea9dd2efc35"],["/posts/29668.html","8b7fc2181e5a2fa14fdc65ef538004d4"],["/posts/29695.html","2cba5bbde5ec1758db1d36242580e09a"],["/posts/2ff.html","9788f413fba1ba9eaf8c1b31dbb34d71"],["/posts/3078.html","0770b255344911ed7e58d0040773953a"],["/posts/33a9.html","206bf6d2b45e453fb3410510a48de0a6"],["/posts/3417.html","5ffa809d1f617c80dcc879448dafbf13"],["/posts/3429.html","9a7b07a07a7585692f0bb76839c2f82d"],["/posts/34434.html","1f683eefc12d6ce09269d7521a60ef02"],["/posts/3569.html","86a05237c8a4c8e334514bd9738528e1"],["/posts/3ee4.html","d6381e806ede55eddf837c8b73065b20"],["/posts/40776.html","1fdaabdef803c8643946ce397bf11aaf"],["/posts/409d.html","015df0f2bc797c5295e6330551ddbbde"],["/posts/4134.html","0fadf4451b80583893ba4f35d6f46a12"],["/posts/43378.html","03722d4bb3b497ae23cd828a02296e02"],["/posts/47e2.html","a77efe4a979e08b25e1961cde39194ee"],["/posts/49318.html","9efe9dcb6f9b4c3e6baf4c868b90fb59"],["/posts/4ff3.html","0be061f63c2f7a5c91d487100f8331b3"],["/posts/5068.html","00ab974ce4d078c65ca31000cd645c5b"],["/posts/51833.html","2570f2a97e24c12f0b08ad2ca0810ab7"],["/posts/53de.html","f53424dc7e0825b563d9b16eadf86fb6"],["/posts/57116.html","029ce0ccf0acefcaa18d35f1fb2f8899"],["/posts/5be1.html","1d5f43dd5bd7749094a8a81f3422670c"],["/posts/5f25.html","fa8954570911777457280aff93448569"],["/posts/6044.html","5bdbb65a43f699862e40ce812b512ad5"],["/posts/62819.html","07a9fa04b0e49a3d6844ecf3094507c3"],["/posts/6581.html","2254e9d850dc1c61686f98c194fcb316"],["/posts/6780.html","651d30fa896e5fc0a6b2113aa4e64ce3"],["/posts/67c.html","8321ee658d512bb8087e5aae80475cd7"],["/posts/6b6e.html","ba501da63d7bd2c93ee9aaa92ec3c85d"],["/posts/72ce.html","18166205977601483648096f38c5d67c"],["/posts/73a2.html","49e5eefa6c5a84e125e38f6d26afa204"],["/posts/73b7.html","5cf863d190f3a3bff8a0d5caea61bcbc"],["/posts/78e8.html","356f8089e3f723e90f11399f19bf37dc"],["/posts/7967.html","c48628ef435e452e2069e22c56e7e4f0"],["/posts/7a27.html","518c37d4e700a349f41f12a9e88f916e"],["/posts/7a68.html","e276453b1c08d3623d4bc782b15aaccd"],["/posts/7d63.html","312d9dec1cb22331bd9ceedb4bf71d88"],["/posts/7db9.html","8f9ef4831a5d6ba825e3751a4daf9149"],["/posts/7eb7.html","14ae157d5538770b4c23130b54b21069"],["/posts/7f36.html","ad09d991c89e8ad3eefa5a928d7355be"],["/posts/8192.html","443e32033fa108b1e5dc0d8739699f16"],["/posts/83fa.html","1441c89ff7a35145e8b1cc6463d4e5fe"],["/posts/8a76.html","3751efb31fc75345a30ecf94605c9c6a"],["/posts/9102.html","404254df3b5919e45186c3b925969ae7"],["/posts/9241.html","fb323761a786b10519c825b433d410dd"],["/posts/952f.html","4f0c67b4cc346b119dcbec7235d9f835"],["/posts/969a.html","39f05ba6baf97cbcb151eb2604e2d207"],["/posts/97b2.html","e77ccb0bf61a161120bc54bf17bbe542"],["/posts/98f6.html","c6745cba59319bea71b1649737f5646b"],["/posts/999a.html","508a5de8432b4fe51ab6954b72253581"],["/posts/99d3.html","d23b23c74726b7a18d239e96d1211753"],["/posts/9e51.html","d145961868a55566c3a2eaf075586795"],["/posts/9eb9.html","91d03fab32ef9b6e5579db48748c306b"],["/posts/a2b3.html","892f86f0d4fd4c852af4a51630b0a296"],["/posts/a6ba.html","9f97732929af84d9d3639c9103696f09"],["/posts/ae47.html","f61cbd9463b968a06087b9db9ff010f6"],["/posts/b179.html","e838d80ffce2b65eba4d0a93a63659f3"],["/posts/b1ea.html","e1b7e052369ea5477280f8e2dab5cb3f"],["/posts/b60.html","642b67d57ede64f3baab2e5a3b5bb33f"],["/posts/b78a.html","8dfd68c54d2ce82277bb950dbcf79cd9"],["/posts/bbf7.html","0744efe7239e54a9c8d6915f9f300d64"],["/posts/bfa4.html","8c2cf2fb9ff3e2ab24350f09274e8e64"],["/posts/c8b9.html","857eddaa1c5e72e08355a290281ce7d4"],["/posts/c9af.html","5ce387012839d7f6edeb2c54af54a347"],["/posts/ccf6.html","f2e0360c434b5bf96deffc7fc56f6f4d"],["/posts/ce61.html","c641ee9ad7a7e83b408fb68dd101a8b2"],["/posts/dad6.html","9ec8eb786f17b6f884bdaeb4ca31c167"],["/posts/db65.html","c9b423ae45aeed13971b2ad2f8cdba65"],["/posts/dc53.html","0b4c88dbc3d5ecbbd4947a5de5682073"],["/posts/dd5a.html","4fb86995e65173b2a9c879d62545bd22"],["/posts/e279.html","53f3c545bef15daf56aeb00c529a3ee8"],["/posts/e2b4.html","7ea52481fe7a7b0d3dc542e494f15020"],["/posts/e56d.html","34077a71f3aa91e63303c921d9dd083b"],["/posts/e672.html","6f3602674cb3bf87b785c9846d553c63"],["/posts/e6e.html","00f9507feeb46097accb70a57e7f0c8e"],["/posts/e8d2.html","ebc1ef418aa2f40d7c11128fc40eff0a"],["/posts/e9e4.html","e378f978fc12baf506fc82737f59a2eb"],["/posts/ee98.html","0edb90a4f24ebaa42ad9862935d512d3"],["/posts/eede.html","98b5053088731616c69866278e120fdc"],["/posts/f85.html","7c8969d10841a44c926a453cdaf7e554"],["/posts/fd8c.html","32878d4b69aa2576a592bca282567545"],["/posts/fdf4.html","de959dd506047723c134209f5637b705"],["/search.xml","e293d72427067c25532d9dcc42c81779"],["/sw-register.js","2ef9d2a7f96e79a10d3f970d3e4d0ec1"],["/tags/AI绘画/index.html","94db336ec091f103a7422066664b6668"],["/tags/AI软件/index.html","2d2ef64106292f0c720dfb8714afd759"],["/tags/OVERLORD/index.html","13a3365edca2ce564e1b0e7cccef9e76"],["/tags/OVERLORD/page/2/index.html","58c3990331f735fdc22cb05f1bbd6fdb"],["/tags/OVERLORD/page/3/index.html","172f2de02e2c8715549adabd9de21edb"],["/tags/TYPE-MOON/index.html","1931ef2287c1a86c12e4a24809b88e4a"],["/tags/TYPE-MOON/page/2/index.html","3f2de67a653c050643e1607dfe0f7d68"],["/tags/TYPE-MOON/page/3/index.html","9c37d57531ac2e00b0ad01067bb1938d"],["/tags/Typora/index.html","7704c7dec08e0855029a7b7e48200b6f"],["/tags/hexo/index.html","22adfc5596cbe55352fe088ecac6387e"],["/tags/index.html","e5c6584d9a9d9494524bd0d147155388"],["/tags/live2d/index.html","550b16daedaeae6fc002ab5108aadd37"],["/tags/shell/index.html","8fb96d10b0e91ebeb83cfafa922118b5"],["/tags/shell/page/2/index.html","12902366b0ca100d96177bb5907184c9"],["/tags/同人二创/index.html","c9b727bb7bfbc49545d2865425745cd3"],["/tags/小说/index.html","669c8cf40db9d706c344c01773fdd4a2"],["/tags/扮演/index.html","65f8358a8b78530d967bf3fd265a5243"],["/tags/桌面运维/index.html","fe1e65899a7018121ff6f46a9d355ea9"],["/tags/知识/index.html","a0ea5119c86aef981d7adb2c0a9d1c00"],["/tags/知识/page/2/index.html","8fab8e0822da7ff44bc9e70722fad048"],["/tags/知识/page/3/index.html","9427d6a252cf115d9ab48a595d1c87f2"],["/tags/神秘学/index.html","51c739698b3d618d152d91eb02777a29"],["/tags/老番/index.html","59e95216e353ec667c19e6df89d0d779"],["/tags/购物/index.html","2b3e5fad4e02f21be45b1378baa7b019"],["/tags/资料/index.html","cbff2ded0e1d68c94ac26060c0023ba8"],["/tags/资源网站/index.html","ab09c52232dfed4373547a8344c1d1e4"],["/tags/闲聊/index.html","db8dc337cfec7c34cbac948e699f4d22"],["/tags/音乐说明/index.html","b8d7da40c004406b6e6397c8244945b9"],["/website/index.html","e3429e68d6783c8ccd94e27d9db1e55c"]];
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
