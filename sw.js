/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cda064c99545d0ec1d141a75111d7378"],["/about/index.html","37a416212f5b3d382fd0d10de04a9a51"],["/album/BH3.html","ef1b9d6ccac1ef9b314ff2d85f8801a2"],["/album/collegiate.html","b61ce61b4cf7381e5dc4545c3b9536f7"],["/album/index.html","b2f6a567b726dc62b9747ee5dcf4af6c"],["/archives/2023/12/index.html","823552ff349db18a979f345d1591b700"],["/archives/2023/index.html","1ee79c037c1cf7097807aa3ceabd3e35"],["/archives/2024/01/index.html","11231c3aa2ce1e3e86bd9f74ce870c44"],["/archives/2024/01/page/2/index.html","7e92e26b68f6ee05cc122168a46e818c"],["/archives/2024/01/page/3/index.html","a67a2e6d22031d4b1f4131a35d121934"],["/archives/2024/01/page/4/index.html","66cb633411f0958d8e2d5da822a2edec"],["/archives/2024/01/page/5/index.html","8c7047f66c17d76cfa181fa458d79dec"],["/archives/2024/02/index.html","5b12d68db68956860fb81eb9e4423052"],["/archives/2024/03/index.html","4f0f79a84da8683b8469eb5a79d7f424"],["/archives/2024/05/index.html","e38e504b3320e70ccfe0321be963f0e3"],["/archives/2024/06/index.html","d5e607927f888dc63eec216cf8bb3fde"],["/archives/2024/07/index.html","66149effef44595bc378cc5f6d09afb2"],["/archives/2024/08/index.html","4457adb3ce2a358ed9f60be0d3af0484"],["/archives/2024/index.html","47a7d48dac3705627d4c621de694ac4f"],["/archives/2024/page/2/index.html","70c78649b11029d2635a4e4c6bb331a9"],["/archives/2024/page/3/index.html","855939c7ffb457969fe69c92502779d4"],["/archives/2024/page/4/index.html","cfd3e7f887870a51fe943a83b8dd4979"],["/archives/2024/page/5/index.html","d0bb9c6f0307beabf4a148de2362e6bf"],["/archives/2024/page/6/index.html","7b9a9eca73041ee2f2df4f3a8c71b638"],["/archives/2024/page/7/index.html","7722c700ec8cda1898aee55bd7cd5fbe"],["/archives/2025/01/index.html","211825a07c35935c2aecf6408604e8b2"],["/archives/2025/01/page/2/index.html","ed6f87f80627afb26b37b839b9a7703f"],["/archives/2025/02/index.html","d39912419c912f4ad2347f8767b9aa5e"],["/archives/2025/02/page/2/index.html","1883688d6eb42b676e15a7db3d27a491"],["/archives/2025/index.html","d426cbbda33ffae7bf5526dea4691c0d"],["/archives/2025/page/2/index.html","8dea2c7ef661402cd87618acbe1fb837"],["/archives/2025/page/3/index.html","7e83c2b04a4078dac56e2381bdf08f44"],["/archives/2025/page/4/index.html","a42a79d27e3f2bf15e195995ffddb9b0"],["/archives/index.html","395dc9879c351918a68a4727f0959020"],["/archives/page/10/index.html","f3f3356e989a30e95dec4b90aadc43bf"],["/archives/page/11/index.html","46125ee668285f731d3cf04f6b20bddd"],["/archives/page/2/index.html","371f3947069dc62eb279e5e6c144c5c7"],["/archives/page/3/index.html","ffe4677dd3e20e408be10ebf679d93ca"],["/archives/page/4/index.html","e2b9d7f815720eb617b303bdb5db156c"],["/archives/page/5/index.html","053260d347656f25e8b91f9bb7c5fe97"],["/archives/page/6/index.html","769ae32404c14ed845e29cbe5d3624de"],["/archives/page/7/index.html","1dc0d8129d220d205e55c2a11075dde0"],["/archives/page/8/index.html","f6377afff30b0ce99202512c69f1c7ba"],["/archives/page/9/index.html","4bad6d3dc5c480279857db195d641fda"],["/categories/AI/index.html","d59d3d73f9756df517ad07df3b3929f4"],["/categories/hexo/index.html","7c336e1240c6be1793f9a5bcf5312637"],["/categories/index.html","e795090d911b09583d67eeb3fb031fd7"],["/categories/动漫推荐/index.html","c541d08a65a594b801e71c217cc170a0"],["/categories/每日一练/index.html","18176efcd21c04ea19ab509cdc8a1cab"],["/categories/每日一练/page/2/index.html","1e0dbce39e608a45386ebe3962ac1ab2"],["/categories/知识/Typora/index.html","edcaa75c91769f16eedc117d7daab6d0"],["/categories/知识/index.html","700f1f0545c3c7def3e8ba9445a4dfd5"],["/categories/网络文学/index.html","25fd03d823ecec33c6fa7a54961ab750"],["/categories/网络文学/page/2/index.html","d28f53ac98e6b09408f19786c41579ab"],["/categories/网络文学/page/3/index.html","7307488dd90a33a96510a58f51086a4d"],["/categories/网络文学/page/4/index.html","c73da1d89ffcf65e3c2857c60225d706"],["/categories/网络文学/page/5/index.html","7b64233c1acf4e034f413483e20d144e"],["/categories/网络文学/page/6/index.html","b1a4784cc3b2cd6c9df8554b972cb48d"],["/categories/网络文学/page/7/index.html","55ed881e197b5e5a3120abb0ddb51a9a"],["/categories/购物/index.html","92f4cee96d042b2a23abbb24dd2ccdb8"],["/categories/随笔/index.html","af47d638c679544e15049508cfbdedd6"],["/comments/index.html","50974a3a83bc21b9cf28b532e9072b24"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","a566b6859035b31b634d4e243d49ebce"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","2c6f6ffe8ccf51fdac7e76a7f276cf6a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","8144fe477ee0007b13d22f0544ec330d"],["/music/index.html","d7db295149683b96b7bbde8fe29a016d"],["/page/10/index.html","5f4d112cdddf9b102afd8180bb9e0c31"],["/page/11/index.html","17e6343032e89c6c2a166e6887eaf222"],["/page/2/index.html","a303d5eab09b56ec1fe401a9985a0604"],["/page/3/index.html","c8c2106bdadafdaa4219c6027100446f"],["/page/4/index.html","bc03fcad33856bddf664f6f092ef68fd"],["/page/5/index.html","1e0521bd3cd81f03f691e45fef791165"],["/page/6/index.html","0ff5d1866826f09a7437c9417cf23710"],["/page/7/index.html","0c705c7300a459ae3a1a4aa85d1b0bd1"],["/page/8/index.html","790cc4ea8218704f2512c1fa0e5fb420"],["/page/9/index.html","4f6ef3ed856d59e93f4cbb9f5552e02a"],["/plan/index.html","db426f687e99da6f66b245132e9a65de"],["/posts/0.html","cb64090d4dd69b59a4c9a2638a596ae7"],["/posts/10a3.html","11d95c29b2663c72b03ac75ad3238337"],["/posts/16107.html","85a09101a4e6b3f7334c1fabf341653e"],["/posts/169f.html","cfc5b813d3eeae96205ab0c4aabbbc7d"],["/posts/18df.html","6c7382ea580c9b4bcfdea8f6e9a25bea"],["/posts/19dd.html","539271e6302a09c50f6381cc0d7a2cf0"],["/posts/1f13.html","ea92148a72f1aac69430f15e4c3ff81c"],["/posts/20040.html","896508f8c9ba43d30f8ff5635c2a6542"],["/posts/203c.html","218bb6814729b9470ad7497f3e52f332"],["/posts/22034.html","6c54edd5edfa7c80b99a5b4cc216aa20"],["/posts/22f1.html","d240073a2ea7bd76febb3df514fa303c"],["/posts/23777.html","9f7bd195f7eaa6f125c81c24a8cbaa81"],["/posts/27400.html","e8d8f852e2bf0ba99efbd88b5471333f"],["/posts/28045.html","6edc3a2f0500c59e6d2a4076476d899c"],["/posts/29243.html","e34a37d143703274a87b6ba64c7ebaff"],["/posts/29668.html","92b2925a2ea018af19647a749c8659eb"],["/posts/29695.html","6571cfa7eca467abea279b8e28f83840"],["/posts/2c4d.html","4cf3e8eb01cb4214b8d95121d5242402"],["/posts/2ecd.html","cd9c2d46fec3b2c3e667a0051dc7988f"],["/posts/2ff.html","46aad94fa995f04f3a92e995a78dcf8d"],["/posts/3078.html","671c7d3bcfffced602ad90ffc5c46e55"],["/posts/3200.html","ea47ebe9164af581900cde3730a961f7"],["/posts/33a9.html","4693711e04d2af5d556ff67275bba2e6"],["/posts/3417.html","fce73edaa064d43bb9db979b0f161d56"],["/posts/3429.html","2169821cafdba4d5a833f53a76d4c851"],["/posts/34434.html","8b75b5030a3ca0a7d35ddb6d5e5701cb"],["/posts/3569.html","7360b579e38fc041774a95d91dcb0726"],["/posts/3ee4.html","9d742d989bb4188487feef80470d8aab"],["/posts/40776.html","da02118b72ea03f2c94ec0b0dc92299e"],["/posts/409d.html","1242560b91d0abe7dca0dd6accdb08c3"],["/posts/4134.html","8c86c75783876fdc8ef08583159f72b7"],["/posts/43378.html","fdc3c9e31301933d44f19d41f82ffccf"],["/posts/47e2.html","e94137301c76042c58f3df04cbf8bcee"],["/posts/49318.html","90983b471f586617c3ab0996570664c7"],["/posts/4ff3.html","7c7b849dd110abd3e47165d745e6911e"],["/posts/5068.html","d12ea63a5f280c0667a2e0beb25fe3f2"],["/posts/51833.html","1c232f34073e8118232112c0d286a908"],["/posts/53de.html","7dd6ec0c73bc1fb187fdcc24b8495bba"],["/posts/57116.html","f747c755c6744e18bf263eba0dfb43e9"],["/posts/5be1.html","2b17bc4dd1cf5fe3a7451ec4f9c7a020"],["/posts/5f25.html","1c92adf4f1615d29c7fb3893ae68dc8f"],["/posts/6044.html","88e00bddf4ca13b8f2a82c8efcc4171b"],["/posts/62819.html","2a68994ddbf402c601e5dcdff287ae52"],["/posts/6581.html","cc1946b2d09d83ddd28292aa3f547dd7"],["/posts/6780.html","bde6a224c4ee0d2fa6c505daf598db25"],["/posts/67c.html","55cccb50030c403658e5a3e29d23709e"],["/posts/6a9d.html","4212cb66daad90e8c6c7cc7ccad3e674"],["/posts/6b6e.html","e8ccda4308dbbcaadfbf8e56330d98e4"],["/posts/72ce.html","0960a76ab3fa9e23a379cac19a9637c4"],["/posts/73a2.html","daccc1f81765cf7c583bdb26b9a22c20"],["/posts/73b7.html","18fc5458f0cab196a8ee36b1eed1efce"],["/posts/78e8.html","fc1964253969c83b1ac84cf476389091"],["/posts/7967.html","1fcfccd462655e0ade1f47400aa48355"],["/posts/7a27.html","ed9cfd7405722cd03f397b301e32b4f9"],["/posts/7a68.html","6466d5891ddec194b8fac29e31e91e12"],["/posts/7d63.html","5254493edd8eab60c64bd74c0bd5a074"],["/posts/7db9.html","a65e0501bd9c3eb98be53a0dfae78547"],["/posts/7eb7.html","980b45e9d3b9726c836db82753355d23"],["/posts/7f36.html","067d7207f151585c59168ed8db1993a0"],["/posts/8192.html","edc2d59fa94c003df4f3a04195f9da79"],["/posts/83fa.html","186a176943e7766a5580ea5f1ba758b8"],["/posts/857e.html","4f271bbc01e17ff79d8b5cc04435c828"],["/posts/8a76.html","5ecf2b67b51e713d65621461b9c41f4e"],["/posts/9102.html","ab336423be2d4a7f987509dfa8abfa15"],["/posts/9241.html","7d794a9ff757598ab7243b5d754dd30a"],["/posts/952f.html","975d6470e69db8dac0ff71021bdeacff"],["/posts/969a.html","c2fdb579c2b8c2e9d686dcf95424be19"],["/posts/97b2.html","fec7002b0f0f38e28961209d4f7039a1"],["/posts/98f6.html","c17eba35f2c43ef38ce44ae806f05348"],["/posts/999a.html","8a8374bd898b13dfe7e888d6692c9536"],["/posts/99d3.html","079591e915748e5d5860b7fd3c10a135"],["/posts/9e51.html","d9418222692c75984719516a75f83ded"],["/posts/9eb9.html","95ca70e4970f3ea86a0a9301c4383fd2"],["/posts/a2b3.html","9c34f792d0d7bd50d1dd723fc34b60f1"],["/posts/a6ba.html","1ba8b404ff4958842f8b24a170b9a727"],["/posts/ae47.html","de0905e03ab4e5a0a75b5e1fbd7596ab"],["/posts/b13c.html","5e29872380357178e857b347637b451a"],["/posts/b179.html","1682c5027a0f2c580adbcdd931bbd393"],["/posts/b1ea.html","6cad5d31e236e35c9471033743aa97d3"],["/posts/b60.html","8278ecc1053714b965ed8a282934a0e1"],["/posts/b78a.html","bcd5f30a50fd59ff83ce5630a38821f5"],["/posts/bbf7.html","bb058a322ebe1977c9ee0495f9018c60"],["/posts/bfa4.html","e70190f2d87792f331e33ac02c536803"],["/posts/c8b9.html","f17a438bc0dad7a785e52dc81c715d1f"],["/posts/c9af.html","e139daf3e0b564129e85790ed50de02d"],["/posts/ccf6.html","aaf7569b56237bec5749d4053cc932c8"],["/posts/ce61.html","daaa28706db89aabbaa51bedc515a627"],["/posts/d5d.html","1cc2e0a4492d3789b52205e26a4a92cc"],["/posts/daad.html","befbe812ef08bba9f5f5d135ef8fc396"],["/posts/dad6.html","7cd9740229a30017e459e79f0599bb69"],["/posts/db65.html","d73f962a921c4fa7e142d157973241f8"],["/posts/dc53.html","fbdfb3ddaa76745265bcd8b5764b56f9"],["/posts/dd5a.html","939d285b371fed318e28f72bababb1cd"],["/posts/e279.html","2e9235a4451277af183926e8a1a65e38"],["/posts/e2b4.html","8c663c8b6623afa6da6d9c8c75698612"],["/posts/e56d.html","470782c45f388dffdd6d49f039323ab8"],["/posts/e672.html","f3ccd2e8aae977c54b6d990d76a58624"],["/posts/e6e.html","44b68c1271bb256736f5841f45ec6b14"],["/posts/e8d2.html","8489613a10eed05cf3333423025568ee"],["/posts/e9e4.html","379d9458274be53a66a224560b3031e0"],["/posts/ec8c.html","9a665969b2ecd57383ae992fd2770001"],["/posts/ee0c.html","530c63a426f14719dedbcc5ec048174e"],["/posts/ee98.html","312bb0c2509c5d2776caae27d8172b79"],["/posts/eede.html","61e180fce7eb47e33401631e3bd0bbf5"],["/posts/f85.html","a1d306b9f314490befea5068720423d2"],["/posts/fd8c.html","a988caf7b6cf2e45286880c3fcaf2cd7"],["/posts/fdf4.html","c9045ec138f5e547e240c5dd8d6a7484"],["/sw-register.js","023c2e46f078b0fd7b9a6250b6648f9c"],["/tags/AI绘画/index.html","f354b11a82680d2a398f7d3635ace7f5"],["/tags/AI软件/index.html","a134c20bcaa92740ffe25dec42ed7e30"],["/tags/OVERLORD/index.html","f8669549aca35179eefd1593c2c91358"],["/tags/OVERLORD/page/2/index.html","749721607adc5d14afc6085454d3da85"],["/tags/OVERLORD/page/3/index.html","cc2dc3a94524819b15dd0a071219cd25"],["/tags/OVERLORD/page/4/index.html","448d4f7d14442dd164e49b859c321035"],["/tags/TYPE-MOON/index.html","c671a88538c1324cf8c1a1ba0e98f056"],["/tags/TYPE-MOON/page/2/index.html","961ea188b88cbbd79f65a5ffd161faf3"],["/tags/TYPE-MOON/page/3/index.html","497d054d7d1862ed73a2cdff959b905e"],["/tags/Typora/index.html","135f0a5b5f5cff9a0b880c9488591cba"],["/tags/hexo/index.html","3c074c6394addf27e04a55624df00882"],["/tags/index.html","2d9994a0e620f22dbfd576e58a39045e"],["/tags/live2d/index.html","5b80f1e8ee688d64cfd8c120dd105896"],["/tags/shell/index.html","0d2df169a1d633d1d81b8db2d9e8215d"],["/tags/shell/page/2/index.html","db057eea8585d32c45325b9096014540"],["/tags/同人二创/index.html","4f243bdd0e0932ee35dce0ad66fc33eb"],["/tags/小说/index.html","ece675831240639812ad34f618aa3bc7"],["/tags/扮演/index.html","b204319fbd6508100c0d5dd9baff9ff0"],["/tags/桌面运维/index.html","75dd7261c754c67847b96e004d4bb78a"],["/tags/知识/index.html","ed000b67c425afa80f020489f21dcd40"],["/tags/知识/page/2/index.html","b2b0d0c9fc251a49d9d64cf7ac8abc36"],["/tags/知识/page/3/index.html","a16fbb34c3a29b8979a3dac48c1d6e85"],["/tags/神秘学/index.html","964433eeca2fc73b5f749ede6fe989ab"],["/tags/老番/index.html","8a4fee4b5ed9ec762b195e8ec60d1c3c"],["/tags/购物/index.html","7d8abd1923cb3e105ff2b0f450d468fc"],["/tags/资料/index.html","f2bb46fb8114b2b24db953bbdaa005cd"],["/tags/资源网站/index.html","c2d5c0433f6a578c1449a83cf8709305"],["/tags/闲聊/index.html","cd8f56c1f38045473f322415f5762f39"],["/tags/音乐说明/index.html","c9409dee703765859cfdadc8a5c1e281"],["/website/index.html","9d21eff52a1fefc8da47d78fc993d91b"]];
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
