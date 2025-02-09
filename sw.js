/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ede36620b582b4fa6230b27d8b4ef437"],["/about/index.html","633649a39e99ea585a42e8ff34a4a61a"],["/album/BH3.html","11188c9bfbbf32d790233fb15ec7d179"],["/album/collegiate.html","ca38752ffc75e58217674c85b008297c"],["/album/index.html","2bb6d5049dbbe5378b30990f7eb62b5b"],["/archives/2023/12/index.html","ed9bf3abb02c5de16d5277c59964085c"],["/archives/2023/index.html","a2233f19781c6af64054ca9094d2f77e"],["/archives/2024/01/index.html","d41cc2b30fcbe65e5356e47932921080"],["/archives/2024/01/page/2/index.html","ff6f1c3365e468ee6b1264013936d4d3"],["/archives/2024/01/page/3/index.html","31f2cf8d49a01a9735775ffd50e29451"],["/archives/2024/01/page/4/index.html","673d5f7870f1d24f62ad7605aea66c93"],["/archives/2024/01/page/5/index.html","56c8450e014a7bffb372e202a6a2e1cc"],["/archives/2024/02/index.html","db663201e43b4b88c46d8b7e981168b7"],["/archives/2024/03/index.html","cbdd6f321f3c969ce563a4e0b7bfe3ba"],["/archives/2024/05/index.html","71ac9bc04937af004afd09801b7b6f8c"],["/archives/2024/06/index.html","f4216e81c50fb2c727753a816d8ae0a7"],["/archives/2024/07/index.html","6c40d081a8912de621483efc3c7b60ce"],["/archives/2024/08/index.html","04a0d3b5cecd42eeda782fb10222d9c8"],["/archives/2024/index.html","25eb21a1e117b14d9666f7a106dbf331"],["/archives/2024/page/2/index.html","13d42229ddbdb2d4d6f2147b5b60c753"],["/archives/2024/page/3/index.html","46e81c60f53ca3aec5de4cad18d1cfa9"],["/archives/2024/page/4/index.html","64909b854a668de927b412b5457e4ba5"],["/archives/2024/page/5/index.html","0fd315249282d1d171afac6248438235"],["/archives/2024/page/6/index.html","16a217d7e627a7039aa7838b76c8b069"],["/archives/2024/page/7/index.html","150328110359baba6386f3fb461f09c5"],["/archives/2025/01/index.html","e3d838876ccd58dc32bbc553742cf387"],["/archives/2025/01/page/2/index.html","7fb6e4fd67edac27e6d2f2a1273aaf2e"],["/archives/2025/02/index.html","9c597688b042c561698bc620d26b92bb"],["/archives/2025/index.html","1786c72050edfe406a7f70658e61a982"],["/archives/2025/page/2/index.html","248cbd0760843f83ca6ee4cfb5e3ba09"],["/archives/2025/page/3/index.html","156dfa8b0254b243710a4d3c6d4b3d8d"],["/archives/index.html","4c5f8e430339fd6bf8e9dc64a5b18be0"],["/archives/page/10/index.html","8e5870c84158f41b3c5d6609a087ba4a"],["/archives/page/2/index.html","a4e802a6f1af3948f9cd8e0326a23209"],["/archives/page/3/index.html","205390aa370a2252d04d39667545df3b"],["/archives/page/4/index.html","b235fb23b58f5f92888c994cebc26318"],["/archives/page/5/index.html","9134fc797ebb13726bee848d555d6b3b"],["/archives/page/6/index.html","fdfad324294f133faf8956f7fbc2abcd"],["/archives/page/7/index.html","c75835c1cff6f9f68fe0709c0ff2f6bc"],["/archives/page/8/index.html","216c8907a581b002342131a17e48ba02"],["/archives/page/9/index.html","0588bc421a1e064eb764659791a2f200"],["/categories/AI/index.html","446e5f8106da645f7edf0f071c46780d"],["/categories/hexo/index.html","5d4010156037207528dd2fc695528db6"],["/categories/index.html","8aa9382a152a3998256720efcdbdab92"],["/categories/动漫推荐/index.html","66f7c4818bf9935fe196ad28d239e5d1"],["/categories/每日一练/index.html","81fdd5cb4a56c974acf7d882f6abc384"],["/categories/每日一练/page/2/index.html","a3064b8f77de442845ad3470893b5831"],["/categories/知识/Typora/index.html","8417124ee1f0dedd6ecc14b0a9058196"],["/categories/知识/index.html","c59b8472d58d2a686a0b1d3c09d2282b"],["/categories/网络文学/index.html","d1e7748a25a29f83b126ac855acfc18b"],["/categories/网络文学/page/2/index.html","d32089a75fc6f0d5bda65ac99f811267"],["/categories/网络文学/page/3/index.html","710b247570b66826b7298e3b14425829"],["/categories/网络文学/page/4/index.html","2450fcc1ff87c7772b4a2d259ef92ebd"],["/categories/网络文学/page/5/index.html","0cae035b9a78949bf890e6514e15dc89"],["/categories/网络文学/page/6/index.html","8fbb551fad218afbf1afe4ffad55413d"],["/categories/购物/index.html","5e8b9a7d57d2e84e6e41b7d28b6111f5"],["/categories/随笔/index.html","d7dab34ecd19fdf756b5c523118f5afb"],["/comments/index.html","21b4eb57a63f87d80abb2f2945140787"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","cd01cdb60f2cda4dc4d8efd91ad5e42e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","528688891de75152cb9ce1b39b97748e"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d2199da40b93c776d84ca70bc641b817"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","35c830e138b576c7910b7ee8574cd380"],["/page/10/index.html","6fbcdb86d9bada01059ca8c059bb0a24"],["/page/2/index.html","688838bf3bfccaa6bf56c620f3ae9b23"],["/page/3/index.html","497c7fcba548b73e261d329ebedf5cb8"],["/page/4/index.html","6e85afe3e2ed346393cec313195046e1"],["/page/5/index.html","5d5faa71ebeeba23de92edd1db494679"],["/page/6/index.html","2bca4eea74d1f1f458b044e198fd2675"],["/page/7/index.html","e7d9e2de2b89586bcd5bf102b796c8dd"],["/page/8/index.html","5817e3ffab2ee14a479e58e31454d034"],["/page/9/index.html","aa403a54b761dc05ffb2f1ead39e1fed"],["/plan/index.html","577c5b51b372f9f7c15f4a8f9e6b6a46"],["/posts/0.html","29a8c79a359752c988978a7d28324718"],["/posts/10a3.html","bb5ffcba977359a8e9d630af97809ad9"],["/posts/16107.html","2c1b2812bb5575ade118fc4bbcbd2571"],["/posts/19dd.html","c601af1874ad5785aac68c141e1e925c"],["/posts/20040.html","344861fa33588a02bc1da5a58900ac82"],["/posts/203c.html","098d8ab120818efac16fc54ae79ab705"],["/posts/22034.html","2ab5b99901f9938497aa57ed57045bf6"],["/posts/22f1.html","8a51ff36cfc40f754f5b3de7b35f3c01"],["/posts/23777.html","ea3729d0b16b3d02976b4f7e39aea901"],["/posts/27400.html","f09483891bcd9e1ead41f0473bdd98cc"],["/posts/28045.html","aa310314246b39c55e989185c40ae0ca"],["/posts/29243.html","ea89ba0161cf08104bc027d1fcc93000"],["/posts/29668.html","12fb3b2311b25730c2423a5c63e62692"],["/posts/29695.html","bb175c00c4853f5e099fd1a77073ecb7"],["/posts/2ff.html","694e08b3cacb5c1ab430c125187f25f6"],["/posts/3078.html","0ef22306daa199af3ab784d970bec5b8"],["/posts/33a9.html","55c37512f69816338fcbf3faeae49453"],["/posts/3417.html","5ae84afc8eacbf23fd18b53a24478d64"],["/posts/3429.html","e7ee63c56189109e93d738be32ef6a1d"],["/posts/34434.html","7a46805691a86d25e726987991ffe09b"],["/posts/3569.html","5534c11c77e3fc04f12f61e37755d6bb"],["/posts/3ee4.html","72ea513801c85f4bd56f350b2111134b"],["/posts/40776.html","95c1f70b76e3d84b9eae72c389c047f0"],["/posts/409d.html","75b005a277577cdc5533f6e8ffeb6614"],["/posts/4134.html","3f9081b71d1d79923acc6823780a3519"],["/posts/43378.html","edc256777b04124ba03cd3f97dfdc7f3"],["/posts/47e2.html","f144912be5ae5a7fb8b55670d8b8df87"],["/posts/49318.html","0858b5e5e244fa792bf22128f1052ff3"],["/posts/4ff3.html","2403d09a7b1e3becdda3284e76947652"],["/posts/5068.html","e6f70b54525810684b4e4405e69bae25"],["/posts/51833.html","e50f8af4be58a7b55c3205ca3475f540"],["/posts/53de.html","ad22034d6f87839cc24b4f17131fb88c"],["/posts/57116.html","5c32a29d953f25200fdab36749f7fc75"],["/posts/5be1.html","4a1febe3523cb2657ed8d9f17ffcf133"],["/posts/5f25.html","e0d80768ca20cb0e392d73a6fbe218dd"],["/posts/6044.html","5c8d3ebf55ddc2d37cf3a2bdd47db1b0"],["/posts/62819.html","93b549442f6dceb10a99d952d4b88e27"],["/posts/6581.html","18c58855a746bacc2c40a1a643dda480"],["/posts/6780.html","f7f716ff614a8409199f5cb16ba04bbe"],["/posts/67c.html","ea75ae42ea3f1638628680a01dd33d4f"],["/posts/6b6e.html","c034701c5f55b9c1ef2fd4cf1d8e9d46"],["/posts/72ce.html","a500be1761a85976a783a04cce0d7fd0"],["/posts/73a2.html","318969befddb3da725472a5baaf14fde"],["/posts/73b7.html","1d4f7bb7de8ac4b4b6e695d1169fee12"],["/posts/78e8.html","9e3282887760f6c385cb545aee07ffc4"],["/posts/7967.html","773e7c668f19c307b30e6ed7c5887410"],["/posts/7a27.html","f0bb6e419972a62caabeb5fb55806a9e"],["/posts/7a68.html","13b29b02523f25d7217b25fc77de2879"],["/posts/7d63.html","574bf89d613e02f612f642776f07a0f6"],["/posts/7db9.html","1d95c493742a46ba5534d7b4bfc192fb"],["/posts/7eb7.html","6fe414b8e052ec7ce02789cc6066673f"],["/posts/7f36.html","9562d9971d06ac18815622649d73a673"],["/posts/8192.html","285c84c279dff554941891761a134c89"],["/posts/83fa.html","403459ae7c752946ca533c78b8967501"],["/posts/8a76.html","ab459cbf9a6207a3977178cf31418b38"],["/posts/9102.html","06d01470bb6953b3adbae80e851520ce"],["/posts/9241.html","73b89eb009b242ab33b963acc25c8076"],["/posts/952f.html","497d2e9a495c6b9ddd8555076aacc336"],["/posts/969a.html","818009c051d33031da84ba8a0ca5c7c7"],["/posts/97b2.html","3b3c4fcaead3486daacb6eb825e5991e"],["/posts/98f6.html","fea57875940f47cfcdbe0b4fea9daffa"],["/posts/999a.html","8deab0237c411e0167d5c9736441dacf"],["/posts/99d3.html","80f41932fe8616a6fe8ac9d28288f16d"],["/posts/9e51.html","763aa263f927f2f3783ea988eceaa0dd"],["/posts/9eb9.html","abb57c60c79a7c2d72860058064d1980"],["/posts/a2b3.html","d3432b2852c34ea7b48018750e7f60ec"],["/posts/a6ba.html","e398a1e0563827b0b8ad064e4dccbbd5"],["/posts/ae47.html","1ad7a2f8f0f38c5640aec653649742e1"],["/posts/b179.html","944f491a0501c25ced2f94b4a9abc09e"],["/posts/b1ea.html","dd345cee8519cf1dec67e55aaec021b6"],["/posts/b60.html","c6e054c41bf1f8e82c69851d193d9c14"],["/posts/b78a.html","4632115dcc04c8842913933967fa0013"],["/posts/bbf7.html","7d27f095ac6691867861c8108cb0dd11"],["/posts/bfa4.html","53975ea05dfd3fbc2a2cd3a0b080d3e4"],["/posts/c8b9.html","3262258f055de1b684a57cb289b8f8f1"],["/posts/c9af.html","e693ca18a62c067bf968dcdaabd17dc6"],["/posts/ccf6.html","db42ea93d11708702a888243df9fca93"],["/posts/ce61.html","de06966e514e3d6e5f46f334ade73951"],["/posts/daad.html","7706e389ae4693a68112784e9ea53e46"],["/posts/dad6.html","6528f98501a79831199de4d6a77c1228"],["/posts/db65.html","98ce7b33dabd126bf1481e9f4f5ba436"],["/posts/dc53.html","b6d1ef00e243ca0abc3af86eb73124d9"],["/posts/dd5a.html","e6d5c7992c9b0848a55e3b032e75f165"],["/posts/e279.html","247b5ea4d439e34d5196618f3fec426c"],["/posts/e2b4.html","a18f9328be512ebe4864555e9668b9ca"],["/posts/e56d.html","b590ace2f9db94d3d287e25a5ff6dc1c"],["/posts/e672.html","73dbbeb58d62a496530cf650fce9aaaa"],["/posts/e6e.html","c3a29c95e17625c99683c0d35666e949"],["/posts/e8d2.html","5570be0e1b6a1fe2aff4dbe759d83942"],["/posts/e9e4.html","8644a6e37e505b9471548c748e2367f7"],["/posts/ee98.html","07a4347c6b6f6a2ae7cb88749f6e0c02"],["/posts/eede.html","110cfbd3190b7c44cd2efdce11d8c3cc"],["/posts/f85.html","863df9e64962d1c7292542e3e8e2d04d"],["/posts/fd8c.html","e1c5b058c0c3bea178d63117f1fd0d35"],["/posts/fdf4.html","4de572dfef2bd085948c01d8632497d8"],["/search.xml","e23e4edcc21b14d899634f89059d4294"],["/sw-register.js","b6f93bbba9927a10df69115372933695"],["/tags/AI绘画/index.html","6876f72936cd0ef074078d6b547d9b32"],["/tags/AI软件/index.html","a5de653851f2302392665b7f3b24245b"],["/tags/OVERLORD/index.html","60695f12f84ee2e455054ababb954f72"],["/tags/OVERLORD/page/2/index.html","e02814f9f1081023d0c7c2f6f4d03724"],["/tags/OVERLORD/page/3/index.html","7d968ed97c6721a1c52f5e7da43708e6"],["/tags/TYPE-MOON/index.html","092f005100da8d1073a5efa3c6bf8898"],["/tags/TYPE-MOON/page/2/index.html","c06b14f4316726da5a38156272f5d469"],["/tags/TYPE-MOON/page/3/index.html","2b95e21e2adc5886a51e5808e245964c"],["/tags/Typora/index.html","597ba56fe17a479ae7cf2d12a1ad23e8"],["/tags/hexo/index.html","4a9ed9fbb4e48c7b4182a1035c56804b"],["/tags/index.html","79ef798f21fad63152358e1703f84d72"],["/tags/live2d/index.html","a1510d37832fac185df676f5f6162813"],["/tags/shell/index.html","1ac85837b7f8a8331c57f5bd85887024"],["/tags/shell/page/2/index.html","8cccd2c7180f7f58dec047fb51822424"],["/tags/同人二创/index.html","1a8288e68c7f074a43424d8f7c6de3b9"],["/tags/小说/index.html","f4275da9bb2b40e868e69922ed26f67f"],["/tags/扮演/index.html","6bc06981da25e61a57d9e509ed500148"],["/tags/桌面运维/index.html","22537f8aafb03a44008c2fe97428fae7"],["/tags/知识/index.html","ddefc40674f321761222b4b34a3ac5d2"],["/tags/知识/page/2/index.html","b0a730e6654acb5caf36ad6750ef1f82"],["/tags/知识/page/3/index.html","8a14670cd2c6587f706aab25ce8558f5"],["/tags/神秘学/index.html","32a2095e0f7d1e66b1e91747729d29e2"],["/tags/老番/index.html","749e8c9792563e2e8531b9414f4869a1"],["/tags/购物/index.html","06e886a60137192c545351081efb8bb2"],["/tags/资料/index.html","d64ac7cedc467cb8608ceac3317014d5"],["/tags/资源网站/index.html","b9d67c16a564d31de58934eee606667e"],["/tags/闲聊/index.html","f693be258906a184813a837db2b456b3"],["/tags/音乐说明/index.html","d0a6aaa3ae08d8dd6c439aa94364b73a"],["/website/index.html","472a185248cbaa15196469fdae7f051e"]];
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
