/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0f92c0691cac20f50f2e08d366467e26"],["/about/index.html","260af979449d6b439aec1a267bd8f1a4"],["/album/BH3.html","e3d3d4d162b7e06af88f617b00e8c69d"],["/album/collegiate.html","08b46418eceeff8012c008574179bedd"],["/album/index.html","1d6dece5e0c1458e16720bedbccd2ca3"],["/archives/2023/12/index.html","fdb273f08d94fb9b8bb39c95dda8d0dc"],["/archives/2023/index.html","cdc76518f6c1ee794fc4818634b85ac3"],["/archives/2024/01/index.html","773cfd328119d20ddcaeaf7059a4fc7c"],["/archives/2024/01/page/2/index.html","6dbf296037044738111fbb905a6420df"],["/archives/2024/01/page/3/index.html","8f1a362355d3e3f3c9718865c9249f1a"],["/archives/2024/01/page/4/index.html","1c9c9e10cbf2f84a49969c9920692d29"],["/archives/2024/01/page/5/index.html","b1cc651f04a0e30cce05bca26f0b748d"],["/archives/2024/02/index.html","2eee4b4b4c19af087decf5fd09153d6e"],["/archives/2024/03/index.html","cb786a1ff457c9d28907e3b9c1e5498f"],["/archives/2024/05/index.html","42ff283370daf6fe77261cb662751379"],["/archives/2024/06/index.html","2cf698ae784fc1ddf56ccfbc3f31049b"],["/archives/2024/07/index.html","4a5fa1b2eb95c85cf356243b735a5ec5"],["/archives/2024/08/index.html","b221bc5ad164f8c27ace52986f96b3c0"],["/archives/2024/index.html","f591561293b44d3a535c5bf3f274e5eb"],["/archives/2024/page/2/index.html","bab4ecce97d958f2b90a45eee5de4922"],["/archives/2024/page/3/index.html","71ae6ced40c66bd114b6b1dc47ef272a"],["/archives/2024/page/4/index.html","2cf1fb9fb3b0d7ad34539d9d523ff23b"],["/archives/2024/page/5/index.html","59d93cf04ae890b157bbb344e9c80367"],["/archives/2024/page/6/index.html","3c23f5cc1e8e9ccbfb7858a836d89678"],["/archives/2024/page/7/index.html","2489df29b6a7b56e8b5e4a2e787e16bc"],["/archives/2025/01/index.html","21ebf6def233a0cc555c48ab2c75ea40"],["/archives/2025/01/page/2/index.html","81ddc21c7ca013c23e92341e381ca64c"],["/archives/2025/index.html","fb821861c19fdd6ca3047ea3c6dac74a"],["/archives/2025/page/2/index.html","451724bef304842ee5bd96ab1063a3e1"],["/archives/index.html","3fb313823b94d4adc771b4ab136db98f"],["/archives/page/10/index.html","314144bc835e6c3e3da9c22094b4aa57"],["/archives/page/2/index.html","74fa5e91627a0da33137e175dde31c7e"],["/archives/page/3/index.html","12b5efc6438eefa10435d989beed61de"],["/archives/page/4/index.html","ac4169568afdfca9e95d0ace30f40974"],["/archives/page/5/index.html","abc2af64629e39ac1c4125e354042936"],["/archives/page/6/index.html","9fb756788a07c726cc12eae65f35527f"],["/archives/page/7/index.html","a16cd8cd235c70e45879a06ae50bdbe0"],["/archives/page/8/index.html","75577957dc1c8ab550720444b7042dc8"],["/archives/page/9/index.html","4adb19452eb5e4919495e833ed7e4120"],["/categories/AI/index.html","5f9d752f31b22da14c57cbbd5c035a55"],["/categories/hexo/index.html","99876b685e130e2cfd10714bbfc67551"],["/categories/index.html","0da0c47ff787222aa91833cd01e4e493"],["/categories/动漫推荐/index.html","adfbff088963773c12d9892dc1858afd"],["/categories/每日一练/index.html","2d9d9e1d9377d90d9c8cf2cbcfa3ab0a"],["/categories/每日一练/page/2/index.html","02b778b07829bda593988eee26cd8383"],["/categories/知识/Typora/index.html","a3d134241db0a94300b44c8bf6fbb63c"],["/categories/知识/index.html","0941a052ef35dbfcb5591fe966754cab"],["/categories/网络文学/index.html","a81f85e0de83d170f43cb9b42bf902c2"],["/categories/网络文学/page/2/index.html","95121f818c78f6c238e98a4d5b515f4f"],["/categories/网络文学/page/3/index.html","2137f1e060ba3366d0e82f7932ee67be"],["/categories/网络文学/page/4/index.html","6ec396d08082ec36b2ae15f9c37c4c42"],["/categories/网络文学/page/5/index.html","860753331cda25b5f6549ee99de7dfd8"],["/categories/网络文学/page/6/index.html","c37064c81bff68b600712c0e85a9cbc8"],["/categories/购物/index.html","4e33baafa87c08cbccab95b6527d9872"],["/categories/随笔/index.html","648a5dab68fd7b4010de9db2d9de591a"],["/comments/index.html","396b345f8e4e7dd551804e31f2ba526e"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","40f9ed56b08ad825fa5dbd403c301634"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","82778a5345c19e97793b0350789f4978"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","00e89bc90612016cd77a9fa815e93b5a"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","2ea7d98b646533427b3674067d242464"],["/page/10/index.html","5b3615f32493c55a5e416955bd661ae5"],["/page/2/index.html","cf4255c76a8d8ae2d41fc13be07f4c62"],["/page/3/index.html","c34c568e5c95aa1d9f06c604a39c1248"],["/page/4/index.html","9cec0afd2d1bcfbc0b79f4f0df0c10d3"],["/page/5/index.html","3a6ad4d2ceaef41ba7df089849fa4151"],["/page/6/index.html","62249244166781dbeca5db302c8d5365"],["/page/7/index.html","cbf2259c08cd5c594adf275a79545a85"],["/page/8/index.html","69efc39dfc48996e1940d1b92d324c0c"],["/page/9/index.html","5ce311b468543a926f32dcc7f2dadadb"],["/plan/index.html","f761732df6e9da8405fdfed939fb43f6"],["/posts/0.html","fca86edb734955b84a47e6d998fcec1a"],["/posts/10a3.html","034ea5cd58ddaeb82ce8ba88c5a3647a"],["/posts/16107.html","db317985d6d2fcd0e587c1f9d9ec468b"],["/posts/19dd.html","e354f8e65241e2ab79f9f576b1d38065"],["/posts/20040.html","99a09da458dd55d4283dcea718af2274"],["/posts/203c.html","15b1177990d92eda3c3d007c2b43c15b"],["/posts/22034.html","85dd580379f9a8db47d2dd052aa53882"],["/posts/22f1.html","77a21b623e27bd8d0bb33e3f1dee34bf"],["/posts/23777.html","99c071c97e4e6372cf2cc4a0be8c4f1a"],["/posts/27400.html","6a40a5eef90a33cc7aff215c349d6eeb"],["/posts/28045.html","7cceb12afbfb49f722773895ddb31719"],["/posts/29243.html","d16c997391c681479290882a832446fc"],["/posts/29668.html","84d9e4740985670d01c5224c0e728272"],["/posts/29695.html","b2ad80d3643635e902a999ff017bacd8"],["/posts/2ff.html","8db1068c0551cc8ab54ecbc8c325f2a6"],["/posts/3078.html","be07c73f1bfd1a29860d40876128f69e"],["/posts/33a9.html","6e06cd03065d8eee7360e5fde8de69b5"],["/posts/3417.html","29d029385f44098260c4857cf79646dc"],["/posts/3429.html","7a03dd1aa9e7bf0ecf63a8a47c15d771"],["/posts/34434.html","bd8139fa041b9edd583d43da40fceb59"],["/posts/3569.html","86ce370ebf66c25af5a461a1ba159165"],["/posts/3ee4.html","d2414c88d11a4c335fc6ccc2e72002c2"],["/posts/40776.html","95e21df7d304cd7a5b8e24e0d8f44987"],["/posts/409d.html","bd3c9a78c4a62514bb96d7a4c7dc4769"],["/posts/4134.html","24f11ff75aa243e6f8eab32ada707892"],["/posts/43378.html","55286b44aafafd39893bb132f35b3f62"],["/posts/47e2.html","7231f83ded1b7998c5fbbfd7b807e0e7"],["/posts/49318.html","a8b18bdada1d8e45afe6f93f69b9195f"],["/posts/4ff3.html","8b48ed620f1158e1dad44aabd2bb826b"],["/posts/5068.html","a469ea7738c8e5bed883a6f0481b3ef4"],["/posts/51833.html","4049cf3f3186266cd629e63a56074dfa"],["/posts/53de.html","fa410ec417e708c48125e217606e44ce"],["/posts/57116.html","4f96097bf0ed29ba448c2789da39e258"],["/posts/5be1.html","a88980e32fa8ce1dd97558b0e30ee564"],["/posts/5f25.html","55a2d16fb3820a8440678660948eaefc"],["/posts/6044.html","9f9f6c40c06e44b010ace681d2d08a4b"],["/posts/62819.html","954ddde2e31a407aa566296d71b51cde"],["/posts/6581.html","be2059a04da16dc15b99b5f814b5cd7f"],["/posts/6780.html","e0555bab23038f61fb509c848985c167"],["/posts/67c.html","7046d31ce77d6836c4d888e793eb9a39"],["/posts/6b6e.html","7407144fcc7da31c6358ff43c4a5adc4"],["/posts/72ce.html","3eb5e609540f0ace0d7e45f5abb8be22"],["/posts/73a2.html","872ab522befafeb43dcf20873fbef3fc"],["/posts/73b7.html","d9c79e77ca023c17adf2756f38ad186b"],["/posts/78e8.html","d487b4338a84cd1f944f1136e3fbb253"],["/posts/7967.html","402b32fa225ef2eae33cac34bb7e3eb7"],["/posts/7a27.html","baef60abf9a86cd039884c39d9de3374"],["/posts/7a68.html","381dc032eefad8de578020f4fa9e057c"],["/posts/7d63.html","3854e5d770980c1f548d58ea58b8227d"],["/posts/7db9.html","e59124b9b3de7a7f23817459dcf95bd9"],["/posts/7eb7.html","555c8f054e23b55f324713a150766d08"],["/posts/7f36.html","4534f63bb0fa82a5d5afeb4444611db6"],["/posts/8192.html","4b08676d4d5f87739025ecb518244c31"],["/posts/83fa.html","7602a261cc2545838e0abcbdafd93c01"],["/posts/8a76.html","76817336a4b7edd7461fc1c50a9e66e4"],["/posts/9102.html","fc144bfff8861132eac8c6f27b4ff718"],["/posts/9241.html","ce7e16b2742efa025affae1d697ac316"],["/posts/952f.html","8491971914e424cf738d39cedb474731"],["/posts/97b2.html","167a5a6291f9c05c0f7d2bb4e1cc2f40"],["/posts/98f6.html","89161e9ae4e1c481862e199503986bb1"],["/posts/999a.html","1a4bcc1d112157bc8ad8dd6041dfc18c"],["/posts/99d3.html","dadcbbc2b841be76d50718eba64e4d6d"],["/posts/9e51.html","a52ee5221403c48e04efc3ff1fd1c6e5"],["/posts/9eb9.html","3030528527bafdd92c092bd96c8988b0"],["/posts/a2b3.html","5137e71a211ecb81a09ccd7504b00b07"],["/posts/a6ba.html","da3dcede3b23ec25601c6e9394271c0a"],["/posts/ae47.html","de4efa9b050d44ce8c7e59ddcffb5635"],["/posts/b179.html","824fa9d728991296047f6f25c5a81ba4"],["/posts/b60.html","d2f31380c8f04cb9d296f4390027e9dd"],["/posts/b78a.html","390f0d7cba14c191498b4bb9d6790017"],["/posts/bbf7.html","aae99e2616676287643fdb627a5f5735"],["/posts/bfa4.html","3cd0b9e210144f27a6c37a5e28122612"],["/posts/c8b9.html","f7f020d40c64655abd46e86fbf7357d4"],["/posts/c9af.html","1c0aab5c73207e0888759c25d38782d1"],["/posts/ccf6.html","918692ae61adb6db47d8f595b5035bde"],["/posts/ce61.html","77d01d3e4e2de47e6fe12b7007afa913"],["/posts/dad6.html","dfa51229b89be49eb9a97948ed84a9b7"],["/posts/db65.html","a3960a16ea6d0d789e3c8de4af3caece"],["/posts/dc53.html","12b52c5126cb53a8e512455897e46fd2"],["/posts/e279.html","99b9cabffd75975633870afb68643f56"],["/posts/e2b4.html","d53e44a9363d276dab36411601a68d9d"],["/posts/e56d.html","28c6b641dff3331a17c8e2e521e441dd"],["/posts/e672.html","60dbe01543aa12dd92601ed2a66db264"],["/posts/e6e.html","fcc9741940503f8bd89aa870acfd52f3"],["/posts/e8d2.html","1be1418627066aebca8e0b38f37fe0aa"],["/posts/e9e4.html","681d9b8bb2eed4428216c740332a6b8e"],["/posts/ee98.html","c0864125de9ee14c4bd0438f0ab509d6"],["/posts/eede.html","7299f1ecd9018cda16672604d793fc43"],["/posts/f85.html","fd58220126aa4cec29f2ecfb7017bc23"],["/posts/fdf4.html","ace0ddf5865c0e9b0b72fe5e854a611c"],["/search.xml","99c9c30d73e588b6d327b29de4d5d686"],["/sw-register.js","7e65a1c66a96b5109631de2506662b83"],["/tags/AI绘画/index.html","5b6661c9f88c344e26c87d300b80b5ea"],["/tags/AI软件/index.html","2d2d37088e4324ec55fecb1eac961f3d"],["/tags/OVERLORD/index.html","8fcd8eb2b7de342455940cdaf3d4c6fc"],["/tags/OVERLORD/page/2/index.html","a20865fbb6fa8106e364a35d2f6a2677"],["/tags/OVERLORD/page/3/index.html","368bbdfcc375d9d9d215afc9b1ee41a2"],["/tags/TYPE-MOON/index.html","096b63e2123e4373bc54cec903944b41"],["/tags/TYPE-MOON/page/2/index.html","4fcd53e36b20548637857ddf779b0b03"],["/tags/TYPE-MOON/page/3/index.html","dcc39371f1b8d46fede6b5bd24d43c5d"],["/tags/Typora/index.html","f45841976300a7860e6a3b6a6fce9a3e"],["/tags/hexo/index.html","1d1fb81142a896983a2af63d5ffaf0d3"],["/tags/index.html","eb3d65dc22907177a827a6d52d62ea96"],["/tags/live2d/index.html","02b64bcdefe33dfb9c2db0ccbb244d5b"],["/tags/shell/index.html","27a89b55bbd2ccad6804a53635e3298a"],["/tags/shell/page/2/index.html","907aa35fef298ec7ea9008359ca9955a"],["/tags/同人二创/index.html","50faa396f77763d2f7fda5fbad31e08c"],["/tags/小说/index.html","9acb0dce64b1b442fcc5467097fa6fe5"],["/tags/扮演/index.html","fda2a431fb54ec8a974e965a48b3b73a"],["/tags/桌面运维/index.html","1fba06ee1456d3fbc331f76b4b98f8f1"],["/tags/知识/index.html","00f83d4460e16ac5f330610fc2042035"],["/tags/知识/page/2/index.html","d1aa6634f12e3bb0140f54e379fdc817"],["/tags/知识/page/3/index.html","189044f23a5817c22baf6f72adcfe4d7"],["/tags/神秘学/index.html","e70440c50219d2f7fbaf0140b223fb20"],["/tags/老番/index.html","8d0684f3e9dab2cb964ca9cefa3d2e18"],["/tags/购物/index.html","e8dd33767bdfe58cc079785f891904db"],["/tags/资料/index.html","2f1c3415108f48a3726d8a2a26aabf07"],["/tags/资源网站/index.html","34e506fc7f680dbeab2f1f7d8d56dfe2"],["/tags/闲聊/index.html","543daeaffcc0bda7217b9a7d6b69bd3e"],["/tags/音乐说明/index.html","a13c7d0e43e54c85f43d11badc17c50a"],["/website/index.html","b171ee3aa5cee5080d81e70a991fa592"]];
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
