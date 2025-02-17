/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","dc2b76177bd47a3b1e85b72a3e8d5499"],["/about/index.html","09069a8211a083ecf232e6fbef147fbe"],["/album/BH3.html","de4982bfde75911a753f680a248ea257"],["/album/collegiate.html","363a17aadc88cd325f5cd97c511378de"],["/album/index.html","0fd89718ba6fddb69c053cd5df636574"],["/archives/2023/12/index.html","3e0d9ed2d85069678f41d74578cdc815"],["/archives/2023/index.html","40ac98a18ab2d9125bcd7d6ac30a80ef"],["/archives/2024/01/index.html","67800c4e9ca868ba10c7cbce8e6fcafd"],["/archives/2024/01/page/2/index.html","5b6dd42cf5d8c643726d270547fd8e38"],["/archives/2024/01/page/3/index.html","aa58b94b7895afb46d59fb9b43d34f37"],["/archives/2024/01/page/4/index.html","68497bfa75c28bdc134eff59fabfecc0"],["/archives/2024/01/page/5/index.html","54590ecd0d61e80f6c21cc36713d249e"],["/archives/2024/02/index.html","96d2c5c9ac431c7e596eb7ed4ed5d750"],["/archives/2024/03/index.html","6b59fbde8cf0f672001b8b9dd3eea737"],["/archives/2024/05/index.html","e2d85bee07fe0c6d85aec2b4046891be"],["/archives/2024/06/index.html","fe0b36cb1490d3729fd81ef2ab7a8916"],["/archives/2024/07/index.html","e32a86ff55e398639d3bd4f0a1a2b2b9"],["/archives/2024/08/index.html","ce65fc25443009d7e38b46b1744369ab"],["/archives/2024/index.html","3c0883708e4cb31d186aa577db38d3d6"],["/archives/2024/page/2/index.html","753e04589875fff3f4ac0f31a22b5576"],["/archives/2024/page/3/index.html","5d205a45912dc12f7916ab0dde3386ca"],["/archives/2024/page/4/index.html","763856eba7f61253ac21d63aa9417033"],["/archives/2024/page/5/index.html","0cddbf39c90f00a321362a5a0b6fd5f5"],["/archives/2024/page/6/index.html","32bcf048acc7d0e99cbf53745af5938e"],["/archives/2024/page/7/index.html","72cb25f9d156fad56351917a88f21e3d"],["/archives/2025/01/index.html","66bd3f7d4c717442f2820c211295ebb0"],["/archives/2025/01/page/2/index.html","8c4b1617b90f1833403ea7710a33aa77"],["/archives/2025/02/index.html","dc9e95580bf5bfc8bbd557865229ffb2"],["/archives/2025/02/page/2/index.html","147f01f3f02bb77c2a684cfc358e418e"],["/archives/2025/index.html","ae9dd821a7eff68ef8905b90b2b6995f"],["/archives/2025/page/2/index.html","1d2c5c9e6110f0c1e15ff233f69f933c"],["/archives/2025/page/3/index.html","e54d6d007994723bdd292f901828cbdb"],["/archives/index.html","583c2ff5aab8af937034c5315e5ff0d8"],["/archives/page/10/index.html","1313b5a855e5922dedb556e1c376f4b8"],["/archives/page/11/index.html","20ba703239ff92b5eaa2c46648e4edbe"],["/archives/page/2/index.html","80ce04f197f8247bbd47c29864aaf165"],["/archives/page/3/index.html","bf594f34c94b76bc82ed7db67bb10f76"],["/archives/page/4/index.html","bc47963ef514f9c9d71ecd4a4a2180a5"],["/archives/page/5/index.html","ee1546c0b464e68232d9a5ef797efc17"],["/archives/page/6/index.html","badc2e3d6820cf17956cc7fc86cf4a83"],["/archives/page/7/index.html","20787eafc3af52cfda0e6ddd1575bd63"],["/archives/page/8/index.html","f4a90e447e3dbcae47b4d984c6c81321"],["/archives/page/9/index.html","5586d477ea90fa29cb4236f939259d83"],["/categories/AI/index.html","b2dc771f8caea76d64a341e76819738a"],["/categories/hexo/index.html","91cb0f94f0e971a1573772f6dbfb0f4a"],["/categories/index.html","9869edbac858b5b76cfcafe513f8ca61"],["/categories/动漫推荐/index.html","9fe573ecab4930c61ba2cbb38e30c84b"],["/categories/每日一练/index.html","58a7835ee6e6d7e69e5c0cb3f949d742"],["/categories/每日一练/page/2/index.html","2078c79f5abf18e5ef87439570328631"],["/categories/知识/Typora/index.html","859b36792bb479b14ac66d92cd347e56"],["/categories/知识/index.html","8157dfd681ddc4259daf6c3e0399c0b2"],["/categories/网络文学/index.html","fdbf63d879f866096938c5c9def72b1c"],["/categories/网络文学/page/2/index.html","84adf337170076843dae8be62cccfb6e"],["/categories/网络文学/page/3/index.html","06b6f3845b5f21932ace965e3a79b9b4"],["/categories/网络文学/page/4/index.html","beafce7628b078430a07dbe075345fd8"],["/categories/网络文学/page/5/index.html","5a7feb5823b7313b85000065771c22af"],["/categories/网络文学/page/6/index.html","a50dae419d418867e114d4c0efcee3d1"],["/categories/网络文学/page/7/index.html","1f86dcec7897237a61f88f79ddca8aef"],["/categories/购物/index.html","61320a5de29e3a24791fe2dbd3386851"],["/categories/随笔/index.html","ef2306fca573f17784aebefb515affc2"],["/comments/index.html","957b3b4d64308e56469ec368d0dbaea8"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","5d0f5d0380a9f9e0cf0912d10a2b4aaf"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","486b1e5a2048ddd3a92a6f8bf1f67599"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","cf48cada7e1cd5635c09afa742386ce4"],["/music/index.html","ffce8776b41be7c13a04043513046e82"],["/page/10/index.html","f83e22cab6c33229c0b579e9a200c92e"],["/page/11/index.html","abbc815fe27549763222b0524322789e"],["/page/2/index.html","cd03b6ea55ccdc37a3b4526fa21c3542"],["/page/3/index.html","508cb4c4211c0f0523ecc80e6359442a"],["/page/4/index.html","a8f91a0dd64344c79c972598aa06b77c"],["/page/5/index.html","f70735668f80b89285220beff28c2005"],["/page/6/index.html","02b46f7b1297f7e90c15667c866d293e"],["/page/7/index.html","8c0f6c68f915991a341feadf4d47d1fa"],["/page/8/index.html","21ac88eb7d254ddcc9cfc003295ceffa"],["/page/9/index.html","9b5ff3167b3574dc05f7dab0f3bb179d"],["/plan/index.html","33d96df0284d29a071248973c7b73fea"],["/posts/0.html","cabc928b1e79bc953180986ae6131c36"],["/posts/10a3.html","7dc113bd3b8889d3a1c068ffd03b9541"],["/posts/16107.html","8285c68be644b0e627820cdbd31ba5f4"],["/posts/18df.html","9f5ef97e93ca7c00f07482cacac0ff90"],["/posts/19dd.html","21e4387507b1f95d2fec335fe5bc4276"],["/posts/1f13.html","6c75726915efd8de38aa1be8978048b8"],["/posts/20040.html","d608cc1a6c5865bb7af91505ad5c42a6"],["/posts/203c.html","362bf46c7b03dc2e6aeac8da86cafef0"],["/posts/22034.html","f8c36035172bf04e8d092212fcfb2c6d"],["/posts/22f1.html","f99f5907ec205e1a3e0a7b07bd1b743c"],["/posts/23777.html","e4aa38e7715a0c6712831b4bbba88f08"],["/posts/27400.html","b3a71d4416da1b4a93e36c6d0d4c9ec7"],["/posts/28045.html","4903a0053508790a53936ab2ee3e4c7e"],["/posts/29243.html","a486ac97a63dd57288903b31ae6b2e93"],["/posts/29668.html","9990dd78b8a3d19743a1e71e46b7ef02"],["/posts/29695.html","c184a741dedf5a227e8f3415039a79fc"],["/posts/2c4d.html","5deb53ad0a6c225b35155d8f6120eb10"],["/posts/2ff.html","c864ac65ac753db1fa9087c33ba006c3"],["/posts/3078.html","0ecaca4ce10fa7eb7e71b73de778ce97"],["/posts/33a9.html","5c80014372db5aea2a9ad22989fa2984"],["/posts/3417.html","4e81644fa6cfa0cee7fe8bbe079a6155"],["/posts/3429.html","479ebd37e20474323f5d41d7a133391b"],["/posts/34434.html","025813d8ca42f65f8fba7777839193fc"],["/posts/3569.html","5a3bc7f1868e48e9a429a5a234715b8e"],["/posts/3ee4.html","3915d4752a0604dfce9e7318316bd4a3"],["/posts/40776.html","d7d456fe318d9d7e449f2ef8d247abb5"],["/posts/409d.html","6b946d0369283ad24cd47b6534d2b730"],["/posts/4134.html","938dad4b5623f99177cc8d5fb234507f"],["/posts/43378.html","d4c96c26f635d2cc51cc8cf7b2ee1696"],["/posts/47e2.html","3b7cdc67feacc0804a0e5a1d30b51ea7"],["/posts/49318.html","a8fe073922c963542bd21fc077807c9c"],["/posts/4ff3.html","9584e8986685e65786620b413cd1218f"],["/posts/5068.html","1b39db7d4ef88a188b45a13308c35852"],["/posts/51833.html","2c34edfcb435b1ec649c028d86c1e807"],["/posts/53de.html","7e918bfdaabeced192542288a1985256"],["/posts/57116.html","01d9e618163eda6d7118e04c7b7c8942"],["/posts/5be1.html","5ce016a7f2f0c71d2af7dc546ce3b278"],["/posts/5f25.html","de39d5be6e764ec6e9b534b9aff760e1"],["/posts/6044.html","05efa441d14c102b95c7d8e52b2cbf42"],["/posts/62819.html","1d9f21365ff53da93c80d3a889630bda"],["/posts/6581.html","e23e1bc8f4f0fec61131c542aa41fa07"],["/posts/6780.html","1bf0bf9d86f6a3de676ddfb69ac3c420"],["/posts/67c.html","baf685f7b7b00136790997f68980f1f6"],["/posts/6b6e.html","26271500f4ba554c27b6127fceadc473"],["/posts/72ce.html","c4fe738911baffab164f7076d73e0eb0"],["/posts/73a2.html","cec5de1caa3a4b1d224d39c11c204bc6"],["/posts/73b7.html","1ec9973d17039041e597e91b51e86599"],["/posts/78e8.html","7a8f3b2d304b7b23f0619e3174efc45d"],["/posts/7967.html","834e43827c924cc2f6a14f2004077387"],["/posts/7a27.html","cb758d218532763b809fb8b079cbe120"],["/posts/7a68.html","ce83addb6e8135d852a1a11984e9f79a"],["/posts/7d63.html","999e08d0a95a7e5d31bb082588bc21aa"],["/posts/7db9.html","3662b89a4ba4661bd37d7e94f40f981d"],["/posts/7eb7.html","5220f4f4f8d24d4bf7b9eafc71fd9bb1"],["/posts/7f36.html","75fc2f27d0cb0681a0efed2966f4e0ec"],["/posts/8192.html","289be480f11ba9ba794d555af3d5ced7"],["/posts/83fa.html","00b3f6d0865fe5d1254f894faf29edea"],["/posts/857e.html","7008cda966222fd2d6958d5e9d6d1b06"],["/posts/8a76.html","7bca54984039d2051ec4c05f46fce771"],["/posts/9102.html","428fdb579d571f7d6d304b244171e35d"],["/posts/9241.html","33c78a2bcbb77356344f55f80bd27def"],["/posts/952f.html","15c3e8caecdde75b13f2c093c1776d56"],["/posts/969a.html","8a55300943021722e83532c9b9e479b7"],["/posts/97b2.html","b84dceb932892636314518f8add06526"],["/posts/98f6.html","da7c031e46984f50a51739ad73af15bc"],["/posts/999a.html","f805f321b1a0397d8664226c44037416"],["/posts/99d3.html","27586d7feb19d3890187b38ad6840749"],["/posts/9e51.html","7bbdc068f0369cf30a3827ece8fad65d"],["/posts/9eb9.html","bb6662c6836d0bac78edadca4220cf49"],["/posts/a2b3.html","bb917bce4b14488279c3961303c0a223"],["/posts/a6ba.html","a4094822bd9630b9fcbb88504f45fb57"],["/posts/ae47.html","35c10cd3f93abcce166fad367cbd0050"],["/posts/b13c.html","e3a6bcb508d187fceec907ff724ab022"],["/posts/b179.html","a550946d962c8838b5e96f675581a090"],["/posts/b1ea.html","836cb3021e3a8513f22199879c229b4a"],["/posts/b60.html","61612bd7d157796ed4d54175506793c5"],["/posts/b78a.html","5f838208040a3471e1a5f9a3ac29c381"],["/posts/bbf7.html","71ac094d9c6f212d1545ee94dafc56b9"],["/posts/bfa4.html","39135108ea71b3107af4ed3f1c7952e9"],["/posts/c8b9.html","a846acd6799621f6598ea3d4a20bdac4"],["/posts/c9af.html","42efd81bd1e3eed5857102a5ebadf920"],["/posts/ccf6.html","f620cfae7943af0b2edc0c4698f73cd8"],["/posts/ce61.html","df4c0faf956e7a0ed1ac2520b04d8f5c"],["/posts/d5d.html","a61f12300a37be7f4150c8a5566b6b6a"],["/posts/daad.html","fb7738c7f3ecf2017ec820aa12a47b63"],["/posts/dad6.html","be8e14dc5c31497f393c42d17bcd9e5f"],["/posts/db65.html","1ee8b4b543ff2f9b95e5e1a4c3840451"],["/posts/dc53.html","0987669566959181cbac3c889d78c09a"],["/posts/dd5a.html","b576202d1b22f7975cfecefe3897e111"],["/posts/e279.html","60793541625a90d4f74b80ed5b789722"],["/posts/e2b4.html","367753f4f454abfe2acefb4925248d3f"],["/posts/e56d.html","76ee5062d3ac5020887dfb209c830931"],["/posts/e672.html","7753a21856cf7f39579380b59c8c5840"],["/posts/e6e.html","3aed0e37081ce39c1ebb82836715097f"],["/posts/e8d2.html","d0cc98d56c84661eee385cd1da603325"],["/posts/e9e4.html","65eea4faaace10071a38b84d9522f8b3"],["/posts/ec8c.html","8efee342a0d5b43634f3dbd78f3fd7f3"],["/posts/ee98.html","324875c7e22ee0e6847a74ebcf1de0e3"],["/posts/eede.html","a18099460dd2c1fc360a91d6d5397f55"],["/posts/f85.html","d19cc6f636aa3362882cf6db1580a745"],["/posts/fd8c.html","6d9760fafa8182fa5d4c821daa7c062b"],["/posts/fdf4.html","a873feb8cac3657c53756be0465df117"],["/search.xml","424d70322301c955f9d59eeac982f781"],["/sw-register.js","e56af9aeaedaf564d37ac9feb0de779c"],["/tags/AI绘画/index.html","f2a7bfc810e8740fb6bb973900916e7c"],["/tags/AI软件/index.html","58489424f3027530fd638302da0ff57f"],["/tags/OVERLORD/index.html","b431723d79efd73c879228ad65d189c7"],["/tags/OVERLORD/page/2/index.html","6980dc4db02ce4c6eaad5fe9f1798c02"],["/tags/OVERLORD/page/3/index.html","c67ddf9c02d6ce21c8a7feab98841c05"],["/tags/TYPE-MOON/index.html","337f7e4925a4f3c2f7e3e925be34f293"],["/tags/TYPE-MOON/page/2/index.html","e204a94a43e762bdc437ac30fcd445b7"],["/tags/TYPE-MOON/page/3/index.html","17a87a3e2da70b10e819a27c89622283"],["/tags/Typora/index.html","a6d6bba237848a74a77d6c29a46a522a"],["/tags/hexo/index.html","4406b46a74d3865fd7fb1f5ef0522c6e"],["/tags/index.html","d50ddf51a6c1b45e3bb4768c106368f2"],["/tags/live2d/index.html","75c8a575ddf4741bbe7c533732bf6d22"],["/tags/shell/index.html","2bcde9c29ec73062d2e62933b5a996ac"],["/tags/shell/page/2/index.html","cf138f09b7302192ea12fb28bcb0f080"],["/tags/同人二创/index.html","8b6f1d082a3187e5366462758aa046d8"],["/tags/小说/index.html","ba34a036d9875cbf82b8ca4fd8521418"],["/tags/扮演/index.html","193dc82d2a6627b08c47ee33cad2c2f8"],["/tags/桌面运维/index.html","44a48fa108508cc4f425260038c2084f"],["/tags/知识/index.html","17ae4f007c869459d87446f98644b976"],["/tags/知识/page/2/index.html","e6abce9c17e72b054085f49755c81421"],["/tags/知识/page/3/index.html","6de0cd7aff20c60f5600bd9fd7e2dc8a"],["/tags/神秘学/index.html","9f93f500c6774519e59284ebe8b9afa2"],["/tags/老番/index.html","5548be6b2f037e0ee85c6d0a9ce103cc"],["/tags/购物/index.html","72456eeab740dbe1677f27c4487077f4"],["/tags/资料/index.html","6f5c06002f24f425054398d165b7c76c"],["/tags/资源网站/index.html","e76da878f3a37b5b6a0ed5c7eaa39d51"],["/tags/闲聊/index.html","6842b5382add3ecb2b15e7c3d7264cb0"],["/tags/音乐说明/index.html","923ceeb3472a4cbcd4e12e893f4ee09d"],["/website/index.html","d490c2a726ae75f5a4c993bc132eeb19"]];
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
