/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","36c29d4674207d28215dfccc8eded06e"],["/about/index.html","3feb704a86b95c080da297823cc3b955"],["/album/BH3.html","625b2a78b16d2eb8864ec4173beaa0c5"],["/album/collegiate.html","41210346c8e932d2dadfcbfb86127ba2"],["/album/index.html","434f4475c20f4c2ebf59565c8a67c6d8"],["/archives/2023/12/index.html","2351c3ba455057fa57dcbd690aed6d97"],["/archives/2023/index.html","d64921b0572a4a690cd5bb39d67c62e1"],["/archives/2024/01/index.html","97c534799f831ea284aa74e9e8706373"],["/archives/2024/01/page/2/index.html","14fd9c5184d95229464c86e0f0a62023"],["/archives/2024/01/page/3/index.html","7c4289bb0c0d32b17b36d001ac1b0ac9"],["/archives/2024/01/page/4/index.html","ee2f0be1ca33bdc2b6257072397a9ec8"],["/archives/2024/01/page/5/index.html","b71cf9543874ee2e6ebbdf4ab300002f"],["/archives/2024/02/index.html","bccf3e65f50b507d185703b657340d95"],["/archives/2024/03/index.html","dc82a99ecace8637e3d8143bfd787b6a"],["/archives/2024/05/index.html","5b6def1ed8e2771a73de1243c5c62303"],["/archives/2024/06/index.html","a5c02bcfc34c32d0cfeacc4b6b0e65ef"],["/archives/2024/07/index.html","91f9cbb19d7e58c51521ab46309d33e7"],["/archives/2024/08/index.html","20383a5244053e2f6337cbf16c4deb4a"],["/archives/2024/index.html","1706e6a39cabf6a41b5fffc1ba9f8f67"],["/archives/2024/page/2/index.html","a78ee727631a5752c8ba534a87fb75fa"],["/archives/2024/page/3/index.html","3b154f9b8311fb21234fd1411e535f54"],["/archives/2024/page/4/index.html","a87b182cfba4434e20e547ad3fd84879"],["/archives/2024/page/5/index.html","3e3883b19831b82342365201ae06404e"],["/archives/2024/page/6/index.html","1efef6b4ce8af86b5c68b6103c8c09d8"],["/archives/2024/page/7/index.html","9a617c4a7c56fb2d76b8131336708a48"],["/archives/2025/01/index.html","1f6b2ac67f95053abf9bd8714c4d9665"],["/archives/2025/01/page/2/index.html","5b2b7b2c60af0e02163ce39bb7877358"],["/archives/2025/02/index.html","03735a8b05daa0b8758e43e26300ac68"],["/archives/2025/02/page/2/index.html","80b358c80df1113808767bf146694ae0"],["/archives/2025/03/index.html","19d14ccf028734962f9b81087e0b4712"],["/archives/2025/index.html","c8ce6dea3da6aa02003f86db15bf4614"],["/archives/2025/page/2/index.html","ceee0c5b238d79280b44e4cca2d1c192"],["/archives/2025/page/3/index.html","f80c457f40796655d8356f23e02a497b"],["/archives/2025/page/4/index.html","42077b4c793cd5b9a626e7e82825c3e0"],["/archives/index.html","8a025ff87bb7137ce9eb791bcf7da902"],["/archives/page/10/index.html","b475ba2ecdfb96e6051b943a018b94f2"],["/archives/page/11/index.html","232bb081a54a957bbe5cd32019e18903"],["/archives/page/12/index.html","a56e7b310e82d082c061e4b9a0049b58"],["/archives/page/2/index.html","6d237634db393c0db36e5b99ac7341e5"],["/archives/page/3/index.html","d0d93d904237125c39a83062bc719cef"],["/archives/page/4/index.html","e456041e02d63e12c4a1e8c3ba2e1c46"],["/archives/page/5/index.html","29a056941f6ce8a30c79534320a53a35"],["/archives/page/6/index.html","852b348202c054893115a850eb929d9b"],["/archives/page/7/index.html","636edc36b0bd5378c0b616135748e6a6"],["/archives/page/8/index.html","edf075068a067be20ec4683fee1fd74f"],["/archives/page/9/index.html","43153ce2fdfb6dcb964d5d18b119c01a"],["/categories/AI/index.html","4a89d243717264ecfe2adf1d176efce7"],["/categories/hexo/index.html","38ba6d7ad37308828f73c5be8e6529da"],["/categories/index.html","1bd6ddab8a854999c69bafba16cf2203"],["/categories/动漫推荐/index.html","ba93b561ab77af84a3dba6a78bfd9a8b"],["/categories/每日一练/index.html","374179614edba22dd8ba294038f9b8b8"],["/categories/每日一练/page/2/index.html","446ad71b625a728dfb52818be193e458"],["/categories/知识/Typora/index.html","c50ee96cc40f0adadac7d3d6d9036095"],["/categories/知识/index.html","309bff2d77e60da91f28029add54a28e"],["/categories/网络文学/index.html","28b7edd60e82db8e354958dab773cf6b"],["/categories/网络文学/page/2/index.html","e387bb6cd858d0820218d6eea95f1b61"],["/categories/网络文学/page/3/index.html","ca311c3dddcc73763fee0d56aac9797c"],["/categories/网络文学/page/4/index.html","f530164075b6d66b88ee48282d91779f"],["/categories/网络文学/page/5/index.html","0d12e419af4665a18becccea43ebd7d4"],["/categories/网络文学/page/6/index.html","f0dc3aa90e5e7628afd0eeb35a1af0a8"],["/categories/网络文学/page/7/index.html","6194a07347aa961e9c399613cc061e85"],["/categories/网络文学/page/8/index.html","67e6b8a691c6765a6e6ef419dfe7f3d0"],["/categories/购物/index.html","a335ac9345ef34bf0b3da1aa26f885d0"],["/categories/随笔/index.html","fba7374bbf37f98e332ba5345c2dbb14"],["/comments/index.html","523107d3dfc272275c9873b548f20d0a"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","7ada2067b9786d0d4ae9954402e7946f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","3618bf113da9e59ceaad8b875f38f807"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","23feb27dbfb4a16cef7b8538a84435cf"],["/music/index.html","9715adfd68b191069a627240c712dfb9"],["/page/10/index.html","ecd79f997a475355b044002b60bcb1f4"],["/page/11/index.html","fbb9aa572544811a3cff25966bfa4152"],["/page/12/index.html","64a43e12fdeb9becdac4969c6bda31a1"],["/page/2/index.html","cd985abc556565625322502d9461343d"],["/page/3/index.html","d9ce41ac0f4b84edbe6d00d8bb37d92b"],["/page/4/index.html","dbad1637c55195f37fa44d165cbc9793"],["/page/5/index.html","bacc37936b19dd3fac90f54fa275d89a"],["/page/6/index.html","46d8cacb2fcd7f2fdc12788fcc3259ca"],["/page/7/index.html","6841337955442bd3f78dcd7f72beffe0"],["/page/8/index.html","83cca2175a9f186381fe074e0a2cf122"],["/page/9/index.html","236428887efaca63ad442688d12d84d7"],["/plan/index.html","06d6eb99303b9d743d27f76d8f479164"],["/posts/0.html","f8803b6bb57caf75311f079ce8c6a45c"],["/posts/10a3.html","5b6aa49256601344c2387763372d6d18"],["/posts/16107.html","86a2b2fc3917287b7a5eb6d7ab9406da"],["/posts/169f.html","130f1111248570df090f81493d5abc99"],["/posts/18df.html","188ec9e1ace8c21ae00529e14952eca6"],["/posts/19dd.html","524fec7c36fe5c480e0cf4db1427b978"],["/posts/1f13.html","3099a1481209c1cec29250280edbe679"],["/posts/20040.html","b56531506d742f7814a351c7dad79081"],["/posts/203c.html","ae282ec403a55a468210a909ba359571"],["/posts/22034.html","02776af54a04d7fa3fcab69cbd6f8822"],["/posts/22f1.html","e77bd27b9db554bbf1763c5adba4777f"],["/posts/23777.html","08939b8c94b19bddbb2dd8bf33b3dda1"],["/posts/27400.html","6838907068f5abc549c909fa100d3629"],["/posts/28045.html","511fb74b67e018ff0f39fd8e337ecd7b"],["/posts/29243.html","88116ac5b6032b99b321d600d68ad62f"],["/posts/29668.html","ffcd1278df1f86d5a9d9072437dd8328"],["/posts/29695.html","18feb75db2af04cd8e71d46bfb427719"],["/posts/2c4d.html","a730f02fadcabce9b658695a46ffa464"],["/posts/2ecd.html","3bf8870ddf6e4d5092d45ebe85a3caa2"],["/posts/2ff.html","d260c52b4fed1a81aeb853cd71071b38"],["/posts/3078.html","761365c0dbdbc68d34e789470fcbe8d9"],["/posts/3200.html","8085f4c1c24badbab35f1b81614f6996"],["/posts/33a9.html","a6d913db5bc6e12ff26fc0030e3d05d5"],["/posts/3417.html","80851cdcd645f7b41b93bb4ab7186872"],["/posts/3429.html","241ff5655758447d70d89e23fcbf1a08"],["/posts/34434.html","cb93eb516e29bb4b67a620bf060def5d"],["/posts/3569.html","79b41dd09810eb1ec57a6bbff39c77c2"],["/posts/3ee4.html","b019e1f6f23452bcd6389b1b8160bec2"],["/posts/40776.html","c6ea0253a389f414cc23b5d4eafab3c4"],["/posts/409d.html","bc3d1cd429407a5492f85d2a8798a153"],["/posts/4134.html","f749fe91b225301491764ac91a570692"],["/posts/43378.html","08a54f45ce333d4d619639dcb341e94c"],["/posts/47e2.html","2dfe2d5a2e136dde19552aeaca07f34e"],["/posts/49318.html","0fb0492d00d6c5b3361c7d3c3bee7208"],["/posts/4c71.html","79402cf195e69c6c2d8615a8d67c5b81"],["/posts/4ff3.html","8659354bfd0caf770a11eb1469af0c37"],["/posts/5068.html","a221297d06b1e20cada27aba8db8a25f"],["/posts/51833.html","6c60702d02b30af32193ebdc698efe0e"],["/posts/53de.html","fd3a6d65c36dbdc5ca290e3834154c31"],["/posts/57116.html","e3cd8e9ee31fef6d5941303cc519b13b"],["/posts/5be1.html","3e6d750982579ab67ea2a5c70a041526"],["/posts/5f25.html","407e7e582c96cee0ac30b8ab4c1e7bf7"],["/posts/6044.html","06c061b01ae95eae6dae460b78f0d2c0"],["/posts/62819.html","afdd7bcbef6dd01530f814dd0928331f"],["/posts/6581.html","7d80a669c8868a807d52f4f6827a244f"],["/posts/6780.html","d1212e0dd50577513631942cb8810ebe"],["/posts/67c.html","bf1615493814b00faf05bf4c9b3106d7"],["/posts/6a9d.html","f7ddd21e1f953c78e4c4e4ca65e07f9b"],["/posts/6b6e.html","0d111a504865ad7f926d6f6780d1522e"],["/posts/72ce.html","65828d47c9a65521d553d527ae7f3634"],["/posts/73a2.html","478e2a1696d1bf13594d277efee4375f"],["/posts/73b7.html","616f6c160f2d1ab18ade91a82ba856dc"],["/posts/78e8.html","a81f39b6be5c5365bada77cbf057e52d"],["/posts/7967.html","76034d9dd95ef01c170b72a5a302570d"],["/posts/7a27.html","4d743d599474d3f4b55485a2a509125d"],["/posts/7a68.html","540c9577048f60f9e4f7c2260f800148"],["/posts/7d63.html","5421fe4838b1bdb5c9c915a079e47dde"],["/posts/7db9.html","48f3482ece1a59dc0b02816e57e8f263"],["/posts/7eb7.html","a323a0e3602e7011ba72ef701182cfaa"],["/posts/7f36.html","dc87c1c009b5ed1be6c549c25191cd57"],["/posts/8192.html","18cbb07c78164b1e39798f91a46c2ca2"],["/posts/83fa.html","f9bfb2fd79944fbc6f954b65f1586c40"],["/posts/857e.html","9c5d057e8842f53ac6af3d73fb4642cb"],["/posts/8a76.html","28c3912190a9b8eae47f567664d2be80"],["/posts/9102.html","1c8120c06fea44b0369813b6f6a13b6d"],["/posts/9241.html","593483357b0002298e6a78e540eefe4e"],["/posts/952f.html","0b97123276f2be600bff81292ba0899e"],["/posts/969a.html","ba7af7982b18d2611125b92e09885c38"],["/posts/97b2.html","a3cf6c16e8819cc6a1b8ebb2d105ae5b"],["/posts/98f6.html","1591e394a312acea1024f584b6234ec4"],["/posts/999a.html","113c3979ffd9413d9347c4cc144e2382"],["/posts/99d3.html","ea6cf1a51226332feb639f54b7613f7d"],["/posts/9e51.html","2ccf2c6d3f46d1636562ddac7bee83f8"],["/posts/9eb9.html","06ff7d3dc477f8a10018836afd8a7d5e"],["/posts/a2b3.html","351a3ae9afd06eb090122445f1f94b40"],["/posts/a6ba.html","14c5376d3810961af937949cf2a8f409"],["/posts/ae47.html","e64dd19e1c85da46c5bb5914e0fbcbf6"],["/posts/b13c.html","fdb5df87333b21647703746d67d6abcf"],["/posts/b179.html","ffe1f7f24591308a0c5b326e6a4bafff"],["/posts/b1ea.html","2d86169f9bdc3f9344c6d0af59136ea7"],["/posts/b60.html","a4d43e6614b005ba58d12e9c624a810f"],["/posts/b78a.html","801e53bdf85284988e51c569b7d90ea1"],["/posts/bbf7.html","a35772dba9ffea64feabc3d2017dd868"],["/posts/bfa4.html","0bc86a646a1e52e77e867ea6c4c97b2d"],["/posts/c552.html","14f3cf1149b3131004e03e364ed18157"],["/posts/c8b9.html","e8d0caaf3aacf508120de9471f9610e9"],["/posts/c9af.html","cba1a40eb6b8ed0ad3e99e683d6bdeef"],["/posts/ccf6.html","5b5cb09b4b5397321f615e89bc8fadc9"],["/posts/ce61.html","40acf15140a8c1f20dc676cd8a42eda8"],["/posts/d5d.html","8a565d68dabf05a85fc699da19c9ebfa"],["/posts/daad.html","cdb88d333cbda4fe1b97a93847617bec"],["/posts/dad6.html","9fc91a66157dc88c4a960e42958724e0"],["/posts/db65.html","7135c992cc7d2d3b76a94988cc734ff1"],["/posts/dc53.html","6191a1ed55708f597450cbfbdac94c72"],["/posts/dd5a.html","f86a7ff15c8e0389fa0e020639fec57b"],["/posts/e279.html","425292a0093ba2094bf0858c5ee8a366"],["/posts/e2b4.html","087835a181bd17e7f996331a553b8390"],["/posts/e56d.html","c58965148755bc55c2e6da7668ca2715"],["/posts/e672.html","024f713a3e5e335050781d3e0fb7c5d7"],["/posts/e6e.html","07be1cfe800548c0bf07f90f7701dff7"],["/posts/e8d2.html","e7e4e0c4ce7cfd1abda251276a222cd6"],["/posts/e9e4.html","d6482f95dbbfcfac7723219e2320e341"],["/posts/ec8c.html","f2a486af7d31a0d29e05e2df8fe20e84"],["/posts/ee0c.html","7ee215b718b9699d020a03c66b7de768"],["/posts/ee98.html","65fa2bd7ddbe69ec81ea5ddef3eae866"],["/posts/eede.html","c4e40781593d237312cbce97d68ca8f0"],["/posts/f85.html","14744e21542ceb9bc7e2ab095c56e628"],["/posts/fd8c.html","a8bd53747c8d1537a6c0c9122d03f9e4"],["/posts/fdf4.html","50cffb85fdbbcca808a9d0f8658defc6"],["/sw-register.js","332ac00b678a8c97ddf59026e0d9ab2b"],["/tags/AI绘画/index.html","5ebc2761a2fab36613cc8b53a6dbb396"],["/tags/AI软件/index.html","ad0bca5c79565f9ea332d934fda42abe"],["/tags/OVERLORD/index.html","f4ad1bf81300a4b5e4ee71f36150f427"],["/tags/OVERLORD/page/2/index.html","90a1f679d5b77eb1dba3b1137f79b6af"],["/tags/OVERLORD/page/3/index.html","b74cc43f19e547b067fcaccd1b3d3a60"],["/tags/OVERLORD/page/4/index.html","0c28808c01ac605b0ad1524a2f52cf94"],["/tags/TYPE-MOON/index.html","12707e72db68703cca555c3b2bf1cbfd"],["/tags/TYPE-MOON/page/2/index.html","f012be8177b724bb1c29100e5a986151"],["/tags/TYPE-MOON/page/3/index.html","b2fbcb8c12128b5948777b5b10a0aa88"],["/tags/Typora/index.html","b8168a97a2f19b5454ebea6add5ac9a3"],["/tags/hexo/index.html","da3799c33d6a65dd9067d8a1e68c0b27"],["/tags/index.html","50e3fa72aa003faa51f4093e67e5d01a"],["/tags/live2d/index.html","82978264128e6d5644e161cccd17e1ce"],["/tags/shell/index.html","6e07551db34455ba771339577159d0cd"],["/tags/shell/page/2/index.html","f597ed4e12158aa719d7346c5a496477"],["/tags/同人二创/index.html","1e56c190e4230a515befe4ae1faefff3"],["/tags/小说/index.html","1452b2c49edaf6e2505c03c26ff6143f"],["/tags/扮演/index.html","5e30b2f049fbb489657490c8af486cb7"],["/tags/桌面运维/index.html","89ba90e4590b1bfe5dae11feb23936a3"],["/tags/知识/index.html","33a47fb87661396c914305425813784c"],["/tags/知识/page/2/index.html","0d88aeb41915325d6355f3f494a2177e"],["/tags/知识/page/3/index.html","747d4ddb3eedebd6527606fc558bc5e9"],["/tags/神秘学/index.html","acc83dfa25b65e92f502ebbaf79ccb89"],["/tags/老番/index.html","dba5071daee604369bb20d18598d609f"],["/tags/购物/index.html","cd2d6c995bdcf9ef191dff6f596cbf20"],["/tags/资料/index.html","fe9d228f20ad74f84ecc5fa5c5ac8c5f"],["/tags/资源网站/index.html","351c406219f448b0e74533bbffeab6c6"],["/tags/闲聊/index.html","64fe6f55e17d9804d8f766dee6597caf"],["/tags/音乐说明/index.html","5c3f9fff505bb9b418d17d6a30fce5b5"],["/website/index.html","4a220370d52509ccbcc1d90c512da9aa"]];
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
