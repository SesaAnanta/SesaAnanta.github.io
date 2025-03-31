/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","776a719ca3b7cb2263d0b06b28418ed4"],["/about/index.html","514c073ed91ad8f5b140ce0d9ee1d093"],["/album/BH3.html","06f785739c844119c5226d0fffa5ef11"],["/album/collegiate.html","c87387532291df7945b1078495bb3914"],["/album/index.html","894cce69cffd1492b2746e66fdb3b042"],["/archives/2023/12/index.html","fb4ee4afa2e25021c8156fa3a3b9ad9c"],["/archives/2023/index.html","45534c5cadfc27930a82f457bb07d5cf"],["/archives/2024/01/index.html","2d3f34ca9fd1287e733978533486d70d"],["/archives/2024/01/page/2/index.html","5c52979e13911045027a609e3341bae2"],["/archives/2024/01/page/3/index.html","99f0c4f3744755899de7d31f2c8b6d92"],["/archives/2024/01/page/4/index.html","05a59cc91818e27c73248f659fde2ee2"],["/archives/2024/01/page/5/index.html","72803cfe176bb7d2d684b0562d12cd43"],["/archives/2024/02/index.html","19b0f01866790ca90c21ed0d6df99340"],["/archives/2024/03/index.html","d92f40d48e146f5049ba54f0931ee685"],["/archives/2024/05/index.html","68dbb1c2288b0a57d554e81829dce385"],["/archives/2024/06/index.html","b53b27ec98e70be3c64ff5643b053f9a"],["/archives/2024/07/index.html","a69709d46f529e019e589f5b24344a35"],["/archives/2024/08/index.html","6cca279423359b5566e215271b1544e0"],["/archives/2024/index.html","eda510f28d099f1170d6691ecbb0c511"],["/archives/2024/page/2/index.html","91e0da5be813e3f59d24bad7e30b3c1a"],["/archives/2024/page/3/index.html","6eccd4ea03db9b400da6b6b12b6a19b5"],["/archives/2024/page/4/index.html","c5db9eae11e3414f9df572b88ff9337a"],["/archives/2024/page/5/index.html","d726c4d362d24b6d51008c892c2208fa"],["/archives/2024/page/6/index.html","2c0b455f8ea655cad491252011bd999b"],["/archives/2024/page/7/index.html","84d65e02edd01f588a53e71f21f0ba11"],["/archives/2025/01/index.html","48c9d1047396184eb66655c323d60385"],["/archives/2025/01/page/2/index.html","a55cd62ac8f7db126058bfb2b6328cf0"],["/archives/2025/02/index.html","8e78fee13e6460d790229c1963c76d6d"],["/archives/2025/02/page/2/index.html","473eca32333bedc84762a7101d96d114"],["/archives/2025/03/index.html","898f954c5e897abeecdb829ff1920165"],["/archives/2025/index.html","dd5815c317fb4bd4b9ace4235b9581f4"],["/archives/2025/page/2/index.html","b81ffb2d3a8fa2c70a951c6bb970cfb1"],["/archives/2025/page/3/index.html","b335f3e2a7e25c263d0923443d0344a0"],["/archives/2025/page/4/index.html","2fc40f07b77321cd63cfe9da4ef149f3"],["/archives/index.html","8bbbc29b6b6f72f213e2d1a90960a741"],["/archives/page/10/index.html","a21b941ea3f42de458b396553a813d06"],["/archives/page/11/index.html","10cef9a6dfe09a1058a4e91afc894fd9"],["/archives/page/12/index.html","2e335a52a48ccc16bc1c140a90291fc8"],["/archives/page/2/index.html","8204731da6c581946b5f563eba36af6a"],["/archives/page/3/index.html","ce6c9706340ff9b0492794c31b1a663d"],["/archives/page/4/index.html","fb060a89e81e2a4db193d17846a9d28f"],["/archives/page/5/index.html","aa90d91c04b3e93c31df9fd9ae38d360"],["/archives/page/6/index.html","e1b7705f93e17c5a666a8ffbe1636467"],["/archives/page/7/index.html","df35d94cf9cbc56abfab034318896afe"],["/archives/page/8/index.html","1936165d0694152ac183f334a2427f56"],["/archives/page/9/index.html","44bb882277d6d163fcaecf646ea09836"],["/categories/AI/index.html","58b28348e9e8c1a51e3eb6dd51eb32e7"],["/categories/hexo/index.html","249958736cdf294c81d369e72f9df94e"],["/categories/index.html","294bc0d9a10b150faebb180c686a68e0"],["/categories/动漫推荐/index.html","c4880d340961271e04cd58be94d5982a"],["/categories/每日一练/index.html","937fe3c4259c6e0c48c716ff708bd07a"],["/categories/每日一练/page/2/index.html","79d2e4d33c68692e90a54835c59ae52c"],["/categories/知识/Typora/index.html","6d05c9ad7e222a4420f62e1562d09e5c"],["/categories/知识/index.html","63252431076d3d42302873ea407b5d0c"],["/categories/网络文学/index.html","8a28fa551927d0d2700c9f0a15efbc98"],["/categories/网络文学/page/2/index.html","fb790a75b4a376be149415da1d3408a7"],["/categories/网络文学/page/3/index.html","3c1691d7495b1649ebdfd419be879629"],["/categories/网络文学/page/4/index.html","897434ad133b64a0a4b4708df5ef465d"],["/categories/网络文学/page/5/index.html","523bacdba75f13563114234f304f2a3a"],["/categories/网络文学/page/6/index.html","45d3c4cac648fee30fd0b6faed38549c"],["/categories/网络文学/page/7/index.html","cfe842e1af436d6058f1ada463b55988"],["/categories/网络文学/page/8/index.html","2eae66dd212e1841ceb9837436b44e44"],["/categories/购物/index.html","cbf98ccbbad58087416efa8aa54e3e33"],["/categories/随笔/index.html","bcc46c402b70f968896067723b0a7fe8"],["/comments/index.html","ebba2645564cf8dbc6980de84f5e0efb"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","0ea85aa48929d8ff2a9541de898e0765"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","6ae53d258de8f1e1ee4e5bce69197ccf"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","3d0f9c3566538958680e48d66db15dba"],["/music/index.html","19ca2c7afaa50f690dd69368b391cc96"],["/page/10/index.html","a5429a8001e7a4d22657ce91f91d0a98"],["/page/11/index.html","4d026ef4420408c439ff66a24ca84d6e"],["/page/12/index.html","abcb49c0ef32b53305a410bdf26e3d53"],["/page/2/index.html","d34bd7715f142543478e0f6aca5c7af1"],["/page/3/index.html","087370cee6adf6914f4bfdf630ed0480"],["/page/4/index.html","6b0b1e1ab3e3a00da9f78b3e3736859a"],["/page/5/index.html","767795675267e60fe17007a9472d962b"],["/page/6/index.html","6852f46ff555bca04611d85284e7bad4"],["/page/7/index.html","7f14bf835ef24cfb51bc54b9efd6d3cc"],["/page/8/index.html","f60c4bf22e9c234feed87c8ec6471019"],["/page/9/index.html","2e234e2cebdd0b93cbe938aff4e8e861"],["/plan/index.html","270098c6cf034c913c500d4e797db1a7"],["/posts/0.html","89956a917f4a7cf14c08f2fe1191737d"],["/posts/10a3.html","1c1b735b204418b5a06f5cd7ba9e8a79"],["/posts/16107.html","ec991676f7741a49b1310aec28a32650"],["/posts/169f.html","8f4c3c6fcf4b54743c93c2f1f662251f"],["/posts/18df.html","e4cc49f8788695d59a124debe8d0a3ab"],["/posts/19dd.html","0669b21ccf5c5af6fb15672d8e3d7250"],["/posts/1f13.html","cd84e4996718e9b3d0b3664c316eef47"],["/posts/20040.html","0a160f47681002d3be2c78e66bd07b10"],["/posts/203c.html","ea9d15aec8f4f1986d93b5f73199b1e7"],["/posts/22034.html","d1ebc108bcdf765c4ce35b9bb5362dab"],["/posts/22f1.html","d5001c68ad7d2f06c6a59542e9b4ed45"],["/posts/23777.html","a13dcc85aa62d64835957575a6841c33"],["/posts/27400.html","2019e4c08e4dd45a3a263243800bd897"],["/posts/28045.html","6f1ef91f773dc8e7c1d78e0a02a7b6bb"],["/posts/29243.html","61ff2c3d4a487bb797aa75d9dea43f53"],["/posts/29668.html","53f7ad1e2a9b20c0b44875641c9f9900"],["/posts/29695.html","3edde1d1b51ccc79f2e3a79c0f269c74"],["/posts/2c4d.html","7495a54a9e06d2714b09a9f3a58af8a4"],["/posts/2ecd.html","465cdf6e6695d2b6c2ef152b0db3c305"],["/posts/2ff.html","e8d1e217251f3653ebdf07d0f44cae2c"],["/posts/3078.html","4aae2d39bf4a71edb491caa863588605"],["/posts/3200.html","958ec0e8f4ad668074e6ec05a998a136"],["/posts/33a9.html","86306f7dddc440ba123661f244377276"],["/posts/3417.html","e19d733e34b71f26fcb61f3d00864384"],["/posts/3429.html","dd26228328d1705d9b4ce977697f342f"],["/posts/34434.html","e1479c561f9fcd2f36e95c4d2f756ad0"],["/posts/3569.html","7bf7d4d6dd416009afdae1e78b00c4fc"],["/posts/3ee4.html","2a1d40a59662b9b277ee0ece7f9c4077"],["/posts/40776.html","bdaf2a0542f63b986b6c1dc77df57d3e"],["/posts/409d.html","8f2867aba1f37e286b74f57865466636"],["/posts/4134.html","4da69c53fac9e24466f16e975466db26"],["/posts/43378.html","9e050c58fb0c7b9ac761c81c5a8508bf"],["/posts/47e2.html","ad21e2ea5e36b4fcfff433a15483d373"],["/posts/49318.html","9ce92651968379c934d10987c914ed12"],["/posts/4c71.html","bf08a495e812e09cec3614fc97a4f8d2"],["/posts/4ff3.html","0b32bd831fb4dde3ad5f4afee84c3884"],["/posts/5068.html","f8b4d3b8806cd529d2dd8c2a52ea19c0"],["/posts/51833.html","0e47cffcd1ba33c78ef8977c1b776a2f"],["/posts/53de.html","d80139aee2545652a770457faa044612"],["/posts/57116.html","369522da3aa86ecb3cec0585de5a7d27"],["/posts/5be1.html","7ee4bf73a7618f6da78f77c69639d9cb"],["/posts/5f25.html","4b1b264e993e94be3fc0c79c1a0d37a8"],["/posts/6044.html","5b54306cb53749fe234e872a73368a61"],["/posts/62819.html","b0550e3adbda0429a91761c6be3c6811"],["/posts/6581.html","45f9bb6def315bf9a239e1f55bd8c4e8"],["/posts/6780.html","2b9c062cb19c525ac937de336384356d"],["/posts/67c.html","a8d27faabeea03202d9ab6dd10f00ae7"],["/posts/6a9d.html","ca9ac8b9e2443f69a3daea5853c0339b"],["/posts/6b6e.html","d4febfda4ff58d33821afd24574714d4"],["/posts/72ce.html","1ccdd6226612c55ef78e0dce98f91e05"],["/posts/73a2.html","5fd15b19aecc258f819e66c442736e94"],["/posts/73b7.html","42aa7d208f58b8b13d1cc5be5596a79c"],["/posts/78e8.html","9482f60f55f06d2c6888e37b1ec2fbf9"],["/posts/7967.html","35b4a2b2c66a3a6e22307ca06a8b2799"],["/posts/7a27.html","37e4aef0337c04484e82fc22c56639c1"],["/posts/7a68.html","2be8889d21087cfc67512e140ddcc5da"],["/posts/7d63.html","a32d46075e17cefec3710b6c9b0fbe96"],["/posts/7db9.html","68be4d2cdcb934e5ffad253a624dc078"],["/posts/7eb7.html","891ceaacb33045de3a03f8d318bf7496"],["/posts/7f36.html","aa4cfa70b40ff3f51ff685d8aa92ab4c"],["/posts/8192.html","af94debba3b766158c21f238b28c4984"],["/posts/83fa.html","af2c7afa1b6c8778bda26c02b24defe7"],["/posts/857e.html","2cb706b596418f77ff7fe10a3d341a71"],["/posts/8a76.html","8fe110a5bf2e45b5fa40c79df8cd53e2"],["/posts/9102.html","e3f209ffd5f40047a0c995398576d2ae"],["/posts/9241.html","c3a8f5134a078da0fb2fcb722f1e0b1f"],["/posts/952f.html","2396b7686d1aafe2181720b37845e7a8"],["/posts/969a.html","8a8a0fb0ae19ba40be9d0f5c462994d8"],["/posts/97b2.html","2fb5f77506c662ff8fdcf87a9c03c914"],["/posts/98f6.html","642189489da5cb4c8532d97df5a79067"],["/posts/999a.html","c3b5ac031253a88468436e4f970c8d22"],["/posts/99d3.html","9d8ec4eb1450f10f8c4e8bc257274252"],["/posts/9e51.html","b75122bc73c839567e5fda728ae9f324"],["/posts/9eb9.html","ff0685e1fdad1f3c4dd1782ee351ad06"],["/posts/a2b3.html","f65e5a6675d1a2baaae8256fdbe4b9df"],["/posts/a6ba.html","e20f992047167f13cf31d5eb2d36d8c2"],["/posts/ae47.html","1e0b5b2a3a081fa9b8f7b9a138820497"],["/posts/b13c.html","d7fce0413ee41bc672f0bedbb9636c37"],["/posts/b179.html","f0eda5c12e68592856901da52eac9062"],["/posts/b1ea.html","5954a35ee8936fffae10df49699a4380"],["/posts/b60.html","807d5984abaf3d55b7655cae1da4fb1d"],["/posts/b78a.html","a706c0c8a1f084da1cd9fe264444d5a9"],["/posts/bbf7.html","7f343742734f267459c2031da0d7fb8c"],["/posts/bfa4.html","1669ef5283f986b646afb3fc052ae8b6"],["/posts/c552.html","f4566b32fe55f094de05155f8ad8ed03"],["/posts/c8b9.html","c343f06077172185112773b1c2d8ffdb"],["/posts/c9af.html","04eb31cb06fbf3102566b2a53a20f159"],["/posts/ccf6.html","262adcb1fd2829b2d09d921fd0f3e915"],["/posts/ce61.html","1dc4a3b07ea9607d2b2a2a5425ae4005"],["/posts/d5d.html","03ef1b7cb08fb4bfea5c7d833eb0eb58"],["/posts/daad.html","4be4a54540e04594a00a22e6ba09807e"],["/posts/dad6.html","d4c4c8bed9cbe827b36ad6201191163d"],["/posts/db65.html","4194bc6a6517e78a6889521c710a35ed"],["/posts/dc53.html","3be30a5730385f4c059116631ef34bfa"],["/posts/dd5a.html","f687d36914afca5548eae5148040b0c4"],["/posts/e279.html","250c0d6d6eb175295d04d1da5d245295"],["/posts/e2b4.html","bccf5213920a99c4f2887fa88451bc52"],["/posts/e56d.html","caef27fd2de3146fc95c44ad65383ba3"],["/posts/e672.html","3f2a0f42c53bf4a72be7efff895c5841"],["/posts/e6e.html","43a481277c261638ffb21393eeefc49d"],["/posts/e8d2.html","aa1867cc35cde2bf1df2f7cf7a0b3a44"],["/posts/e9e4.html","97b3cd845efb972f1c503611a81d61b6"],["/posts/ec8c.html","4e26f0c0fa23d00b475c63a8b981653d"],["/posts/ee0c.html","27cce9eeca0b3a6e471ae01131ba4406"],["/posts/ee98.html","c1f3c375055ed0796fcb8f6f4b6e53b3"],["/posts/eede.html","14c9f0e292035ded1fb1caf22e82a27d"],["/posts/f85.html","25688a6e9a203efd1e7a7a37720213ab"],["/posts/fd8c.html","4f2719abaac720526f8cdd8324fbb683"],["/posts/fdf4.html","05cf0a2a27ff0c2ba5d2b577244d88af"],["/sw-register.js","5208430dae6eed2840864ad02aa34aee"],["/tags/AI绘画/index.html","85bfc8d8ecdbcb0e2e98ca116e47fe4c"],["/tags/AI软件/index.html","b5583bacfaff2bb6483dcdedc54ec083"],["/tags/OVERLORD/index.html","987fc73913ccc1cb3f59cbce18c63611"],["/tags/OVERLORD/page/2/index.html","f73fbda56997742f5716c2466772004e"],["/tags/OVERLORD/page/3/index.html","1ccff0fcedb20dcd56a51ea6325bf84d"],["/tags/OVERLORD/page/4/index.html","458ba9ac4bcb4dec03f11c4b9a0da79e"],["/tags/TYPE-MOON/index.html","e489b2d98c8793e5424699fdbcdf7cf4"],["/tags/TYPE-MOON/page/2/index.html","0c5f9dbaaffbda2c0cdb8464d9c64196"],["/tags/TYPE-MOON/page/3/index.html","62c96feb59a581e0f7c50911e8c5545b"],["/tags/Typora/index.html","43ba6e6e4c820edac09f098032efbfff"],["/tags/hexo/index.html","2fce2d0dbc058d092ae899658a28b8ab"],["/tags/index.html","aa6680f211d47c09e5111d98ed68feaf"],["/tags/live2d/index.html","7635915706f3fde0e5a0b7e2bbb059b8"],["/tags/shell/index.html","eff5a45ccd08800b3ae54c7a6df19223"],["/tags/shell/page/2/index.html","d2682f860ed97f09befa420370254a65"],["/tags/同人二创/index.html","adfe45edf01305bac8e9ed4c325b5b2b"],["/tags/小说/index.html","c98e651305863f1971721a452aaa5a2f"],["/tags/扮演/index.html","50fe861da1ff21bba225ea2a73ae2666"],["/tags/桌面运维/index.html","d2da9148565709f0f996aa01122718c4"],["/tags/知识/index.html","62bd230ce04a3907b7a1173e6b2786a1"],["/tags/知识/page/2/index.html","42a8acce91b6e7f3b7e711aabc715749"],["/tags/知识/page/3/index.html","d76d7f7904757d5379cd1d1393dfe684"],["/tags/神秘学/index.html","8af3954983bfe0ef8dd41992194ce9f0"],["/tags/老番/index.html","3136b62792ef239de34667e398003254"],["/tags/购物/index.html","65b092a6c7018bb7cec0f7f418459ad1"],["/tags/资料/index.html","4405637d525007f607b231d9b394d486"],["/tags/资源网站/index.html","5549bbef6cf2f8dc41492699457b505a"],["/tags/闲聊/index.html","dec8c0cf892aa2703a4ca4b7a19c1994"],["/tags/音乐说明/index.html","2b0b785039f80d999e0a8c6b0e2241dd"],["/website/index.html","3451492dfed87b93038486ab2e26459a"]];
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
