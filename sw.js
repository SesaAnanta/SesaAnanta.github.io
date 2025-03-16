/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5f6f2025b83c399e8ec16e28469d65b5"],["/about/index.html","9d2072de6ec9a7e17f25ab427702f798"],["/album/BH3.html","a35d8377160fb85ff19ba032b5451574"],["/album/collegiate.html","5499101c9a7e865b41872d3fc9fdfd70"],["/album/index.html","ee3fd2d5e9e321f550fda25f9f40866f"],["/archives/2023/12/index.html","ce7a06e177c2361f3ff017cd2698a6aa"],["/archives/2023/index.html","cd93675bdb3b8d4da510f1cca2f0e559"],["/archives/2024/01/index.html","24268985d01acaf015aacd59418ae6a5"],["/archives/2024/01/page/2/index.html","bb404bd31f3777496fc9961b9d5a9555"],["/archives/2024/01/page/3/index.html","450bf9f54ec2405dd58576f59679ea01"],["/archives/2024/01/page/4/index.html","0b5615d88ebbd8b24c974faff253f0a6"],["/archives/2024/01/page/5/index.html","3c790d95af87d3e691ce520a29ac9f7b"],["/archives/2024/02/index.html","f6152a3284a95da6b60d7a2032f9b27d"],["/archives/2024/03/index.html","ccb83e51168fc196421176373254e327"],["/archives/2024/05/index.html","9ae6ca29366f398895d75881327cb4e7"],["/archives/2024/06/index.html","2ca006206d91e2fd9416c51bb48fb668"],["/archives/2024/07/index.html","711180057a0f2c011b57a372aac8c883"],["/archives/2024/08/index.html","c4adbf0be18b67769dc3861d21f760f0"],["/archives/2024/index.html","b7430c14f7950a0a6214a1f80fd045cd"],["/archives/2024/page/2/index.html","4abf6d8bd02b72e2a22a01e5366a1354"],["/archives/2024/page/3/index.html","2c61dff694c53c12a83f30387ddcbd41"],["/archives/2024/page/4/index.html","ffe9a4d5748a1250109643bb554a119a"],["/archives/2024/page/5/index.html","fccd237792e4eca3b7980213d57ce75f"],["/archives/2024/page/6/index.html","62fddcd8219796260a052eb61a5ebeda"],["/archives/2024/page/7/index.html","581f68fd2d0560404d3e033ffbba4ee8"],["/archives/2025/01/index.html","fc02850025af7d90485432d40235f0fd"],["/archives/2025/01/page/2/index.html","d85a90d04395971bbbc7eab23eb15db2"],["/archives/2025/02/index.html","f78c8fee00ee4aee3b704b15d2b4f1f8"],["/archives/2025/02/page/2/index.html","3cc10bc410e4f7f3468680b0881b662b"],["/archives/2025/03/index.html","c6b2a79edde426c2addc1c17885a042a"],["/archives/2025/index.html","d4bd1a4a5e6c1eca6fb4d0143872f36f"],["/archives/2025/page/2/index.html","0d62649c18f7093b9ad243592cea8d62"],["/archives/2025/page/3/index.html","eb6894b51830a7aecd5d71a263dbfa9d"],["/archives/2025/page/4/index.html","cab3f69a5bbe62fb814b8ac6bee0be36"],["/archives/index.html","c826cd9d7aa64b7f640845fb786f7cd4"],["/archives/page/10/index.html","b177243d06d5252a1e1ed80f691df8e3"],["/archives/page/11/index.html","4933caf8b2592dccc0ecec05efb040bf"],["/archives/page/2/index.html","33a7c2fd2fc4cd0624feda0497fe5741"],["/archives/page/3/index.html","063c59308bec4be4d34760be3c0aa930"],["/archives/page/4/index.html","3de181e07a7477b0def710279f8394cb"],["/archives/page/5/index.html","bee10566871a901599bdee271f55da9d"],["/archives/page/6/index.html","8fcd53cfad79a58402cb4a7e5a013d3a"],["/archives/page/7/index.html","373b8233a0c3b41d3725c0e4f0dff619"],["/archives/page/8/index.html","f02b76516b0f1bfc85efc01f1477cda3"],["/archives/page/9/index.html","eb4dcf8800a598ff3b60588fba47d912"],["/categories/AI/index.html","97ac8ed2934b5ab0ec89a72033a4cff0"],["/categories/hexo/index.html","a0e71f58d9f1ba0275a63fc01a0570ee"],["/categories/index.html","ee293ace15c536145ffea7bfd2a468fe"],["/categories/动漫推荐/index.html","2c9eed63b2a9b773f6d9ba7e346b27d2"],["/categories/每日一练/index.html","5941a395fa8abe7ab19b14fa36de422e"],["/categories/每日一练/page/2/index.html","b05a8676f636deb2d9bb9c0486918859"],["/categories/知识/Typora/index.html","a72a351c57e8d870ea0d964e279bd06e"],["/categories/知识/index.html","7c7e1071be40ef5772a018860f841eca"],["/categories/网络文学/index.html","8f0a3c467d088457ad0691b197888c25"],["/categories/网络文学/page/2/index.html","5fe182bfc3e2b3914dbd0525cd91fe64"],["/categories/网络文学/page/3/index.html","d2395de144c18c7217c95659fd18293b"],["/categories/网络文学/page/4/index.html","e04a5647184c704a08cb9b4b122698cb"],["/categories/网络文学/page/5/index.html","e7eab6c55077dfd52015a415828bb4ba"],["/categories/网络文学/page/6/index.html","66051865f933f19f300e1ac8d44beedc"],["/categories/网络文学/page/7/index.html","c4ffac96643ce62eab9ba54e4d3d347e"],["/categories/购物/index.html","0b54c6e51ed7127b02b8c6becc59a22d"],["/categories/随笔/index.html","16b903774770a673dd20eecbef89f40b"],["/comments/index.html","835d9f25e48f3fc874a3f10236f33350"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","7dd2dd9a73b1f50487f341d5351a4fdd"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","84818c87d478afd1f78cc6de303c3812"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","baed85d91e7e84a108eacd9305f886d5"],["/music/index.html","e25285871d98f6e6024abdf6bc914722"],["/page/10/index.html","65bb5459122d63f75cd6f0beaf2432ff"],["/page/11/index.html","8ddd480352df658dfa7a7abb474f0b77"],["/page/2/index.html","5d27cc85442cc9c641bbe30fa18c8db4"],["/page/3/index.html","c8f7313e7ba3f96d52ecfeb5af971141"],["/page/4/index.html","9670fae25063f168880e224cbf07ff58"],["/page/5/index.html","ed15e2dd6505dd74f2c91c802200a62d"],["/page/6/index.html","de70248ffacdce9fdc9179e96e721df7"],["/page/7/index.html","0060132cfb21681433bb5eeb20caa999"],["/page/8/index.html","6f758ff074f9467aab4a35e02a633ee5"],["/page/9/index.html","542828164ea661389d574726efe135ab"],["/plan/index.html","9bb6ee8637b184b8ca3c41fbfb184d41"],["/posts/0.html","e230fe6ff1f52d42ca4d1b02de1c236b"],["/posts/10a3.html","fd92e8fb3a9e615bdb9e51ecbecada6b"],["/posts/16107.html","0db99d623bd44748997e55ed5595d6ae"],["/posts/169f.html","0f8abd853adb300b4b76cc676c3d5d2b"],["/posts/18df.html","2e7ee6488b7c72c3f29b28bcc1841202"],["/posts/19dd.html","45aff2eba6bc61a4769ba74d70b4f3da"],["/posts/1f13.html","cb2ad95abba0d66b46e70ec99cb07931"],["/posts/20040.html","9c4a6dc0eb844f5aa3c3e23f42197d1c"],["/posts/203c.html","28cbc5bdf0f5bfec85060e22ceef5fec"],["/posts/22034.html","80ce94793e96320a39deb1d5a2461e75"],["/posts/22f1.html","8b5efb63de094639132c4230e1cbc6ea"],["/posts/23777.html","38ade28d28d13bf37008cb85892ab168"],["/posts/27400.html","e5a7848e630a2a39c9a624e7569f0967"],["/posts/28045.html","c7c4733d6b6bd77ac23eaa52617bceee"],["/posts/29243.html","54d4b272dcf0ba2193dda6f95357cea2"],["/posts/29668.html","0d725b0e0413eec027901cf6e5463ed6"],["/posts/29695.html","d4bb33881d5fbe4204134cb0213dda00"],["/posts/2c4d.html","4732bb11e0a16173b8283dfdaad1dfbd"],["/posts/2ecd.html","5fdd4e7103b76c79ea49aead821a6d02"],["/posts/2ff.html","c24bc0f8aa24320c0dd42d604e6b0453"],["/posts/3078.html","8937c3a46115847f02b693cf0170c2d6"],["/posts/3200.html","360906e3bf3da2d372dea2dced9c748b"],["/posts/33a9.html","66a659655a6554874a2afd78280a315d"],["/posts/3417.html","a031c9c693bf9d45776c70d09ec01092"],["/posts/3429.html","fbbe17dbd3bf9d1a2aa258db08374dc9"],["/posts/34434.html","40547ca7a09680c96afcc33f2e618629"],["/posts/3569.html","c29328a3b8abae1058a1b57b26d90f53"],["/posts/3ee4.html","2f048f90dbd8f647af0612826f617971"],["/posts/40776.html","bcbba74b9a5240ff33cbd083e1bd496d"],["/posts/409d.html","1308d772f6e7a67b0ed0019caf2bb8bc"],["/posts/4134.html","ecd8d660f91cd8d8000cf3b832bace8f"],["/posts/43378.html","f7a128471c44ee8fd7dd927f68604a49"],["/posts/47e2.html","7abcfbd70e80717a3eb77a0d4bc295ee"],["/posts/49318.html","e9788ab37356505c719976ab71d6efab"],["/posts/4c71.html","986dc036412d9ddf7598b3b85afa7783"],["/posts/4ff3.html","19608cbfdd34e5583c614e97ad0b49b1"],["/posts/5068.html","a4636404f111395d89839f304799ffdf"],["/posts/51833.html","9e93f0923a2b0db59c881069458ae113"],["/posts/53de.html","e5adc789421670629e18321ca3118e9e"],["/posts/57116.html","4b92a76a4a949fb54808155393c0c373"],["/posts/5be1.html","bc71b2e71f1e5a46eff8e7fe65dfb292"],["/posts/5f25.html","9dc7196771b56582a3ce39520273108d"],["/posts/6044.html","e92b2a6fc9859ad7be8843f80f9ce7fa"],["/posts/62819.html","ae61cfc21a119cb1aabed355456879cc"],["/posts/6581.html","6c9c04f7badca98e261e81ec0019c84d"],["/posts/6780.html","1ccb16b83f9a704af1d091d331c79717"],["/posts/67c.html","0fbfdd81481cf72c1ff1e636f9243e55"],["/posts/6a9d.html","bf24eb54dfe0662377df0f466ec11d74"],["/posts/6b6e.html","a0513ccd87434ee13e832ded05d598c7"],["/posts/72ce.html","a1fbae9466d97c91f1181a8dc8081faa"],["/posts/73a2.html","e2b1d9383bcf5b84ad1a401c763573e0"],["/posts/73b7.html","a637823b2862f6f52d3aa2b7948d841b"],["/posts/78e8.html","5c0240154d351b33c20179d9672d9ebf"],["/posts/7967.html","853e72eb6b9b29a52446481fb95177a3"],["/posts/7a27.html","47186dbeda6a1112a0edd6c7d4a2937c"],["/posts/7a68.html","93199837e74d5fbb14d1c50f7a8d8efe"],["/posts/7d63.html","cad2d5c2798e3da337295224058258e3"],["/posts/7db9.html","f4921e9d6b97700707ca0ec9924c8697"],["/posts/7eb7.html","fe51adfc2234ee26667ee825292da600"],["/posts/7f36.html","ec89a013fca0047201f4a3188de90bee"],["/posts/8192.html","8714ee3cc045b1d6d00a7f81d721bc2b"],["/posts/83fa.html","32bc87a4ce08c35a3450fc6e32f9f720"],["/posts/857e.html","a784e73d55ac2489048e0e97ef65f303"],["/posts/8a76.html","8e1790962e97531a3e235a59978b3abc"],["/posts/9102.html","8d569cd2afcdb3028b1351da152a5e0c"],["/posts/9241.html","32b247012c4fe39e9c4db2fd4b1304fe"],["/posts/952f.html","ee79b0f49813b459e09e7f1a0cd26c25"],["/posts/969a.html","63915e8405b079a175516701b38291cb"],["/posts/97b2.html","375af1a394aa8a89fd82c0178060afaa"],["/posts/98f6.html","82e4a372b68e9f8ce4b9a7ef6623e5da"],["/posts/999a.html","663d5742751dbedd2046610248f2e417"],["/posts/99d3.html","fd5af93caeeaecbe2688c2be7f2a3384"],["/posts/9e51.html","391f678088253841aa668cf16ecb0f58"],["/posts/9eb9.html","97bddcc1fa11de7ba6bece412574fab2"],["/posts/a2b3.html","544c05b4789679165b61ef6a6541722e"],["/posts/a6ba.html","c7ff22a41d0acc095f49d91f367d29ff"],["/posts/ae47.html","88b062e1851f516ddefb1cab47e0c622"],["/posts/b13c.html","50af3c73f661693d8ac33f49acc512e8"],["/posts/b179.html","a3425616190361b7d13beae7627e2f25"],["/posts/b1ea.html","19d17e8948218e32cf76d3197117463e"],["/posts/b60.html","623f6c59200b417919c65b6c42d323f2"],["/posts/b78a.html","0d45d60f54db2c16df546ee801913830"],["/posts/bbf7.html","6075de160923727bc38f41f091a73345"],["/posts/bfa4.html","62d9d58bf7add28296ada86b2a592d36"],["/posts/c8b9.html","fa62ea30d890e58a8e639cfeef3ec6a4"],["/posts/c9af.html","83d7149b90f25e43be504c3e3ab5671d"],["/posts/ccf6.html","61811010ee640923912a1a9d7fced716"],["/posts/ce61.html","ff77259551aa6eb8e580007fb9a075a1"],["/posts/d5d.html","b8e324cb368cc0b4a0d57ccfe181edeb"],["/posts/daad.html","ef02afd392215d25080e7c4dc335222d"],["/posts/dad6.html","cda60cd08185c772e4b2d24e5580fde5"],["/posts/db65.html","3ace8782b0da955dd9e67413107e426a"],["/posts/dc53.html","17ba023b7b2d3df7a126bf3ed620434b"],["/posts/dd5a.html","0e6db5fa9630b7c46c765ced9e8c4fb1"],["/posts/e279.html","6f1a5863d20a08d1d860cdcf9b2205de"],["/posts/e2b4.html","545c9db57d6154a0de427a195cb873c4"],["/posts/e56d.html","35641a1cf206bd51dcd12626101e63ed"],["/posts/e672.html","719e49d5032addf5674ad1b03784856f"],["/posts/e6e.html","5a011b419363f68ee1143464d00eaff9"],["/posts/e8d2.html","f961ab0d9b6fca7bdf9a5a8114aaef13"],["/posts/e9e4.html","b0f24da8f4deae50d8946b359d5dbfc1"],["/posts/ec8c.html","41aacd158cec8f22045977e4a7920c46"],["/posts/ee0c.html","456e2fad0935a9fbb95fad2d60bd25ae"],["/posts/ee98.html","f2ea81c2ea9646e0fa469808e53c0a9a"],["/posts/eede.html","f0a6da010c962fa84f0684c35e63e5ca"],["/posts/f85.html","13f1c07a78147ec378608d3a9d709f83"],["/posts/fd8c.html","9f80808c6261d7a1ff4502c8e1f4cac4"],["/posts/fdf4.html","2c51ea70663a5c5c36e1fba9a926695a"],["/sw-register.js","3e1e11ae97026c6cc32830e4d6b37ef4"],["/tags/AI绘画/index.html","db9cf29c2028548dfa704ae66a834d83"],["/tags/AI软件/index.html","36f5eac16de0bf999361f86f016e9fec"],["/tags/OVERLORD/index.html","7d9ec34835183bcd459b25fd8cf7529e"],["/tags/OVERLORD/page/2/index.html","525fbb08889b8cb4455f60685b5aae2f"],["/tags/OVERLORD/page/3/index.html","b8618cefefa3e46dc2dfad7a04af6184"],["/tags/OVERLORD/page/4/index.html","9ec9804f9a18a6450691e22dd8516f58"],["/tags/TYPE-MOON/index.html","2a0097c5cbc40e71405815a6dfd8f830"],["/tags/TYPE-MOON/page/2/index.html","1f63b2a468fa5aff354045ea07a88c06"],["/tags/TYPE-MOON/page/3/index.html","be0459e1bd55ccebbed85e3cfd5eda7d"],["/tags/Typora/index.html","032492138b75bf5e9141fc674aacf6ed"],["/tags/hexo/index.html","d3cd96d2c64ab579aae2e6f05a77d54e"],["/tags/index.html","0774cc8f3b219b62a40aff91d697515b"],["/tags/live2d/index.html","5ae7ca86160bf1bc4e760e75781978e4"],["/tags/shell/index.html","7f3ce2bb46dfda7a7291121521b676f6"],["/tags/shell/page/2/index.html","8d33ddf8c262901125d7a6f3e3bf31b4"],["/tags/同人二创/index.html","75d226c48370bde3fa6c495c7c780ef7"],["/tags/小说/index.html","f0f5e2dbe8aeb489bdec356e9f92c584"],["/tags/扮演/index.html","f72bbc140ff3914e7b1e9ebe1ed7a519"],["/tags/桌面运维/index.html","3b422afef78927ffb23df4e71bc53d06"],["/tags/知识/index.html","955a1c338308b1766f632763531d02f9"],["/tags/知识/page/2/index.html","5035ae9207126dae82c57b42d5f1d379"],["/tags/知识/page/3/index.html","acf33bc611f39c6f777c4990956d765f"],["/tags/神秘学/index.html","1b0ef058396952afc584a02f03907c8b"],["/tags/老番/index.html","bda3c27467f2686e1a25babfcdb3da7e"],["/tags/购物/index.html","e07f8cfaa8cbf1fd522696d6f1b83ce5"],["/tags/资料/index.html","29a59c89dba46df182fde71ca6ef120b"],["/tags/资源网站/index.html","642aeb547aa101efa42be19ec8299743"],["/tags/闲聊/index.html","12e135f0225a9cc3de1e532c6684bd3a"],["/tags/音乐说明/index.html","d22e7dd619e79c7b6f9715da6db8923b"],["/website/index.html","03306f5779959c676c91642bf7f3f6b9"]];
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
