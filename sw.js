/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3e312ece9f70712b69287c64d42ea7f2"],["/about/index.html","98a96400a13108ef0195697eb54db1ae"],["/album/BH3.html","24b804b6176b254359c8e24fed2f5204"],["/album/collegiate.html","6ecaa4236524201db25528a0c6f87920"],["/album/index.html","cc4c35d6ae18f66ecbff701d0da1c1d8"],["/archives/2023/12/index.html","59429ffb57306e6ea3a5b95d3259bce6"],["/archives/2023/index.html","2ee434edef9842cbc52af48cdb2a9635"],["/archives/2024/01/index.html","9f0d4207798365f6420b2590d33e6226"],["/archives/2024/01/page/2/index.html","3e458766658f4e0a5cf2e64a809c059d"],["/archives/2024/01/page/3/index.html","4e5c69e1c04a96d4520d3747e2f58b69"],["/archives/2024/01/page/4/index.html","fcc23e6b8e8fb370f4b53825cbac1062"],["/archives/2024/01/page/5/index.html","2a38c2096566b297ccef069d184c93d1"],["/archives/2024/02/index.html","5fd6f9996c81eb394f7af6c5dfd51b5e"],["/archives/2024/03/index.html","0e980fd5fcff3111fae9a1bb63ffeb0c"],["/archives/2024/05/index.html","3d56e5da5095a15bb1f90d6a4ac3809a"],["/archives/2024/06/index.html","1ab4bae25888a7261ddec591985da06e"],["/archives/2024/07/index.html","72ba902e945312b1513e512933ad8fe8"],["/archives/2024/08/index.html","5beb5898d3e7ed493603bad0919a0ff6"],["/archives/2024/index.html","c8dfe0493bc5c6da13ffcb050ede59a7"],["/archives/2024/page/2/index.html","846fbc06f95cfc5c5f88c7c1f8bb3d2a"],["/archives/2024/page/3/index.html","1399f90303796112ce8f261f74b5f2df"],["/archives/2024/page/4/index.html","9e86da15231e3f1462c6230e8b078e20"],["/archives/2024/page/5/index.html","6bb2b5911d7c60f608b4ded93a1f1568"],["/archives/2024/page/6/index.html","eee0b99a6d74eff9f99b2f9109913f0e"],["/archives/2024/page/7/index.html","295ff1f1143f8a51497a24b550c32dd6"],["/archives/2025/01/index.html","a61fea93b96aa72859d28f36eac104d5"],["/archives/2025/01/page/2/index.html","42a8a1983f924fd3d0a73a280d421514"],["/archives/2025/02/index.html","1ff595f6a7799c4a8ae984e90177fb33"],["/archives/2025/index.html","16662d6748a8a96e33c79787d4cc45ca"],["/archives/2025/page/2/index.html","ed027c34a944a69c16ba9f55c8ff3e56"],["/archives/index.html","acc99076b9190bdc56da2556ee528cfa"],["/archives/page/10/index.html","c850b184c031299f666e136f99afc749"],["/archives/page/2/index.html","5fce78736d777554385520b175c9052c"],["/archives/page/3/index.html","4d44a3d923e903791e1b285a78b5fd77"],["/archives/page/4/index.html","7ccde3ae2625864ef8cad487ced88dc8"],["/archives/page/5/index.html","5c0c3fc3560ce6753eefff6c00b69f3c"],["/archives/page/6/index.html","2576a015833e0387f19208875832f78f"],["/archives/page/7/index.html","ecfa0e53dd4bd351dfd5d720bd9203c4"],["/archives/page/8/index.html","e9a545c50b8a06b34a83db0ed897365a"],["/archives/page/9/index.html","0b4bb5f4ce938aa07d75636737d47de3"],["/categories/AI/index.html","b7f18aa1316d4f015aa3ab3e029b556b"],["/categories/hexo/index.html","359b138505caa9aecc58e03584e449bf"],["/categories/index.html","05b272afb8c1ebdaba6f238ddd6c129c"],["/categories/动漫推荐/index.html","6140dba67b15117acaed63645ada4d6f"],["/categories/每日一练/index.html","6e87fecbc061c4830dd50a82576d59cc"],["/categories/每日一练/page/2/index.html","c94bcac97bf223bc7e0359327a408581"],["/categories/知识/Typora/index.html","549e9a5e442235edb093dde22c71148d"],["/categories/知识/index.html","ec646a3b1b97ea655c9f87fee1a90aeb"],["/categories/网络文学/index.html","b1c4983190c31b77e05ba9a23339b804"],["/categories/网络文学/page/2/index.html","a22b5a704fb8e33a45209833a1687d4a"],["/categories/网络文学/page/3/index.html","d4d9965b4d4862a910370552384967ee"],["/categories/网络文学/page/4/index.html","9a4146a1335a03852cfd565463fe7dea"],["/categories/网络文学/page/5/index.html","85ad953cf1b477e15ca1e0546b065607"],["/categories/网络文学/page/6/index.html","adb54e48dcc4feafaf25259051a5770c"],["/categories/购物/index.html","6e8a3824a8883c78d0a16975bc23221c"],["/categories/随笔/index.html","490069345e4d62f7d082df022d253150"],["/comments/index.html","c1cc53c4eb713f9d2dd63ae320160242"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","0520b4f5e3453b24da5f7080bdd10828"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","787207b21e24c23c5951147371736903"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d8d1a3824a56c8241db825f51f43e8d6"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","6af1b7585d1b37bbb11f1244b53acaa2"],["/page/10/index.html","49976a7c19e4a565031c8442c260ae70"],["/page/2/index.html","d04692203deb6e81323d1539ad41b3bb"],["/page/3/index.html","e5a3422741adb6a0f1575b4aab5e0c37"],["/page/4/index.html","730727a4a32b29c0f20bc12708f66db6"],["/page/5/index.html","1a53fac718228f18e00d5bae452d9079"],["/page/6/index.html","8069f0ca2486da3061d6a7a5dbb7ea23"],["/page/7/index.html","43b158a6df07a7edd5bd6f916d2dd6a4"],["/page/8/index.html","f824906d13086e561c9bbab6bdfa6396"],["/page/9/index.html","8ceb3bf61bb0e40e89cadaa931b33716"],["/plan/index.html","72a7ea4ea4973318ce1b4889c807f1fc"],["/posts/0.html","2cc2efee52c68ca479cca117d07931ed"],["/posts/10a3.html","738fb0d624a3877bfb1b04d25b1f01b9"],["/posts/16107.html","41db708b15fe94c030c65fcdf455becc"],["/posts/19dd.html","acb20eebe31cb62a9164b90320862428"],["/posts/20040.html","eafca41a4eb1bfd94d3ce7f3fc9eb9b9"],["/posts/203c.html","8f6038887472fe1444c3609e1d3b2132"],["/posts/22034.html","1b615df462267053200aa523b700a2ac"],["/posts/22f1.html","b5f0edec6a4a2d4e3d43c51e071c16b3"],["/posts/23777.html","42d2932547f00771bf265107d842a92a"],["/posts/27400.html","b2f3a66908accc4ad4ccb0ba2ce2eb69"],["/posts/28045.html","4ff65d79bd414d37dce55dd4c4d1c0d9"],["/posts/29243.html","14b3f3b927046a33c2d1f207fcafc415"],["/posts/29668.html","6dc77ca0b48e95351dd5e3f17b7d3d9b"],["/posts/29695.html","7aec0a7c5618b6f02ffbfa9477bbc611"],["/posts/2ff.html","57567d039365a20a0329248abacb755b"],["/posts/3078.html","4b4d0fe37ab68fcc9a9c08e5c3056453"],["/posts/33a9.html","cd544dc11ef268caf90b72c34f54b161"],["/posts/3417.html","2bf36b2d486acaec7308adc6380ce6a3"],["/posts/3429.html","640c401af804478d9607d723424e02bb"],["/posts/34434.html","bfd523662d3ef2ac3d85e6c907a740b8"],["/posts/3569.html","8a8eb044510e9d233a34663302d60a0c"],["/posts/3ee4.html","6da95c9f425fffdc64165072ce13cd24"],["/posts/40776.html","53a88086b3977a2e566d8e64cfeb652a"],["/posts/409d.html","f23641828b3e84e97551ac0c226ceeb0"],["/posts/4134.html","3f37cdaab8ffb40e1c38b1ede30b5ac9"],["/posts/43378.html","96cd76caede8c4e9518aaa0dd5005cd5"],["/posts/47e2.html","720f93b28c38d348bad48f9e4e428109"],["/posts/49318.html","4bdd005c42aacfdf5aa44eba68c5da96"],["/posts/4ff3.html","ef5bf010b67fea576e9dce8cf69320bc"],["/posts/5068.html","44e46d45132003e0c4cda73220422649"],["/posts/51833.html","5e5163289aee091add19faf31d4b10d1"],["/posts/53de.html","991202ef89f3e042b44c392117a754ec"],["/posts/57116.html","28bd2bd3a16dcf18b6d4faa0d0cd2e74"],["/posts/5be1.html","4871c45d84024c7b5cd03a26daedf4c8"],["/posts/5f25.html","af4c2f43f00bedeace2cb4a2aa506feb"],["/posts/6044.html","29753ed911c041c66ba7fc10d8a55e73"],["/posts/62819.html","0178cd880303b406ba326ec7a2ab99f0"],["/posts/6581.html","eb380c8e1c0de891fdca81a34064a7b4"],["/posts/6780.html","cc9e11c96d59c3600bdc99eeaf698da6"],["/posts/67c.html","278de08267499d3e045d5bf91edbd131"],["/posts/6b6e.html","d97034f220536a84529e01040e59b16b"],["/posts/72ce.html","ceb0593527bb435aaf56f40f4e0e7ce7"],["/posts/73a2.html","79677deaf3d77dee30157025d2fd57fc"],["/posts/73b7.html","29b3bfe48b2f756f9792b87d1cc6fbee"],["/posts/78e8.html","262603f2d87a0e34c4d7290bf15ce17e"],["/posts/7967.html","187ccd9b9b8d64e783c95caaf023a9dc"],["/posts/7a27.html","d5ad94e00c692532b58ee0d30694e5b8"],["/posts/7a68.html","416830238fec2c3751fd00a4e53942c7"],["/posts/7d63.html","a35ce7646d934e69ccd819cdb12b714b"],["/posts/7db9.html","92cb90b4ce4f3447d6220385d323b1d5"],["/posts/7eb7.html","9dfab67682570787aea0e02596b5a6de"],["/posts/7f36.html","81a15a48cb02cc515fd427bcb30f35fe"],["/posts/8192.html","d17af1636a4c3ab6eec48a47eae31cf0"],["/posts/83fa.html","3b950c28dceece87bd33179311db73d1"],["/posts/8a76.html","4d575e85b96b18a515da6c3a6bd03beb"],["/posts/9102.html","683a2b9d9d63ed04b9a10a8ec66c4f0f"],["/posts/9241.html","e7c646877700e980c2dcd4cae63c1838"],["/posts/952f.html","db45efb53a94d3299f15a76f8b7067bc"],["/posts/969a.html","198e6b362d0dededd84678fc71cdb397"],["/posts/97b2.html","b1fece86d086ce5461f6e98bd5e092ed"],["/posts/98f6.html","0df6464fc7d2dd09945417ab529af857"],["/posts/999a.html","fabc6b3681c9aad41205d3ffa698f80e"],["/posts/99d3.html","039227ddb92b75b2e3e0cda4318e0bca"],["/posts/9e51.html","f2b0ac4ee53859ed38043a8a3597d9c5"],["/posts/9eb9.html","e503ea755e334372dee5895e7b3289f2"],["/posts/a2b3.html","8d0c06b6f6d40f3f50cd1ad7cfb2938a"],["/posts/a6ba.html","b1bfa3510eb60ab85c212acdb3a2173f"],["/posts/ae47.html","e8c2e2859c18f46c3b690e766a93b903"],["/posts/b179.html","6abc8b8d3135f19a536c6df15302efd1"],["/posts/b1ea.html","fa533ab4cbc49ea1a3b62bb6502fb496"],["/posts/b60.html","4ceea719afb247ca204fe12068c1458e"],["/posts/b78a.html","08dfc5ed92bb2515f604c59e80952def"],["/posts/bbf7.html","f42adf3c001ea9519434f06570d16298"],["/posts/bfa4.html","0587cd2e5ba06465f0c353ab426007c0"],["/posts/c8b9.html","6d5fcb3baa32a83763bc712eae5952f8"],["/posts/c9af.html","8199cfdd9b8c600ffd83963b4c11b723"],["/posts/ccf6.html","312eb629ce0851a1c9c602a1c52cb577"],["/posts/ce61.html","120a6dbad5672eb9b4baaf88872268ec"],["/posts/dad6.html","2d6cf015d16421ca851f19862a18f1d0"],["/posts/db65.html","30e6f80523af6c4f50ecc07146d0b535"],["/posts/dc53.html","583b0e05708ab9290af7a70b4761b720"],["/posts/e279.html","e14b3812554cc4a299e45649f5e1180c"],["/posts/e2b4.html","63c263562a02ee3536113ab14e574918"],["/posts/e56d.html","ebd9a87eca4f0533f0b595e72e957f0d"],["/posts/e672.html","a75eb0454f2e77f49750eec374de348a"],["/posts/e6e.html","310ec9c1a9f241d8416c5f21e94a6290"],["/posts/e8d2.html","4f894f4416cc42c84527c30f2cbaa2cc"],["/posts/e9e4.html","42587713110718cf7bfca8af15867b03"],["/posts/ee98.html","d67716359b743a62ca140030a1b6d70b"],["/posts/eede.html","f0d6b7ac0194f1ad9de01c390804b16a"],["/posts/f85.html","7ebc7c0d57ceee4fd9d68fb953be4997"],["/posts/fd8c.html","289a67fa7822aaf938ae8a14076e8cf3"],["/posts/fdf4.html","e88d8cd0fddb126ba34a94b1de04ad98"],["/search.xml","81fd76a82d863268e3a45694fa317311"],["/sw-register.js","573e4ee5dd916c826e684df741164e17"],["/tags/AI绘画/index.html","93741427ea1bd250184af30263fbeced"],["/tags/AI软件/index.html","4f1b0c8e671c7574f33a80b959d76557"],["/tags/OVERLORD/index.html","db5ddfcba447c40a6363276fbce745fc"],["/tags/OVERLORD/page/2/index.html","393fc4c99ed3b978675cc2cc1484a8c5"],["/tags/OVERLORD/page/3/index.html","00f8fc7770e3293bc12653fb2c72d268"],["/tags/TYPE-MOON/index.html","418940d23634bdea5c189560f4c00112"],["/tags/TYPE-MOON/page/2/index.html","94bcc1b2fe9b05447fc50566af551fe1"],["/tags/TYPE-MOON/page/3/index.html","e87633df41fce8c14e6da98bb2e58b05"],["/tags/Typora/index.html","ac0f6be42209d191aea6e78293eda179"],["/tags/hexo/index.html","19300264dcc6d3d0f8cb364ac05d0b32"],["/tags/index.html","03d2137f822c1b58671850e049a281a9"],["/tags/live2d/index.html","fbd4005e8f8dcb44f2dacb7ca4259f30"],["/tags/shell/index.html","acbd03f42d57cf8e2e351bf8cdc2aefe"],["/tags/shell/page/2/index.html","0a58f9a21e72c06ad377370118ea8cd2"],["/tags/同人二创/index.html","b709aa8a64ec77f9697dbf0269607e78"],["/tags/小说/index.html","e65ae607d7c820f3149832b2a63ac230"],["/tags/扮演/index.html","303f003fa263ec1396824219fd5cd84f"],["/tags/桌面运维/index.html","101b4437342da6a495c27a634a3dbba1"],["/tags/知识/index.html","8443a69f1bc3baf4ab95500529b7d766"],["/tags/知识/page/2/index.html","02e8385a4f49997619ea51e655c647ec"],["/tags/知识/page/3/index.html","c8332911131f9bdd32b4017cfae0b1fd"],["/tags/神秘学/index.html","5bdd78408978cba9c7ac3b5a86b7554d"],["/tags/老番/index.html","ceb0f7e25e036e5fa9e980a8f51a7c01"],["/tags/购物/index.html","ea851fd3ed1e4e1e00df51c3ba2e1493"],["/tags/资料/index.html","a3e038918aea1966488df2cb41f87134"],["/tags/资源网站/index.html","2de8847df0caab09c5045f4f2eb84073"],["/tags/闲聊/index.html","5f95d5d5a3b2f2d1705bebf3ff56192f"],["/tags/音乐说明/index.html","04c6f8bddbe4f5d809d6994d0cdb3dec"],["/website/index.html","738faa94ace14fcc8de5c05366ed5361"]];
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
