/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5e70f42ae1fd897027afeca45e7396e3"],["/about/index.html","72bd93e5992fb6de3ce614e61f310a4e"],["/album/BH3.html","5a4c875b9bd9d166418e6f2472db9ece"],["/album/collegiate.html","ba8308f3a3e4efc38904d5bbd04db728"],["/album/index.html","7d8980601337a931b899ac68d8d0166c"],["/archives/2023/12/index.html","6b451b4e4b88cb40c138e60e6b17701d"],["/archives/2023/index.html","21689a2154beee3b6ca7611662b71425"],["/archives/2024/01/index.html","79afd93cbeaae8f8c48774c62998b1af"],["/archives/2024/01/page/2/index.html","0954f3cb04aca1f82162fa28539cd4b5"],["/archives/2024/01/page/3/index.html","ab5b6d7f57b7b6312a1658f9856852f3"],["/archives/2024/01/page/4/index.html","617d8d8fd214004144d6b1377237dbb2"],["/archives/2024/01/page/5/index.html","3f4097d3f7189d928dce5b26cf094fed"],["/archives/2024/02/index.html","8302372366446bd9867a26556d964726"],["/archives/2024/03/index.html","043f063afb98f5f4d1c0caad58a34eaf"],["/archives/2024/05/index.html","0160ad0843fbb5c14feca0ddcbcb682b"],["/archives/2024/06/index.html","c066f8b7289a66d28838e630460f6929"],["/archives/2024/07/index.html","f4e02264656dab178c6dde28c3066f43"],["/archives/2024/08/index.html","3d33416281d637130df78133b015a5fa"],["/archives/2024/index.html","481da3e4a09859f6dd561307852e42ef"],["/archives/2024/page/2/index.html","1525b20da4040e940f4836713189285d"],["/archives/2024/page/3/index.html","0dfb517258ac05b3859f2330e7b9feef"],["/archives/2024/page/4/index.html","49d497cd7c0887b5617ed911f61ca9b9"],["/archives/2024/page/5/index.html","4b14ff1c7244bb397e4b560d37a976b4"],["/archives/2024/page/6/index.html","e8105846b3a2960a09707fe9a1d41894"],["/archives/2024/page/7/index.html","cd49fc8f6f7219702166154188c0fada"],["/archives/2025/01/index.html","2f722fadfda9c41c848385216b040124"],["/archives/2025/01/page/2/index.html","c7fa20edaf0cd2ceec057d66ba883db2"],["/archives/2025/02/index.html","6ed27ecb7e2d5a80dcb0d4c948f3e751"],["/archives/2025/02/page/2/index.html","60b4739d18d1c24689507ff40e8a02f4"],["/archives/2025/index.html","2107157055625f8b92d90ea1e3af3315"],["/archives/2025/page/2/index.html","3d664d7f2cdd37cede4e9cdf1757ec2d"],["/archives/2025/page/3/index.html","231912af66d9a825e76aa2df478a60d8"],["/archives/2025/page/4/index.html","ce9408c2b51f4baaf4916e8096ea4935"],["/archives/index.html","557b550fe121feb2efda02b0e1178bdf"],["/archives/page/10/index.html","f1e4834c4723e97bbf3052b7ab9891e5"],["/archives/page/11/index.html","f420568572a6e485cea6609173313233"],["/archives/page/2/index.html","5556a2bc9e88a4db0f85c0069db3fac3"],["/archives/page/3/index.html","824a65d14e15df541ad535fbf39b7348"],["/archives/page/4/index.html","a4971c4cd7612a934815fb729f2f65cd"],["/archives/page/5/index.html","8fa19b0218dd778aabeceafdf161ca41"],["/archives/page/6/index.html","4d479dc59ea3ca53941f3aa9e46807a1"],["/archives/page/7/index.html","1ef115ef9caf01633cd0cf5801cfc04c"],["/archives/page/8/index.html","2c71fec1524fc3bd41409fb0ffa1e187"],["/archives/page/9/index.html","e500c80536ed7e0c0e1262a077de4b9e"],["/categories/AI/index.html","a7592f49f4b5c3472bf4265f2e90c0cb"],["/categories/hexo/index.html","8fac353385a0882478e45b9aa1d16e3f"],["/categories/index.html","9c9ee0f18aa3320ffb653760864c3c9f"],["/categories/动漫推荐/index.html","fb788ecdd968cbb48a735b16ae753658"],["/categories/每日一练/index.html","4e99d86c8ed65a77e15dc82f2cdf438b"],["/categories/每日一练/page/2/index.html","8961adaf04371b7f95bce016381571af"],["/categories/知识/Typora/index.html","4a40b21f5048552576612c7f374bede6"],["/categories/知识/index.html","940c6c43504622a146e3da63a7ae3849"],["/categories/网络文学/index.html","9fc24156d536a60432b1f2788bbe7bb6"],["/categories/网络文学/page/2/index.html","fbd595fdc1b2f28bddd0b9e3b2d04206"],["/categories/网络文学/page/3/index.html","e592067a5104c3ed49e05eeb8027591a"],["/categories/网络文学/page/4/index.html","387236066f9189f62561661a507d0047"],["/categories/网络文学/page/5/index.html","70251625fda82745811c386c33cfd3f7"],["/categories/网络文学/page/6/index.html","084d689db8465df2c5c42589c0ab49c4"],["/categories/网络文学/page/7/index.html","8ed45e136f4aa1eede268c57d70ce83f"],["/categories/购物/index.html","357eb252f30abddf19214991232f0079"],["/categories/随笔/index.html","17f5437a0e9ffe88aed62b19e9007b22"],["/comments/index.html","6a1c6b0003ca07c68622f21d903bf637"],["/css/bolan.css","42b062ba4f5586197e4263750431032f"],["/css/index.css","5e04b30de40b7eef015cc7a93dfccd80"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","aadb2e52eb1950b0c94380026e36d92a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","090447354867ca9052ad0d3dfd694e47"],["/img/favicon.png","9df0fe6eb2caebe4fc7d1b895b3cfca5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","bd074ff39fe361266d701957e4cc98fc"],["/img/no.jpg","a6cb2d16a59a356968380c87abe97ea5"],["/img/siteicon/android-chrome-144x144.png","d2b4ee54f1750e280d3a268579bbf37a"],["/img/siteicon/android-chrome-192x192.png","dd43461317357adfca999900e27048f8"],["/img/siteicon/android-chrome-256x256.png","6e4bd63fdfc23169034309abe9d4a3eb"],["/img/siteicon/android-chrome-36x36.png","8d67aacbd6071920ab30cc28a84cf15b"],["/img/siteicon/android-chrome-384x384.png","b0c57f446f785d3a7edc499b13cd0947"],["/img/siteicon/android-chrome-48x48.png","be9b9d15825084d95fcd447c7cd26eca"],["/img/siteicon/android-chrome-512x512.png","89a8c0d4947da3bcf223baf594f8700f"],["/img/siteicon/android-chrome-72x72.png","c993a7f25c6eeee813ca0237c1d4d3d5"],["/img/siteicon/android-chrome-96x96.png","d57ff27418cae450eec55ed86151713b"],["/img/siteicon/apple-touch-icon.png","e6b6ce9fa9a3fa6c473f73b752c64445"],["/img/siteicon/browserconfig.xml","97eec68f66246bd485fb2895c665081d"],["/img/siteicon/favicon-16x16.png","57276d6922c92253d481b61e9cc1d990"],["/img/siteicon/favicon-32x32.png","ff3590a90a9276a3cfd115c15fc99f7e"],["/img/siteicon/mstile-150x150.png","30a3a8a4a0129e29b1d946d6dd46776b"],["/img/siteicon/safari-pinned-tab.svg","1674e69a95b86675532757c12fa19150"],["/img/wechat.jpg","cec0b241da42db37a9016554f83b68c0"],["/img/双头蛇.png","025e96a23643b3ab0651199d2dba4c0a"],["/img/双龙.png","ed13a171a846a7578245d44e0098de9a"],["/img/头像.png","16454a346acce583a9b3063dd1a70f24"],["/img/恐龙.png","f925a728414710e36a4c306625ebb717"],["/img/蛇.png","371d9a3a4f9036b5a9211ccc80174e0e"],["/img/蛇蛇.png","4fc75cef6fc2330939da5ce20975c06b"],["/img/蛇龙.png","2680901f1b36484b7559246e7e42744b"],["/img/蛟.png","9c6bfb0f316ba0fd7603771f222427ae"],["/img/蛟龙.png","3c16c08f97759a54e1f46013243d140b"],["/img/蜥蜴.png","d9bfa5fc8c96e800988fa8bbaa17878d"],["/img/说说.png","2118edcfb1af862f9474d4d5f2b6666d"],["/img/龙.png","0ecc8ea438f6434fba6dcb74a910fb78"],["/index.html","f164ac6a3a66660b955c9836c51b6d82"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","a75e3cd80df05b886b21c497fb9f1678"],["/js/swiper-bundle.min.js","1aba3b60641d8dc579dca329a28d74d8"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","61e6cfd2436499669c6f3b44ead51f31"],["/music/index.html","edee4649dd44d114163775e8a57c2884"],["/page/10/index.html","a9fb5f236cb4adec46e34ae134bc2582"],["/page/11/index.html","68ab64801081f9572cf2ead8b3bdfd36"],["/page/2/index.html","7e7eaf3398ce0526869ccd74678537a7"],["/page/3/index.html","87119152f2563c591b531a92f2ef3a19"],["/page/4/index.html","7ed31672d378fb8baa90082ce4de5314"],["/page/5/index.html","700df0ce18dac24893538a7ecaf839ab"],["/page/6/index.html","42fe4e27ad8170a28ae5e21166225ab7"],["/page/7/index.html","fccdaba6719ab62c049c32ae6a805cf7"],["/page/8/index.html","3d458a6df8958e6cb2a0d5e467587915"],["/page/9/index.html","4204ef2dba1ccd8942ea640db39c66db"],["/plan/index.html","7863f4f5759b11f0ae5c9850b7b3de4b"],["/posts/0.html","3d3a2102f007fe19846bf75da604a2b3"],["/posts/10a3.html","23ade5088cd48ddc7ea6e9fb1872023b"],["/posts/16107.html","fb8c3c293f8dc915eb3f243e51e69bd4"],["/posts/169f.html","76f5246441468d6ad0ae737052585287"],["/posts/18df.html","f06f6d6fbaf2c4df1b14aded852016eb"],["/posts/19dd.html","72312bde54217bd87e313de0c981a3f3"],["/posts/1f13.html","ce992af4288a87d10f69c437fbbf3c07"],["/posts/20040.html","db62821de2881516b08dbda81e7008c7"],["/posts/203c.html","c0a3bd430e66fa430cc534216367b627"],["/posts/22034.html","004a1fa2c12b2508b5093d626d0cf306"],["/posts/22f1.html","198cb67884410eb07ae5a8e8a3f0861a"],["/posts/23777.html","48bb238a767845db8aaed9546caf28f0"],["/posts/27400.html","59bd32bbb2a06225928b15f5cd48f378"],["/posts/28045.html","eb161b156856c943b70226823beeec53"],["/posts/29243.html","4b8629c101ae92579ccc1a75f668d00c"],["/posts/29668.html","14cee7725e161ace1b14de897e06eda4"],["/posts/29695.html","677fd658802f19853b127d22f8df92fe"],["/posts/2c4d.html","b2fe7cf0f7e07047b4e97b0f02a83397"],["/posts/2ecd.html","83856efd4f322c587d6e1887748f7e05"],["/posts/2ff.html","3fd1c024411785270044de597d340c95"],["/posts/3078.html","651e16a56ca274574fbc22b37e2e2415"],["/posts/3200.html","ae2c32ba50a3e1089bb9540973e9d3b6"],["/posts/33a9.html","4fd2336ddebdcb9e4d22f547be0ff9aa"],["/posts/3417.html","3145bd7c620c2a70d3ce40ddcd461b92"],["/posts/3429.html","6832c969ea4db7288bd3e37f79ff47c3"],["/posts/34434.html","8fb94aa2f6b6c09232f73925c37289fa"],["/posts/3569.html","2a9455567183638567cade0e3264ef2d"],["/posts/3ee4.html","f3a445e5e72267e76f8e4084ae5bccac"],["/posts/40776.html","25acc4bf7a0ae3c6b5135fd171684dbd"],["/posts/409d.html","a8763ba1fd37a0e3b3559553619ffa77"],["/posts/4134.html","0896a08e39249fb8995b68b5f9fe6fc5"],["/posts/43378.html","2ebe1daa1f3a4e49dfcfe75d6e885c6a"],["/posts/47e2.html","03da2bb5419973e6fc08c17e7c3284f8"],["/posts/49318.html","ae820a14610e8f951a25543d1346fbe6"],["/posts/4ff3.html","66c9bac640bbaab51329ef097654ec73"],["/posts/5068.html","bb79308f86936fd7c5ed6c6265008f83"],["/posts/51833.html","474c1ee0098fd54ebe59d5b6baee81d1"],["/posts/53de.html","d47c6336c3a4f9faaa4e461c80378376"],["/posts/57116.html","d49b562f80f3737ac901c153323b62cb"],["/posts/5be1.html","32399af9745de5a795ba78ded2a254e7"],["/posts/5f25.html","65f89fe799f1807a69865bd2125a1985"],["/posts/6044.html","d366a11ac19d6f7bd4221bce2bee297f"],["/posts/62819.html","8003afe60019a0d8e632da4177e117de"],["/posts/6581.html","04b565e7d0206ccf4ce54c51e137fdd7"],["/posts/6780.html","02495e7e4eda9d804e9d95bba3365066"],["/posts/67c.html","13e559ae1be1c992e62521b41bef6a40"],["/posts/6a9d.html","2cba02714ebf1200cdf6b171bc005e40"],["/posts/6b6e.html","58a0d011765a356608ff82310fc354a6"],["/posts/72ce.html","6505ff83b894f62026a0cce7ae7e465e"],["/posts/73a2.html","d07a0160fe1377303fa93cbee4ee8098"],["/posts/73b7.html","035ad4a75572144af38850f71088e5b8"],["/posts/78e8.html","e422c7d6f31a5a30ea38f91f263680d6"],["/posts/7967.html","c7ae9dbd3d28a19648fd0538a30a798b"],["/posts/7a27.html","73946a0cf3a2d4a3381fb3949f0ab851"],["/posts/7a68.html","3e79da53e8aef4aefbec5faf1674de71"],["/posts/7d63.html","59002cfa01b0dae0746a7e7b81a66549"],["/posts/7db9.html","cce4316ae8aa28182ae5356234eda4a2"],["/posts/7eb7.html","5db63a3eabbf22a95fdbc281a924682a"],["/posts/7f36.html","366a8bc2af0e7b090fcec7d511a916ee"],["/posts/8192.html","880ed80d0ca785d8493b25420ff8bfc4"],["/posts/83fa.html","cd68033f1ca452e84031a1c734fbd415"],["/posts/857e.html","e5a7b3d4e6033702d4b07033651e2f0c"],["/posts/8a76.html","3b4d004d14be9815fa9251e80eee5a67"],["/posts/9102.html","5efd61c90d8463765760a2e6a35263d2"],["/posts/9241.html","87ceba75808bc5cd2505e901c60bd4a6"],["/posts/952f.html","dc61d70ecb1ab72f038d68419b0114e1"],["/posts/969a.html","03df6c2f67701dfa75e90546c93c6e1b"],["/posts/97b2.html","e01e78dfeb59576566690f29d932b9c0"],["/posts/98f6.html","e60f44b593b93560808ef94b96587553"],["/posts/999a.html","f46d62d18e897fe133698ad94feb4f95"],["/posts/99d3.html","ea05d6f8a13b73f0fb4ec576c005fece"],["/posts/9e51.html","faaea5b2646752e0fe11d3e999f05094"],["/posts/9eb9.html","9d22870eef3426310ae5e5bdc83e090e"],["/posts/a2b3.html","9cda2c735319bacd16a53fe954b75e06"],["/posts/a6ba.html","b55e4e40bf4526cdb5ebb63388bda3e2"],["/posts/ae47.html","827f6408885072e0693212e1545bccd1"],["/posts/b13c.html","bc94f2b994efdd31ce2d76b3bdd4f26d"],["/posts/b179.html","10e27825b30f691d0d75a7c185a08603"],["/posts/b1ea.html","062fec53edfe3e43411aaf59ffa36ed2"],["/posts/b60.html","69d84c1b1bc2c32d5ae3fea8bc4b4ee3"],["/posts/b78a.html","0f927b207865dfdab410c6e57a1ba89f"],["/posts/bbf7.html","cc3e1e5a094327d09d002fefc17bd837"],["/posts/bfa4.html","6b5ca2bec82c00124624778bb491c265"],["/posts/c8b9.html","efeb29ffbba03ccf7c80d868c755bf15"],["/posts/c9af.html","94ac71ed44abc436ced8fc383eaf47b2"],["/posts/ccf6.html","b752e80d141ec9f741ff4665fe104f17"],["/posts/ce61.html","8c21af0d2eb39d6b1c3c88cf6fec0aea"],["/posts/d5d.html","29a6d75d17c200fd4a93b6a8e51f217a"],["/posts/daad.html","e1ef2953d4f4e67c8c78085a12154c9e"],["/posts/dad6.html","546646113c81188c8ed51c1ef0bda8de"],["/posts/db65.html","d345afab53499c663b8601d2df0cd2b0"],["/posts/dc53.html","5ce16789a31738ffcace9faddaf065ee"],["/posts/dd5a.html","966b8c6049fcc2cdaaee8d35221f054a"],["/posts/e279.html","b509390fb77f4dce327313164750a9bf"],["/posts/e2b4.html","4e340e1bde1563e88cfa29a643e32e1f"],["/posts/e56d.html","34077d0aaf76a224c7a0c1d70e6d3770"],["/posts/e672.html","bccf9a4bb8d07ffb3aa6f604dcc6a717"],["/posts/e6e.html","92bad9b641bdd2c6810243214716ed5e"],["/posts/e8d2.html","7366eee03604a5d778f3474cef258b97"],["/posts/e9e4.html","2f2435312aca567f6f670cc893db773d"],["/posts/ec8c.html","fc1d5343ae0290566fdcd3abfd0aec48"],["/posts/ee0c.html","ca1ee1a1050f8d2bf3136b50b4ff3c4f"],["/posts/ee98.html","7a638f83ce68f62150108317d96dd817"],["/posts/eede.html","87d62a4000c3acc7cd85fd75d7a95bbe"],["/posts/f85.html","7350eaf9d3a039b7aa857e7e0c575137"],["/posts/fd8c.html","c6a27eea08f549cef5f47be0dd531970"],["/posts/fdf4.html","e4d2a8afeb4dc8c7d7b1df6cd403376d"],["/sw-register.js","80f5122e09805e3fc7eeac9d0908f476"],["/tags/AI绘画/index.html","157f82d1dbd3dab6dfd20983fdacfe61"],["/tags/AI软件/index.html","955dba40e4824023bbb26a16a440169c"],["/tags/OVERLORD/index.html","626824a6b0caa085b1c104e30e40b6c2"],["/tags/OVERLORD/page/2/index.html","33b216a7f3e28ece41514bd7667dba85"],["/tags/OVERLORD/page/3/index.html","3e8f331c136f91f56a2342e189041543"],["/tags/OVERLORD/page/4/index.html","57efd5bcacabebd1cdc4503b0d7287a8"],["/tags/TYPE-MOON/index.html","87abe91ec925e780fdfd4f2e7569723e"],["/tags/TYPE-MOON/page/2/index.html","cf1efbcd714355d095c5936bb101fb5d"],["/tags/TYPE-MOON/page/3/index.html","0e2d192341b9cdcb526c5c3e9dfedd3b"],["/tags/Typora/index.html","e274500264b61ad5483f7b82a954c511"],["/tags/hexo/index.html","8c1b822660be40fed1e5aa65262dce0b"],["/tags/index.html","b993e2a8436f268542ba3ee19c250897"],["/tags/live2d/index.html","fa4f0833870fa8253e341b2a4f6dc8af"],["/tags/shell/index.html","962e68b853bf96e2ff015d68dd819f39"],["/tags/shell/page/2/index.html","1630661043045f8649d64e0091de55c3"],["/tags/同人二创/index.html","66eaab740fc728e5695be0acb69e4c8d"],["/tags/小说/index.html","5bfd2cd078769dbd85edec00d56f9b2f"],["/tags/扮演/index.html","0aab874896bdf5a473ef701f71328bd6"],["/tags/桌面运维/index.html","a097a43a3ee0ab58ca34311bac711111"],["/tags/知识/index.html","db7d94d89308b36265c06cecd04d1fd9"],["/tags/知识/page/2/index.html","d40c5f49522b67cd7331a46442895f0d"],["/tags/知识/page/3/index.html","30e12345c6f8ffa777786fcca6c66447"],["/tags/神秘学/index.html","998fbe7835b54b529608bf3731a9fc39"],["/tags/老番/index.html","b14187cde837848843d39aaf2420249c"],["/tags/购物/index.html","883b767f68f176bb05129cedb072c4ac"],["/tags/资料/index.html","1e38dd3ff379d5abb0d106f4b0897d3d"],["/tags/资源网站/index.html","1f29927108409c25b1b07dfcd62fadf7"],["/tags/闲聊/index.html","8a0dca5329beaf9a212c1c39e15de42d"],["/tags/音乐说明/index.html","75d28c95daf42246b4873517932cbc4d"],["/website/index.html","d4bfe6399e920a3cddfe0f50fa91607b"]];
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
